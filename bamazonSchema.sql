CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products (
  item_id (rand()*5000)
  product_name VARCHAR(25) NOT NULL,
  department_name VARCHAR(25) NOT NULL,
  price DECIMAL(12,2) not null,
  stock_quantity INT default 0,
  PRIMARY KEY (item_id)
);

CREATE TABLE departments (
  department_id INT NOT NULL AUTO_INCREMENT,
  department_name VARCHAR(45) NULL,
  total_sales DECIMAL(19,2) NULL,
  PRIMARY KEY (department_id)
  );


INSERT INTO products(product_name,department_name,price,stock_quantity)
values

INSERT INTO departments(department_name, total_sales)
values

SELECT * FROM products;
-- SHOW LOW BALANCE OF ITEMS IN TABLE
SELECT item_id , product_name, department_name,stock_quantity, price FROM products
WHERE stock_quantity <=5;
-- UPDATE product 
UPDATE products
SET stock_quantity = 3
WHERE item_id = 2;
SELECT * FROM products;
UPDATE products SET stock_quantity = 60
WHERE item_id = 5;
SELECT item_id AS Item ID ,product_name AS Product, price AS Price, stock_quantity AS Avaliablie  FROM products;
INSERT INTO
SELECT * FROM products;

CREATE TABLE `bamazon`.`departments` (
  `department_id` INT NOT NULL AUTO_INCREMENT,
  `department_name` VARCHAR(45) NULL,
  `total_sales` DECIMAL(19,2) NULL
  PRIMARY KEY (`department_id`));


INSERT INTO departments(department_id)
SELECT department_name
TRUNCATE TABLE departments;
INSERT INTO departments (department_name)
SELECT DISTINCT department_name FROM products;
INSERT INTO departments (department_name)
SELECT DISTINCT department_name FROM products;