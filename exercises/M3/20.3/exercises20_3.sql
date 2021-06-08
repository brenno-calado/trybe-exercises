USE sakila;
SELECT * FROM `film`
WHERE `title` NOT LIKE 'academy%';

SELECT * FROM `customer`
WHERE `email` = 'LEONARD.SCHOFIELD@sakilacustomer.org';

SELECT * FROM `customer`
WHERE `active` <> 1 AND `store_id` = 2
ORDER BY CONCAT(`first_name`, `last_name`);

SELECT 
    `title`, `description`, `release_year`, `replacement_cost`
FROM
    `film`
WHERE
    (`rating` IN ('G' , 'PG', 'PG-13'))
AND
	`replacement_cost` >= 18 
ORDER BY `replacement_cost` DESC
LIMIT 100;

SELECT 
    COUNT(`customer_id`) AS `Active clients store 1`
FROM
    `customer`
WHERE
    `store_id` = 1 AND `active` IS TRUE;

SELECT * FROM `customer`
WHERE
	`store_id` = 1 AND `active` IS NOT TRUE;

SELECT 
    `title`
FROM
    `film`
WHERE
    `rating` = 'NC-17'
ORDER BY
	`replacement_cost`, `title`
LIMIT 50;
