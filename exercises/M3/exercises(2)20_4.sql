USE Pixar;

SELECT * FROM Movies;
INSERT INTO Movies (title, director, `year`, length_minutes)
VALUES
	('Monstros SA', 'Peter Docter', 2001, 92),
    ('Procurando Nemo', 'John Lasseter', 2003, 107),
    ('Os Incríveis', 'Brad Bird', 2004, 116),
    ('WALL-E', 'Pete Docter', 2008, 104);

SELECT * FROM BoxOffice;
INSERT INTO BoxOffice (movie_id, rating, domestic_sales, international_sales)
VALUES (9, 6.8,450000000,370000000);

UPDATE Movies
SET director = 'Andrew Staton'
WHERE `id` = 9;

UPDATE Movies
SET title = 'Ratatouille', `year` = 2007
WHERE `id` = 3;

INSERT INTO BoxOffice (movie_id, rating, domestic_sales, international_sales)
VALUES
	(8, 8.5, 300000000, 250000000),
	(10, 7.4, 460000000, 510000000),
    (11, 9.9, 290000000, 280000000);

DELETE FROM BoxOffice
WHERE movie_id = 11;
DELETE FROM Movies
WHERE id = 11;

SET SQL_SAFE_UPDATES = 0;

DELETE FROM BoxOffice
WHERE movie_id IN (2, 9);
DELETE FROM Movies
WHERE director = 'Andrew Staton';