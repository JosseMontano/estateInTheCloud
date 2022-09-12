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
	id_photo INT,
    CONSTRAINT fk_user
      FOREIGN KEY(id_user) 
	    REFERENCES users(id),
    CONSTRAINT fk_photo
      FOREIGN KEY(id_photo) 
	    REFERENCES photos(id)
)
