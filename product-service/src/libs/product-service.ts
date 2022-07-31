import { Client, ClientConfig } from 'pg';
import { Product } from './models';

const { PG_HOST, PG_PORT, PG_DATABASE, PG_USERNAME, PG_PASSWORD } = process.env;

const dbOptions: ClientConfig = {
    host: PG_HOST,
    port: PG_PORT ? Number(PG_PORT) : 5432,
    database: PG_DATABASE,
    user: PG_USERNAME,
    password: PG_PASSWORD,
};

const client = new Client(dbOptions);

export const getProducts = async (): Promise<Array<Product>> => {
    try {
        const query = `SELECT * FROM "products" LEFT JOIN "stock" ON "products"."id" = "stock"."product_id"`;

        await client.connect();

        const { rows } = await client.query(query);

        return rows.map(row => {
            return {
                id: row.id,
                title: row.title,
                description: row.description,
                imageUrl: row.image_url,
                price: row.price,
                count: row.count,
            }
        })
    } catch (error) {
        console.error('Error during database request get products executing: ', error);
    } finally {
        await client.end();
    }
};

export const getProductById = async (id: string): Promise<Product> => {
    const query = `SELECT * 
        FROM "products" 
        LEFT JOIN "stock" ON "products"."id" = "stock"."product_id" 
        WHERE "products"."id" = ($1)::uuid`;

    const client = new Client(dbOptions);

    try {
        await client.connect();
        const { rows } = await client.query(query, [id]);

        if (rows.length) {
            const row = rows[0];
            return {
                id: row.id,
                title: row.title,
                description: row.description,
                imageUrl: row.image_url,
                price: row.price,
                count: row.count,
            };
        }

        return undefined;
    } catch (error) {
        console.error('Error during database request get product by id executing: ', error);
    } finally {
        await client.end();
    }
};

export const addProduct = async (product: Product): Promise<void> => {
    const createProductQuery = `INSERT INTO "products" ("title", "description", "image_url", "price")  
        VALUES ($1, $2, $3, $4) RETURNING id`;

    const createProductValues = [product.title, product.description, product.imageUrl, product.price];

    const createStockQuery = `INSERT INTO "stock" ("product_id", "count") 
        VALUES ($1, $2)`;

    const client = new Client(dbOptions);

    try {
        await client.connect();
        await client.query('BEGIN');

        const result = await client.query(createProductQuery, createProductValues);
        const createStockValues = [result.rows[0].id, product.count];

        await client.query(createStockQuery, createStockValues);
        await client.query('COMMIT');
    } catch (error) {
        console.error('Error during database request add product executing: ', error);

        await client.query("ROLLBACK");
    } finally {
        await client.end();
    }
};