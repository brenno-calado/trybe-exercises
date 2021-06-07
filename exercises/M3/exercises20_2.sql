USE `sakila`;
SELECT * FROM `film`;
SELECT `title` AS `Título`, `release_year` AS `Ano de lançamento`, `rating` AS `Classificação etária` from `film`;
SELECT DISTINCT `last_name` FROM `actor`;
SELECT COUNT(`title`) AS `filmes(total)` FROM `film`;
SELECT COUNT(DISTINCT `customer_id`) FROM `payment`;
SELECT COUNT(DISTINCT `last_name`) FROM `actor`;
SELECT COUNT(`name`) FROM `category`;
SELECT COUNT(`country`) FROM `country`;
SELECT name FROM language WHERE name != 'English';
SELECT 
    `title`,
    `release_year`,
    `length`,
    `rating`,
    `replacement_cost`
FROM
    `film`
ORDER BY `length` DESC , `replacement_cost`
LIMIT 20;