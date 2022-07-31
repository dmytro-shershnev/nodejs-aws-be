import { formatJSONResponse, ValidatedEventAPIGatewayProxyEvent } from '../../libs/api-gateway';
import { middyfy } from '../../libs/lambda';
import { HttpStatusCode } from '../../libs/constants';
import { getProducts } from '../../libs/product-service';

const getProductsList: ValidatedEventAPIGatewayProxyEvent<unknown> = async (event) => {
  console.info("EVENT\n" + JSON.stringify(event, null, 2));

  try {
    const products = await getProducts();

    return formatJSONResponse(HttpStatusCode.OK, products);
  } catch (error) {
    console.log('Error: ', error);

    return formatJSONResponse(HttpStatusCode.SERVER_ERROR, 'Internal server error');
  }
};

export const main = middyfy(getProductsList);
