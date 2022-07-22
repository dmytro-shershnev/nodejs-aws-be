import type { APIGatewayProxyEvent, APIGatewayProxyResult, Handler } from "aws-lambda"
import type { FromSchema } from "json-schema-to-ts";
import { HttpStatusCode } from './constants';

type ValidatedAPIGatewayProxyEvent<S> = Omit<APIGatewayProxyEvent, 'body'> & { body: FromSchema<S> }
export type ValidatedEventAPIGatewayProxyEvent<S> = Handler<ValidatedAPIGatewayProxyEvent<S>, APIGatewayProxyResult>

export const formatJSONResponse = <T>(httpStatusCode: number = HttpStatusCode.OK, response: T | Array<T> | string) => {
  return {
    statusCode: httpStatusCode,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "content-type": "application/json"
    },
    body: JSON.stringify(response)
  }
}
