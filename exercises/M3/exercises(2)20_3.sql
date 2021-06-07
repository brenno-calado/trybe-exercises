USE sakila;
SELECT `title` FROM `film` WHERE `title` LIKE 'ace %' OR `title` LIKE '% ace';
SELECT * FROM `film` WHERE `description` LIKE '% china';
SELECT * FROM `film` WHERE `description` LIKE '% girl %' AND `title` LIKE '% lord';
SELECT `title` FROM `film` WHERE `title` LIKE '___gon%';
SELECT `title`, `description` FROM `film` WHERE `title` LIKE '___gon%' AND `description` LIKE '% Documentary %';
SELECT `title` FROM `film` WHERE `title` LIKE '% academy' OR `title` LIKE 'mosquito %';
SELECT `title`, `description` FROM `film` WHERE `description` LIKE '%monkey%' AND `description` LIKE '%sumo%';
SELECT `title`, `length` FROM `film` WHERE `length` BETWEEN 50 AND 120 ORDER BY `length`;
SELECT `name` FROM `language`
WHERE `name` BETWEEN 'Italian' AND 'Mandarin';
SELECT * FROM `rental`
WHERE `rental_date` BETWEEN '2005-05-27' AND '2005-07-17';
SELECT `first_name`, `last_name`, `email` FROM `customer` WHERE `last_name` IN ('hicks', 'crawford', 'henry', 'boyd', 'mason', 'morales', 'kennedy')
ORDER BY `first_name`;
SELECT `email` FROM `customer` WHERE `address_id` BETWEEN 172 AND 176
ORDER BY `email`;
SELECT COUNT(`payment_id`) FROM `payment` WHERE `payment_date` BETWEEN '2005-05-01' AND '2005-08-01';
SELECT `title`, `release_year`, `rental_duration` FROM `film`
WHERE `rental_duration` BETWEEN '3' AND '6'
ORDER BY `rental_duration` DESC, `title`;
SELECT `title`, `rating` FROM `film` WHERE `rating`IN ('G', 'PG', 'PG-13')
ORDER BY `title`
LIMIT 500;
SELECT * FROM `payment`
WHERE DATE(`payment_date`) = '2005-07-31';
SELECT * FROM `payment`
WHERE `payment_date` LIKE '2005-07-31%';
SELECT * FROM `payment`
WHERE `payment_date` BETWEEN '2005-05-26 00:00:00' AND '2005-05-27 00:00:00';
SELECT 
    YEAR(`payment_date`) AS 'year',
    MONTH(`payment_date`) AS 'month',
    DAY(`payment_date`) AS 'day',
    HOUR(`payment_date`) AS 'hour',
    MINUTE(`payment_date`) AS 'minute',
    SECOND(`payment_date`) AS 'second',
    DATE(`payment_date`) AS 'full date'
FROM
    `payment`;
SELECT COUNT(`payment_id`) FROM `payment` WHERE DATE(`payment_date`) = '2005-05-26';
SELECT COUNT(`payment_id`) FROM `payment` WHERE DATE(`payment_date`) BETWEEN '2005-07-01' AND '2005-08-22';
SELECT 
    DATE(`rental_date`) AS 'date',
    YEAR(`rental_date`) AS 'year',
    MONTH(`rental_date`) AS 'month',
    DAY(`rental_date`) AS 'day',
    HOUR(`rental_date`) AS 'hour',
    MINUTE(`rental_date`) AS 'minute',
    SECOND(`rental_date`) AS 'second'
FROM
    `rental`
WHERE
    `rental_id` = 10330;
SELECT 
    *
FROM
    `payment`
WHERE
    DATE(`payment_date`) = '2005-07-28'
        AND HOUR(`payment_date`) >= 22;
