CREATE TABLE products
(
    id serial primary key,
    name varchar(40),
    firstimg text,
    secondimg text,
    thirdimg text,
    description varchar(200),
    price money
)
CREATE TABLE customers
(
    id serial primary key,
    custid varchar(40),
    name varchar(90)
)
CREATE TABLE shoppingCart
(
    id serial primary key,
    product_id INTEGER REFERENCES products(id),
    customer_id INTEGER references customers(id)
)
INSERT INTO products
    ( name, firstimg, secondimg, thirdimg, description, price)
VALUES
    ( 'HUMAN MADE PULLOVER HOODIE', 'https://cdn.shopify.com/s/files/1/0051/7042/products/Human-Made-PO-Zip-Hoodie-Gray-1_2048x2048.jpg?v=1519229435', 'https://cdn.shopify.com/s/files/1/0051/7042/products/Human-Made-PO-Zip-Hoodie-Gray-2_2048x2048.jpg?v=1519229439', 'https://cdn.shopify.com/s/files/1/0051/7042/products/Human-Made-PO-Zip-Hoodie-Gray-4_2048x2048.jpg?v=1519229452', 'pullover hoodie with minurature zipper and waist drawstrings. screen printed logo. 100% cotton. made in india', 125.00) 