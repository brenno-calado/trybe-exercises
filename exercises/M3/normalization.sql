CREATE DATABASE IF NOT EXISTS normalization;

CREATE TABLE staff(
    funcionario_id INTEGER(11) PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    sobrenome VARCHAR(100) NOT NULL,
    email VARCHAR(100),
    ddd INTEGER(5),
    contato INTEGER(11),
    data_cadastro DATE,
    hora_cadastro TIME
);

CREATE TABLE setor(
    setor_id INTEGER(11) PRIMARY KEY AUTO_INCREMENT,
    setor VARCHAR(100) NOT NULL
);

CREATE TABLE staff_setor(
	funcionario_id INTEGER(11),
    setor_id INTEGER(11),
    CONSTRAINT PRIMARY KEY(funcionario_id, setor_id),
    FOREIGN KEY (funcionario_id) REFERENCES staff (funcionario_id),
    FOREIGN KEY (setor_id) REFERENCES setor (setor_id) 
);

INSERT INTO staff(funcionario_id, nome, sobrenome, email, ddd, contato, data_cadastro, hora_cadastro)
VALUES
(12,'Joseph','Rodrigues','jo@gmail.com',35,9985521445,'2020-05-05','08:50:25');

INSERT INTO setor