import { handlerPath } from '@libs/handler-resolver';

export default {
    handler: `${handlerPath(__dirname)}/handler.main`,
    events: [{
        http: {
            method: 'get',
            path: '/products',
            cors: true,
            documentation: {
                description: 'Get all products',
                methodResponses: [{
                    statusCode: '200',
                    responseModels: {
                        'application/json': 'ProductList'
                    }
                }, {
                    statusCode: '500',
                    responseModels: {
                        'application/json': 'ServiceError'
                    }
                }]
            }
        } as any,
    }],
};
