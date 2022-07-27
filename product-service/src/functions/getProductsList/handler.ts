import { APIGatewayProxyResult } from 'aws-lambda';
import { formatJSONResponse } from '../../libs/api-gateway';
import { middyfy } from '../../libs/lambda';
import { getMockData } from '../../libs/mock-request-data';
import { HttpStatusCode } from '../../libs/constants';

const getProductsList = async (): Promise<APIGatewayProxyResult> => {
  const products = await getMockData();

  return formatJSONResponse(HttpStatusCode.OK, products);
};

export const main = middyfy(getProductsList);
