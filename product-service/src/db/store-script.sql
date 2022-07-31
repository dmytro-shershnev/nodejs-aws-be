CREATE database storedb;

CREATE extension if not exists "uuid-ossp";


CREATE TABLE products (
    id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    title TEXT NOT NULL,
    description TEXT,
    image_url TEXT,
    price INT
);


CREATE TABLE stock (
    product_id uuid,
    count INT NOT NULL,
    FOREIGN KEY ("product_id") REFERENCES "products" ("id")
);

INSERT INTO
    products (title, description, image_url, price)
VALUES
    ('WD 2TB Elements Portable External Hard Drive - USB 3.0', 'USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity', 'https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg', 64),
    ('SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb per second', 'Easy upgrade for faster boot up, shutdown, application load and response', 'https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg', 109),
    ('Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5', '3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance', 'https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg', 109),
    ('WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive', 'Expand your PS4 gaming experience, Play anywhere Fast and easy, setup Sleek design with high capacity, 3-year manufacturer''s limited warranty', 'https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg', 114),
    ('Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin', '21. 5 inches Full HD (1920 x 1080) widescreen IPS display And Radeon free Sync technology', 'https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg', 599),
    ('Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED', '49 INCH SUPER ULTRAWIDE 32:9 CURVED GAMING MONITOR with dual 27 inch screen side by side QUANTUM DOT (QLED) TECHNOLOGY, HDR support', 'https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg', 999);


INSERT INTO
    stock (product_id, count)
VALUES
    ('0c03fc18-7e05-4814-9115-41bba4714e7c', 203),
    ('35d4b7a3-6cc6-496b-b7a1-5131a7f32acd', 470),
    ('32e87272-707c-47df-8d5f-6d427fd6f981', 319),
    ('f1929a1a-823d-4537-8515-d24f87e8ed98', 400),
    ('7670b7c3-a06a-4d60-9eff-a1f74b6490b3', 250),
    ('51cecb58-a0c6-482c-8372-0e1f18902cb1', 140);
