USE bamazon;

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