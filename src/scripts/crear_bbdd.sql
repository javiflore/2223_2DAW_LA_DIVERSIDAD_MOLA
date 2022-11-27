CREATE DATABASE diversidad_mola;

CREATE TABLE administrador(
	id TINYINT unsigned PRIMARY KEY AUTO_INCREMENT,
	correo VARCHAR(255) NOT NULL
);

CREATE TABLE continentes(
	id TINYINT unsigned PRIMARY KEY AUTO_INCREMENT,
	nombre VARCHAR(30) NOT NULL
);

CREATE TABLE paises(
	id TINYINT unsigned PRIMARY KEY AUTO_INCREMENT,
	nombre VARCHAR(30) NOT NULL
);

CREATE TABLE partida(
	id TINYINT unsigned PRIMARY KEY AUTO_INCREMENT,
	alias CHAR(3) NOT NULL,
	puntuacion SMALLINT NOT NULL,
	idContinente TINYINT unsigned NOT NULL,

	CONSTRAINT FK_idContinente FOREIGN KEY (idContinente) REFERENCES continentes(id)
);