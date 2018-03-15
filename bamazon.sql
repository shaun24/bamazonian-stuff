DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products (
  item_id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(45) NULL,
  department_name VARCHAR(45) NULL,
  price DECIMAL(10,2) NOT NULL,
  stock_quantity INT(15) NOT NULL,
  PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Mighty Leaf Black Tea", "Groceries", 6.99, 44),
        ("Tatami BJJ GI", "Athletic wear", 95.00, 111),
        ("Thorne Research Multi-Vitamin", "Supplements", 65.00, 285),
        ("Swear Words coloring book", "books", 6.49, 1018),
        ("Resistance Band Set", "exercise equipment", 24.97,96),
        ("Cremo Moisturizer", "mens shaving", 7.99, 1335),
        ("Hex bar", "exercise equipment", 142.99, 66),
        ("ukulele", "musical instruments", 39.99, 1013),
        ("Bose headphones", "Electronics", 229.99, 33),
        ("Motrin", "medicine", 5.99, 6354);