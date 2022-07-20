import { APIGatewayProxyResult } from 'aws-lambda';
import { formatJSONResponse } from '@libs/api-gateway';
import { middyfy } from '@libs/lambda';

import products from '../../mock/products.json';

const getProductsList = async (): Promise<APIGatewayProxyResult> => {
  return formatJSONResponse(200,{
    products,
  });
};

export const main = middyfy(getProductsList);
