/* 

USERS TBL
---------

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    emailId VARCHAR(150) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    DOB DATE,
    gender VARCHAR(10),
    address TEXT,
    aadharNumber VARCHAR(12) UNIQUE,
    occupation VARCHAR(100),
    contactNumber VARCHAR(15),
    emergencyContact VARCHAR(15),
    profilePicture BYTEA,
    Document BYTEA,
    floor INTEGER,
    room_number VARCHAR(10),
    room_type VARCHAR(50),
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    last_changed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    last_changed_by VARCHAR(100),
    allow_user BOOLEAN DEFAULT false
);


FLOOR TBL => 1
---------

CREATE TABLE floor (
    id SERIAL PRIMARY KEY,
    floorID INTEGER NOT NULL,
    roomNumber VARCHAR(10) NOT NULL,
    roomSharing INTEGER,
    price NUMERIC(10, 2),
    vacancy INTEGER,
    upcomingVacancy DATE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    last_changed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


FLOOR TBL => 2
---------

CREATE TABLE floor (
    id SERIAL PRIMARY KEY,
    floor INTEGER NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    created_by VARCHAR(100),
    last_changed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    last_changed_by VARCHAR(100)
);

ROOM TBL
--------

CREATE TABLE room (
    id SERIAL PRIMARY KEY,
    floor INTEGER NOT NULL,
    room_number VARCHAR(10) NOT NULL,
    sharing INTEGER,
    price NUMERIC(10, 2),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    created_by VARCHAR(100),
    last_changed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    last_changed_by VARCHAR(100)
);

BED TBL
-------

CREATE TABLE bed (
    id SERIAL PRIMARY KEY,
    room_number VARCHAR(10) NOT NULL,
    bed_number VARCHAR(10) NOT NULL,
    vacancy BOOLEAN DEFAULT TRUE,
    upcomingVacancy DATE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    created_by VARCHAR(100),
    last_changed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    last_changed_by VARCHAR(100)
);

ANNOUNCEMENT TBL
----------------

CREATE TABLE announcement (
    id SERIAL PRIMARY KEY,
    announcement_ID VARCHAR(50) UNIQUE NOT NULL,
    announcement_Msg TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    created_by VARCHAR(100),
    last_changed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    last_changed_by VARCHAR(100)
);








































**/