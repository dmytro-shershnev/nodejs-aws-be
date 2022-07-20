import type { APIGatewayProxyEvent, APIGatewayProxyResult, Handler } from "aws-lambda"
import type { FromSchema } from "json-schema-to-ts";

type ValidatedAPIGatewayProxyEvent<S> = Omit<APIGatewayProxyEvent, 'body'> & { body: FromSchema<S> }
export type ValidatedEventAPIGatewayProxyEvent<S> = Handler<ValidatedAPIGatewayProxyEvent<S>, APIGatewayProxyResult>

export const formatJSONResponse = (httpStatusCode: number = 200, response: Record<string, unknown>) => {
  return {
    statusCode: httpStatusCode,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "content-type": "application/json"
    },
    body: JSON.stringify(response)
  }
}
