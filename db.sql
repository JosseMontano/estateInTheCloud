create database estatedb

create table users(
    id SERIAL PRIMARY KEY,
    username VARCHAR(50),
    cellphonenumber VARCHAR(255),
    email VARCHAR(255) UNIQUE,
    password VARCHAR(255),
    qualification BIGINT,
    id_photo INT, 
	add CONSTRAINT fk_photo
    FOREIGN KEY(id_photo) 
	 REFERENCES photos(id)
);

create table accounts(
    id SERIAL PRIMARY KEY,
    secret_password VARCHAR(255),
	id_user INT,
	 CONSTRAINT fk_user
      FOREIGN KEY(id_user) 
	    REFERENCES users(id)
)

create table comments(
    id SERIAL PRIMARY KEY,
    description VARCHAR(255),
    amount_start INT,
    commentator INT,
    person_commented INT,
     CONSTRAINT fk_commentator
      FOREIGN KEY(commentator) 
	    REFERENCES users(id)
    CONSTRAINT fk_person_commented
      FOREIGN KEY(person_commented) 
	    REFERENCES users(id)
)

create table photos(
    id SERIAL PRIMARY KEY,
    url VARCHAR(255),
    public_id VARCHAR(255)
);

create table type_real_estates(
    id SERIAL PRIMARY KEY,
    name_type VARCHAR(255)
)

create table real_estates(
    id SERIAL PRIMARY KEY,
    title VARCHAR(255),
    description VARCHAR(1000),
    available INT,
    amount_bedroom INT,
    price INT,
    amount_bathroom INT,
    square_meter INT,
	id_user INT,
    id_type_real_estate INT,
	 CONSTRAINT fk_user
      FOREIGN KEY(id_user) 
	    REFERENCES users(id)
     CONSTRAINT fk_type_real_estate
      FOREIGN KEY(id_type_real_estate) 
	    REFERENCES type_real_estates(id)
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

create table questions(
    id SERIAL PRIMARY KEY,
    question VARCHAR(255)
);

create table answers(
    id SERIAL PRIMARY KEY,
    answer VARCHAR(255),
    id_real_estate INT,
    CONSTRAINT fk_real_estate
      FOREIGN KEY(id_real_estate) 
	    REFERENCES real_estates(id)
);

create table answers_questions(
    id SERIAL PRIMARY KEY,
    id_answer INT,
    id_question INT,
    CONSTRAINT fk_answer
      FOREIGN KEY(id_answer) 
	    REFERENCES answers(id),
    CONSTRAINT fk_question
      FOREIGN KEY(id_question) 
	    REFERENCES questions(id)
);
