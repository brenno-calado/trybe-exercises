USE `PecasFornecedores`;
SELECT * FROM `Pecas` WHERE `name` LIKE 'GR%';
SELECT * FROM `Fornecimentos` WHERE `peca` = 2 ORDER BY `Fornecedor`;
SELECT `peca`, `preco`, `fornecedor` FROM `Fornecimentos` WHERE `fornecedor` LIKE '%n%';
SELECT * FROM `Fornecedores` WHERE `name` LIKE '% LTDA' ORDER BY `name` DESC;
SELECT COUNT(`code`) FROM `Fornecedores` WHERE `code` LIKE '%F%';
SELECT `Preco` FROM `Fornecimentos` WHERE `Preco` >= 15 AND `Preco` <= 40 ORDER BY `Preco`;
SELECT COUNT(`code`) FROM `Vendas` WHERE DATE(`order_date`) BETWEEN '2018-04-15' AND '2019-07-30';
