import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import { formatJSONResponse } from '@libs/api-gateway';
import { middyfy } from '@libs/lambda';

import products from '../../mock/products.json';

const getProductsById = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  const id = event.pathParameters.id;

  const product = products.filter(item => item.id === id);

  if (!product || !product.length) {
    return formatJSONResponse(404,{
      message: 'Product not found.',
    });
  }

  return formatJSONResponse(200,{
    product,
  });
};

export const main = middyfy(getProductsById);
