import {handlerPath} from '@libs/handler-resolver';

export default {
    handler: `${handlerPath(__dirname)}/handler.main`,
    events: [{
        http: {
            method: 'get',
            path: '/products/{id}',
            cors: true,
            documentation: {
                description: 'Get product by Id',
                pathParams: [{
                    name: 'id',
                    description: 'Product identifier'
                }],
                methodResponses: [{
                    statusCode: '200',
                    responseModels: {
                        'application/json': 'Product'
                    }
                }, {
                    statusCode: '404',
                    responseModels: {
                        'application/json': 'ServiceError'
                    }
                }, {
                    statusCode: '500',
                    responseModels: {
                        'application/json': 'ServiceError'
                    }
                }]
            }
        } as any
    }],
};
