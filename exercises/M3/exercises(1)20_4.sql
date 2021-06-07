USE sakila;
SET SQL_SAFE_UPDATES = 0;
INSERT INTO staff
(	address_id,
	first_name,
    last_name,
    store_id,
    username)
VALUES
(5,'Brenno','Calado',2,'bcvmn'),
(4,'May','Silva',2,'maysrocha');

INSERT INTO actor (first_name, last_name)
SELECT customer.first_name, customer.last_name
FROM customer
LIMIT 5;

INSERT INTO category (`name`) VALUES ('duorama'), ('distopia'), ('beer');

INSERT INTO store (address_id, manager_staff_id) VALUE (2, 5);

UPDATE staff SET first_name = 'Brenno' WHERE staff_id = 5;

UPDATE staff SET first_name = (
CASE staff_id
	WHEN 5 THEN 'Yuki'
	WHEN 6 THEN 'Mars'
ELSE first_name
END);

UPDATE actor SET first_name = 'JULES' WHERE first_name = 'JULIA';

UPDATE category SET `name` = 'Science Fiction' WHERE `name` = 'Sci-Fi';

UPDATE film 
SET 
    rental_rate = 25
WHERE
    `length` >= 100
        AND rating IN ('G' , 'PG', 'PG-13')
        AND replacement_cost > 20;

UPDATE film
SET rental_rate = (
CASE
	WHEN `length` BETWEEN 0 AND 100 THEN 10
	WHEN `length` > 100 THEN 20
END);

DELETE FROM film_actor WHERE actor_id = 7;
DELETE FROM actor WHERE first_name = 'GRACE';

DELETE FROM film_actor WHERE actor_id = 12;
DELETE FROM actor WHERE first_name = 'KARL';

DELETE FROM film_actor WHERE actor_id IN (8, 103, 181);
DELETE FROM actor WHERE first_name = 'MATTHEW';

DELETE FROM film_text WHERE `description` LIKE ('% saga %');

TRUNCATE film_actor;
TRUNCATE film_category;
