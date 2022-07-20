## Product Service API

Product Service Domain URL:
- https://vibhfp3gqe.execute-api.eu-west-1.amazonaws.com/


| APIs                | Example URL                                                                                                           | Description                                    |
|---------------------|-----------------------------------------------------------------------------------------------------------------------|------------------------------------------------|
| GET `/products`     | [/products](https://vibhfp3gqe.execute-api.eu-west-1.amazonaws.com/dev/products)                                      | Returns list of products (based on mock data). |
| GET `/products/:id` | [/products/:id](https://vibhfp3gqe.execute-api.eu-west-1.amazonaws.com/dev/products/9) | Returns 1 searched product from collection.    |

URL to Pull Request with updated SPA:
- https://github.com/dmytro-shershnev/nodejs-aws-fe/pull/2

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