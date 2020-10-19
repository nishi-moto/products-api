# Products API
## The Purpose

This is an exercise / small project that uses Docker, PostGres SQL and Express to build an API to handle Product data. The "docker-compose.yml" docker file was provided for us.


### The tables

Tables in the database:

* `ProductGroups` that holds groups of products such as Food, Beverages and Toys
  * The product group should have two fields
    * `Id` an unique identifer (you pick a suitable type)
    * `Name` - the name of the group

* `Products` - that contains description about the products, description and price. It also have a foreign key to the `ProductGroups` table, so that a product can belong to a product group
  * `Id` an unique identifer 
  * `Name` - the name of the product such as Beer, Pizza or Lego
  * `Description` - the description of the product
  * `Price` - the price, in decimal form, of the product
  * `ProductGroupId` - the foreign key to the product group that the product belongs too.


### The API endpoints 

The API should have the following endpoints:

* `GET` `/api/products` - list all products, including group name for each product
* `GET` `/api/products/:id`  - get one, including group name
* `POST` `/api/products` - add a new product, with all fields except id. Also, require a `productGroupId` value as parameter. You can assume that the clients knows an existing `productGroupId`
* `PUT` `/api/products/:id` - updates the product information with the given id
* `DEL` `/api/products/:id` - delete the product with the given id

