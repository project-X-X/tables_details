/* 

USERS TBL
---------

CREATE TABLE users (
    userId uuid PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    emailId VARCHAR(50)  NOT NULL,
    password VARCHAR(10) NOT NULL,
    dob VARCHAR(15),
    gender VARCHAR(10),
    address VARCHAR(150),
    aadharNumber VARCHAR(12) UNIQUE,
    occupation VARCHAR(100),
    contactNumber VARCHAR(15),
    emergencyContact VARCHAR(15),
    profilePicture BYTEA,
    document BYTEA,
    isActive BOOLEAN DEFAULT true,
    createdAt current_timestamp,
    createdBy VARCHAR(50),
    lastChangedAt current_timestamp,
    lastChangedBy VARCHAR(50),
    allowUser BOOLEAN DEFAULT FALSE
);



FLOOR TBL
---------

CREATE TABLE floor (
    floorId uuid PRIMARY KEY,
    floor VARCHAR(10) NOT NULL,
    createdAt current_timestamp,
    createdBy VARCHAR(50),
    lastChangedAt current_timestamp,
    lastChangedBy VARCHAR(50)
);


ROOM TBL
--------

CREATE TABLE room (
    roomId uuid PRIMARY KEY,
    roomNumber VARCHAR(10) NOT NULL,
    sharing VARCHAR(10),
    type VARCHGAR(50),
    price VARCHAR(10),
    createdAt current_timestamp,
    createdBy VARCHAR(50),
    lastChangedAt current_timestamp,
    lastChangedBy VARCHAR(50),

    floorId uuid NOT NULL :FK

);


BED TBL
-------

CREATE TABLE bed (
    bedId uuid PRIMARY KEY,
    bedNumber VARCHAR(10) NOT NULL,
    vacancy BOOLEAN DEFAULT false,
    upcomingVacancy VARCHAR(15),
    createdAt current_timestamp,
    createdBy VARCHAR(50),
    lastChangedAt current_timestamp,
    lastChangedBy VARCHAR(50),

    roomId uuid  NOT NULL : FK

);


ANNOUNCEMENT TBL
----------------

CREATE TABLE announcement (
    announcementId uuid PRIMARY KEY,
    announcementSub VARCHAR(50)  NOT NULL,
    announcementMsg TEXT NOT NULL,
    createdAt current_timestamp,
    createdBy VARCHAR(50),
    lastChangedAt current_timestamp,
    lastChangedBy VARCHAR(50)
);


QUERIES TBL
-----------

CREATE TABLE queries (
    queryId uuid PRIMARY KEY,
    querySub VARCHAR(50)  NOT NULL,
    userId uuid,
    query VARCHAR(150) NOT NULL,
    queryStatus VARCHAR(50),  -- e.g., Open, In Progress, Resolved
    queryResponse VARCHAR(150),
    createdAt current_timestamp,
    createdBy VARCHAR(50),
    lastChangedAt current_timestamp,
    lastChangedBy VARCHAR(50)
);

PAYMENT TBL
-----------

CREATE TABLE payment (
    paymentId uuid PRIMARY KEY,
    userId uuid NOT NULL,
    amount VARCHAR(10) NOT NULL,
    paymentDate  CURRENT_TIMESTAMP,
    paymentMethod VARCHAR(50), -- e.g., UPI, CreditCard, Cash
    transactionId VARCHAR(100) UNIQUE,
    paymentStatus VARCHAR(50) DEFAULT 'Pending', -- e.g., Pending, Completed, Failed
    notes VARCHAR(50),
    createdAt current_timestamp,
    createdBy VARCHAR(50),
    lastChangedAt current_timestamp,
    lastChangedBy VARCHAR(50)
);









































**/
