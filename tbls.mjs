/* 

USERS TBL
---------

CREATE TABLE users (
    userId SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    emailId VARCHAR(150) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    dob DATE,
    gender VARCHAR(10),
    address TEXT,
    aadharNumber VARCHAR(12) UNIQUE,
    occupation VARCHAR(100),
    contactNumber VARCHAR(15),
    emergencyContact VARCHAR(15),
    profilePicture BYTEA,
    document BYTEA,
    floor INTEGER,
    roomNumber VARCHAR(10),
    roomType VARCHAR(50),
    isActive BOOLEAN DEFAULT TRUE,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    createdBy VARCHAR(100),
    lastChangedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    lastChangedBy VARCHAR(100),
    allowUser BOOLEAN DEFAULT FALSE
);



FLOOR TBL
---------

CREATE TABLE floor (
    id SERIAL PRIMARY KEY,
    floor INTEGER NOT NULL,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    createdBy VARCHAR(100),
    lastChangedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    lastChangedBy VARCHAR(100)
);


ROOM TBL
--------

CREATE TABLE room (
    id SERIAL PRIMARY KEY,
    floor INTEGER NOT NULL,
    roomNumber VARCHAR(10) NOT NULL,
    sharing INTEGER,
    type VARCHGAR(50),
    price NUMERIC(10, 2),
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    createdBy VARCHAR(100),
    lastChangedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    lastChangedBy VARCHAR(100)
);


BED TBL
-------

CREATE TABLE bed (
    id SERIAL PRIMARY KEY,
    roomNumber VARCHAR(10) NOT NULL,
    bedNumber VARCHAR(10) NOT NULL,
    vacancy BOOLEAN DEFAULT TRUE,
    upcomingVacancy DATE,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    createdBy VARCHAR(100),
    lastChangedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    lastChangedBy VARCHAR(100)
);


ANNOUNCEMENT TBL
----------------

CREATE TABLE announcement (
    id SERIAL PRIMARY KEY,
    announcementId VARCHAR(50) UNIQUE NOT NULL,
    announcementMsg TEXT NOT NULL,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    createdBy VARCHAR(100),
    lastChangedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    lastChangedBy VARCHAR(100)
);


QUERIES TBL
-----------

CREATE TABLE queries (
    id SERIAL PRIMARY KEY,
    queryId VARCHAR(50) UNIQUE NOT NULL,
    userId INTEGER,
    subject VARCHAR(150),
    message TEXT NOT NULL,
    status VARCHAR(50) DEFAULT 'Open',  -- e.g., Open, In Progress, Resolved
    response TEXT,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    createdBy VARCHAR(100),
    lastChangedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    lastChangedBy VARCHAR(100)
);

PAYMENT TBL
-----------

CREATE TABLE payment (
    paymentId SERIAL PRIMARY KEY,
    userId INTEGER NOT NULL,
    amount NUMERIC(10, 2) NOT NULL,
    totalPaid NUMERIC(10, 2) GENERATED ALWAYS AS (amount) STORED,
    paymentDate TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    paymentMonth VARCHAR(20), -- e.g., "April 2025"
    paymentMethod VARCHAR(50), -- e.g., UPI, CreditCard, Cash
    transactionId VARCHAR(100) UNIQUE,
    status VARCHAR(50) DEFAULT 'Pending', -- e.g., Pending, Completed, Failed
    notes TEXT,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    createdBy VARCHAR(100),
    lastChangedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    lastChangedBy VARCHAR(100)
);









































**/
