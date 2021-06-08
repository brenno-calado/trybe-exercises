USE `PiecesProviders`;
SELECT * FROM `Providers` ORDER BY `Name` DESC LIMIT 1;
SELECT * FROM `Provides` ORDER BY `Price` DESC LIMIT 5;
SELECT `Provider`, `Price` FROM `Provides` ORDER BY `Price` DESC LIMIT 4 OFFSET 3;
SELECT CONCAT('A peça mais cara é a: ', `Piece`, ', provida pela empresa ', `Provider`, ' e custa  ', `Price`, ' reais.')
	FROM `Provides` ORDER BY `Price` DESC LIMIT 1;