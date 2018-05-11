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

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES 
("Kleenex", "Home", 5.00, 65), 
("Seltzer", "Beverage", 2.00, 300), 
("Bananas", "Produce", 1.00, 33),
("Avocados", "Produce", 3.00, 12), 
("iPhone Charger", "Electronics", 45.00, 7),
("Graphing Calculator", "Electronics", 100.00, 3), 
("Windex", "Home", 8.00, 16), 
("#2 Pencil", "Office Supplies", 1.50, 275), 
("3-Hole Punch", "Office Supplies", 14.00, 4), 
("Garbage Bags", "Home", 10.00, 60);


