CREATE DATABASE playlist;



CREATE TABLE Account (
    account_id SERIAL PRIMARY KEY,
    username VARCHAR (200),
    password CHAR(128),
    role  CHAR(6)  
);

INSERT INTO Account(username, password,role)
VALUES ('troy', '1234', 'user');

INSERT INTO Account(username, password,role)
VALUES ('herzlia', '12345', 'user');

INSERT INTO Account(username, password,role)
VALUES ( 'steven', '12345', 'user');

INSERT INTO Account(username, password,role)
VALUES ( 'mary', '1234','user');



CREATE TABLE artist (
    artist_ID SERIAL PRIMARY KEY,
    artist_name varchar (250)
)



CREATE TABLE album (
    album_ID SERIAL PRIMARY KEY,
    album_name varchar (250),
    CONSTRAINT artist FOREIGN KEY(artist_ID) REFERENCES     
)


CREATE TABLE tracks (
    tracks_ID SERIAL PRIMARY KEY,
    tracks_name varchar (250),
    track_time decimal(5,2)

)


CREATE TABLE played (
    played Timestamp NOT NULL DEFAULT 
)