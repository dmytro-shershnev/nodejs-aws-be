## Product Service API
## Task 3

Product Service Domain URL:
- https://vibhfp3gqe.execute-api.eu-west-1.amazonaws.com/


| APIs                | Example URL                                                                                                          | Description                                    |
|---------------------|----------------------------------------------------------------------------------------------------------------------|------------------------------------------------|
| GET `/products`     | [/products](https://vibhfp3gqe.execute-api.eu-west-1.amazonaws.com/dev/products)                                     | Returns list of products (based on mock data). |
| GET `/products/:id` | [/products/:id](https://vibhfp3gqe.execute-api.eu-west-1.amazonaws.com/dev/products/7567ec4b-b10c-48c5-9345-fc73c48a80aa) | Returns 1 searched product from collection.    |

URL to Pull Request with updated SPA:
- https://github.com/dmytro-shershnev/nodejs-aws-fe/pull/2
- FE with integrated product service (https://d3rcziakc8rsyb.cloudfront.net/)

Product Schema Example:
```json
{
  "id": "7567ec4b-b10c-48c5-9345-fc73c48a80aa",
  "title": "WD 2TB Elements Portable External Hard Drive - USB 3.0 ",
  "price": 64,
  "description": "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system",
  "count": 203
}
```

- SWAGGER documentation is created for Product Service (`openapi.yml`)
- Lambda handlers are covered by basic UNIT tests (NO infrastructure logic is needed to be covered) to run test execute `npm run test`

## Task 4
- [x] Task 4.1 is implemented
- [x] Task 4.2 is implemented lambda links are provided and returns data
- [ ] Task 4.3 is implemented lambda links are provided and products is stored in DB (call Task 4.2 to see the product) (works only from `sls invoke local function`)
      Should be fixed.

Additional (optional) tasks
- [x] +1 (All languages) - All lambdas return error 500 status code on any error (DB connection, any unhandled error in code)
- [x] +1 (All languages) - All lambdas do console.log for each incoming requests and their arguments
- [x] +1 (All languages) - Transaction based creation of product (in case stock creation is failed then related to this stock product is not created and not ready to be used by the end user and vice versa) (https://devcenter.kinvey.com/nodejs/tutorials/bl-transactional-support)