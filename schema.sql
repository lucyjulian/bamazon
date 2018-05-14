DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;
USE bamazon;

CREATE TABLE products(
  item_id INTEGER(100) AUTO_INCREMENT NOT NULL,
  product_name VARCHAR(100),
  department_name VARCHAR(100),
  price INTEGER(250),
  stock_quantity INTEGER(250),
  PRIMARY KEY (item_id)
);

SELECT * FROM products;