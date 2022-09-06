create database estatedb

create table estate(
    id SERIAL PRIMARY KEY,
   /*  title VARCHAR(255) UNIQUE, */
    title VARCHAR(255),
    description VARCHAR(255)
)

create table users(
    id SERIAL PRIMARY KEY,
    username VARCHAR(50),
    email VARCHAR(255) UNIQUE,
    password VARCHAR(255)
)