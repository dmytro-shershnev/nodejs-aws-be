import { APIGatewayProxyResult } from 'aws-lambda';
import { formatJSONResponse } from '@libs/api-gateway';
import { middyfy } from '@libs/lambda';

import PRODUCTS from '../../mock/products.json';

const getProductsList = async (): Promise<APIGatewayProxyResult> => {
  return formatJSONResponse({
    PRODUCTS,
  });
};

export const main = middyfy(getProductsList);
