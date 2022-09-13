create database estatedb

create table users(
    id SERIAL PRIMARY KEY,
    username VARCHAR(50),
    email VARCHAR(255) UNIQUE,
    password VARCHAR(255)
);

create table photos(
    id SERIAL PRIMARY KEY,
    url VARCHAR(255),
    public_id VARCHAR(255)
);

create table real_estates(
    id SERIAL PRIMARY KEY,
    title VARCHAR(255),
    description VARCHAR(255),
	id_user INT,
	 CONSTRAINT fk_user
      FOREIGN KEY(id_user) 
	    REFERENCES users(id)
)

create table real_estates_photos(
id serial PRIMARY KEY,
	id_photo INT,
 	id_real_estate INT,
    CONSTRAINT fk_photo
      FOREIGN KEY(id_photo) 
	    REFERENCES photos(id),
	CONSTRAINT fk_real_estate
      FOREIGN KEY(id_real_estate) 
	    REFERENCES real_estates(id)
)