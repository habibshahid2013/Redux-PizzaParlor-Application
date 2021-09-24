CREATE TABLE "pizza" (
	"id" SERIAL PRIMARY KEY,
	"name" VARCHAR(100) NOT NULL,
	"description" VARCHAR(1000) NOT NULL,
	"price" NUMERIC (20, 2) NOT NULL,
	"image_path" VARCHAR(1000) NOT NULL
);



INSERT INTO "pizza" ("name", "description", "price", "image_path")
VALUES ('Tomato Soup','If you like pizza, but you hate the toppings, the cheese, and the crust, you''ll love this!',12.99,'https://natashaskitchen.com/wp-content/uploads/2021/08/Tomato-Soup-Recipe-4-728x1092.jpg'),
('Onomatopizza','We start with a WHOMP of dough, SPLAT some marinara on it, PLOP enough cheese on there to make a mouse PEEP. Top it off with some SIZZLING bacon, and BOOM there it is! We guarantee you''ll SMACK your lips.',14.99,'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/classic-cheese-pizza-1617996277.jpg?crop=1.00xw:1.00xh;0,0&resize=980:*'),
('Pepperoni','Classic pizza with cheese and pepperoni. Baked with a traditional crust in our brick oven.',14.99,'https://www.simplyrecipes.com/thmb/8caxM88NgxZjz-T2aeRW3xjhzBg=/2000x1125/smart/filters:no_upscale()/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2019__09__easy-pepperoni-pizza-lead-3-8f256746d649404baa36a44d271329bc.jpg'),
('Chinese Firedragon','Pepperoni, pineapple and banana peppers.',15.99,'https://tmbidigitalassetsazure.blob.core.windows.net/rms3-prod/attachments/37/1200x1200/Chinese-Cashew-Chicken-Pizza_EXPS_TOHESCODR20_245934_B03_17_1b.jpg'),
('Bad Date','Garlic, Onion and Pepperoni.',24.99,'https://glutenfreeonashoestring.com/wp-content/uploads/2014/11/Pulling-one-garlic-pizza-breadstick-with-cheese-trailing.jpg'),
('Another Little Pizza My Heart', 'Cheese Pizza. Personal size only.', 5.99,'https://kitchenatics.com/wp-content/uploads/2020/09/Cheese-pizza-1-500x375.jpg');
('Over the Rainbow','Taste the rainbow! One ingredient of each color: pepperoni, doritos, pineapple, olives, cheese, peppers and onion. Complimentary water served in a spray bottle to taste an actual rainbow.',19.99,'https://ca-times.brightspotcdn.com/dims4/default/49bfde5/2147483647/strip/true/crop/1000x734+0+0/resize/840x617!/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F98%2Ff5%2F6c7ad809a6388f9822fefa490fba%2Fla-dd-pizza-hut-doritos-crust-pizza-20141205-001'),

CREATE TABLE "orders" (
	"id" SERIAL PRIMARY KEY,
	"customer_name" VARCHAR (1000) NOT NULL,
	"street_address" VARCHAR(1000) NOT NULL,
	"city" VARCHAR(1000) NOT NULL,
	"zip" VARCHAR(20) NOT NULL,
	"type" VARCHAR(100) NOT NULL,
	"total" NUMERIC (20, 2) NOT NULL,
	"time" TIMESTAMP DEFAULT NOW() NOT NULL
);

CREATE TABLE "line_item" (
	"id" SERIAL PRIMARY KEY,
	"order_id" INT REFERENCES "orders" ON DELETE CASCADE,
	"pizza_id" INT REFERENCES "pizza",
	"quantity" INT 
);

DROP TABLE "line_item";
