CREATE DATABASE diversidad_mola;
USE diversidad_mola;

CREATE TABLE administrador(
	id TINYINT UNSIGNED NOT NULL PRIMARY KEY AUTO_INCREMENT,
	nombre varchar(60) NOT NULL, 
	password varchar(255) NOT NULL, 
	perfil char(2) NOT NULL CHECK (perfil='GI' OR perfil='LP' OR perfil='AC' OR perfil='DM')
);

CREATE TABLE continentes(
	id TINYINT unsigned PRIMARY KEY AUTO_INCREMENT,
	nombre VARCHAR(30) NOT NULL
);

CREATE TABLE paises(
	id TINYINT unsigned PRIMARY KEY AUTO_INCREMENT,
	nombre VARCHAR(30) NOT NULL,
    idContinente TINYINT unsigned NOT NULL,
    CONSTRAINT FK_ContinentePais FOREIGN KEY (idContinente) REFERENCES continentes(id)
);

CREATE TABLE partida(
	id TINYINT unsigned PRIMARY KEY AUTO_INCREMENT,
	alias CHAR(3) NOT NULL,
	puntuacion SMALLINT NOT NULL,
	idContinente TINYINT unsigned NOT NULL,

	CONSTRAINT FK_ContinentePartida FOREIGN KEY (idContinente) REFERENCES continentes(id)
);
CREATE TABLE imagenes(
	id TINYINT unsigned PRIMARY KEY AUTO_INCREMENT,
	nombre VARCHAR(30) NOT NULL,
	descripcion VARCHAR(500) NOT NULL,
	ruta VARCHAR(500) NOT NULL,
	idPais TINYINT unsigned NOT NULL,
	
	CONSTRAINT FK_PaisImagen FOREIGN KEY (idPais) REFERENCES paises(id)
);