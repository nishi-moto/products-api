DROP TABLE IF EXISTS product_groups;

CREATE TABLE product_groups
(
  id SERIAL PRIMARY KEY,
  name varchar(120) NOT NULL
);

DROP TABLE IF EXISTS products;

CREATE TABLE products
(
  id SERIAL PRIMARY KEY,
  name varchar(120) NOT NULL,
  description varchar(300) NOT NULL,
  price decimal(8,2),
  product_group_id integer,
   CONSTRAINT fk_product_group_id
      FOREIGN KEY(product_group_id) 
	  REFERENCES product_groups(id)
);

INSERT INTO product_groups (name) VALUES ('Product Group 1');

INSERT INTO product_groups (name) VALUES ('Product Group 2');