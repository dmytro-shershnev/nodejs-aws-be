import { formatJSONResponse, ValidatedEventAPIGatewayProxyEvent } from '../../libs/api-gateway';
import { middyfy } from '../../libs/lambda';
import { HttpStatusCode } from '../../libs/constants';
import { Product } from '../../libs/models';
import { addProduct } from '../../libs/product-service';
import schema from './schema';
import { validateSchema } from '../../libs/schema-validator';


const addProductHandler: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async (event) => {
    console.log('Add product request data: ', event.body);

    try {
        const request = {...event.body};
        const checkSchema = validateSchema(schema, request);

        if (!checkSchema.success) {
            return formatJSONResponse(HttpStatusCode.BAD_REQUEST, {
                message: 'Failure to validate schema!',
                error: checkSchema.errors,
            });
        }

        await addProduct(request as Product);

        return formatJSONResponse(HttpStatusCode.RESOURCE_CREATED, 'OK');
    } catch (error) {
        console.log('Error: ', error);

        return formatJSONResponse(HttpStatusCode.SERVER_ERROR, 'Internal server error');
    }
};

export const main = middyfy(addProductHandler);