import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import { formatJSONResponse } from '@libs/api-gateway';
import { middyfy } from '@libs/lambda';
import { getMockData } from "@libs/mock-request-data";
import { HttpStatusCode } from "@libs/constants";

const getProductsById = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  const id = event.pathParameters.id;
  const products = await getMockData();

  const product = products.filter(item => item.id === id);

  if (!product || !product.length) {
    return formatJSONResponse(HttpStatusCode.NOT_FOUND,{
      message: 'Product not found.',
    });
  }

  return formatJSONResponse(HttpStatusCode.OK,{
    product,
  });
};

export const main = middyfy(getProductsById);
