import { formatJSONResponse, ValidatedEventAPIGatewayProxyEvent } from '../../libs/api-gateway';
import { middyfy } from '../../libs/lambda';
import { HttpStatusCode } from '../../libs/constants';
import { getProductById } from '../../libs/product-service';

const getProductsById: ValidatedEventAPIGatewayProxyEvent<unknown> = async (event) => {
  console.log('Request pathParameters: ', event.pathParameters);

  try {
    if (!event.pathParameters || !event.pathParameters['id']) {
      return formatJSONResponse(HttpStatusCode.MISSING_PARAMETER, 'Missing product Id');
    }

    const { id } = event.pathParameters;
    const product = await getProductById(id);

    if (product) {
      return formatJSONResponse(HttpStatusCode.OK, product);
    }

    return formatJSONResponse(HttpStatusCode.NOT_FOUND, 'Product not found');
  } catch (error) {
    console.log('Error: ', error);

    return formatJSONResponse(HttpStatusCode.SERVER_ERROR, 'Internal server error');
  }
};

export const main = middyfy(getProductsById);
