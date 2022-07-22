import type {AWS} from '@serverless/typescript';

import getProductsList from '@functions/getProductsList';
import getProductsById from '@functions/getProductsById';

const serverlessConfiguration: AWS = {
    service: 'product-service',
    frameworkVersion: '3',
    plugins: [
        'serverless-esbuild',
        'serverless-offline',
        '@martinsson/serverless-openapi-documentation',
    ],
    provider: {
        name: 'aws',
        runtime: 'nodejs14.x',
        region: 'eu-west-1',
        apiGateway: {
            minimumCompressionSize: 1024,
            shouldStartNameWithService: true,
        },
        environment: {
            AWS_NODEJS_CONNECTION_REUSE_ENABLED: '1',
            NODE_OPTIONS: '--enable-source-maps --stack-trace-limit=1000',
        },
    },
    // import the function via paths
    functions: { getProductsList, getProductsById },
    package: { individually: true },
    custom: {
        esbuild: {
            bundle: true,
            minify: false,
            sourcemap: true,
            exclude: ['aws-sdk'],
            target: 'node14',
            define: {'require.resolve': undefined},
            platform: 'node',
            concurrency: 10,
        },
        'serverless-offline': {
            httpPort: 8000
        },
        documentation: {
            api: {
                info: {
                    version: '1',
                    title: 'Product Service API',
                    description: 'Product Service API'
                }
            },
            models: [{
                name: 'Product',
                description: 'Product model',
                contentType: 'application/json',
                schema: {
                    type: 'object',
                    properties: {
                        id: {
                            type: 'string',
                            description: 'Product identifier',
                        },
                        title: {
                            type: 'string',
                            description: 'Product title',
                        },
                        description: {
                            type: 'string',
                            description: 'Product description',
                        },
                        price: {
                            type: 'number',
                            description: 'Product price',
                        },
                        imageUrl: {
                            type: 'string',
                            description: 'Product image URL',
                        },
                        count: {
                            type: 'number',
                            description: 'Count of items in stock'
                        }
                    }
                }
            }, {
                name: 'ProductList',
                description: 'List of products',
                contentType: 'application/json',
                schema: {
                    type: 'array',
                    items: {
                        $ref: '{{model: Product}}'
                    }
                }
            }, {
                name: 'ServiceError',
                description: 'Service error',
                contentType: 'application/json',
                schema: {
                    type: 'object',
                    properties: {
                        statusCode: {
                            type: 'number',
                            description: 'Status code of error'
                        },
                        message: {
                            type: 'string',
                            description: 'Error message'
                        }
                    }
                }
            }]
        }
    },
};

module.exports = serverlessConfiguration;
