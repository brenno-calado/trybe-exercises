USE sakila;

SELECT 
    actor.first_name, actor.actor_id, film_actor.actor_id
FROM
    actor AS actor
        INNER JOIN
    film_actor AS film_actor ON actor.actor_id = film_actor.actor_id;

SELECT 
    actor.actor_id, actor.first_name, film.film_id
FROM
    actor
        INNER JOIN
    film_actor AS film ON actor.actor_id = film.actor_id;

SELECT 
    staff.first_name, staff.last_name, address.address
FROM
    staff
        INNER JOIN
    address AS address ON staff.address_id = address.address_id;

SELECT 
    customer.customer_id,
    customer.first_name,
    customer.email,
    address.address_id,
    address.address
FROM
    customer
        INNER JOIN
    address ON customer.address_id = address.address_id
ORDER BY first_name DESC
LIMIT 100;

SELECT 
    customer.first_name,
    customer.email,
    customer.address_id,
    address.address,
    address.district
FROM
    customer
        INNER JOIN
    address ON customer.address_id = address.address_id
WHERE address.district = 'California' AND customer.first_name LIKE '%rene%';

SELECT 
    customer.first_name, COUNT(address.address) AS 'count_addreses'
FROM
    customer
    INNER JOIN
    address ON customer.address_id = address.address_id
WHERE
    active = 1
    GROUP BY customer.first_name
ORDER BY customer.first_name DESC;

SELECT staff.first_name, staff.last_name, AVG(payment.amount)
FROM staff
INNER JOIN payment
ON staff.staff_id = payment.staff_id
WHERE YEAR(payment.payment_date) = 2006
GROUP BY staff.first_name, staff.last_name;

SELECT act.actor_id, act.first_name, film_act.film_id, film.title
FROM actor AS act
INNER JOIN film_actor AS film_act ON film_act.actor_id = act.actor_id
INNER JOIN film ON film.film_id = film_act.film_id;


