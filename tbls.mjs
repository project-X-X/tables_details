/* 

USERS TBL
---------

CREATE TABLE "users" (
    "userId" UUID PRIMARY KEY,
    "name" VARCHAR(100) NOT NULL,
    "emailId" VARCHAR(50) NOT NULL,
    "password" VARCHAR(10) NOT NULL,
    "dob" VARCHAR(15),
    "gender" VARCHAR(10),
    "address" VARCHAR(150),
    "aadharNumber" VARCHAR(12) UNIQUE,
    "occupation" VARCHAR(100),
    "contactNumber" VARCHAR(15),
    "emergencyContact" VARCHAR(15),
    "profilePicture" BYTEA,
    "document" BYTEA,
    "isActive" BOOLEAN DEFAULT FALSE,
    "createdAt" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    "createdBy" VARCHAR(50),
    "lastChangedAt" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    "lastChangedBy" VARCHAR(50),
    "allowUser" BOOLEAN DEFAULT FALSE
);




FLOOR TBL
---------

CREATE TABLE "floor" (
    "floorId" UUID PRIMARY KEY,
    "floor" VARCHAR(10) NOT NULL,
    "createdAt" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    "createdBy" VARCHAR(50),
    "lastChangedAt" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    "lastChangedBy" VARCHAR(50)
);



ROOM TBL
--------

CREATE TABLE "room" (
    "roomId" UUID PRIMARY KEY,
    "roomNumber" VARCHAR(10) NOT NULL,
    "sharing" VARCHAR(10),
    "type" VARCHAR(50),
    "price" VARCHAR(10),
    "createdAt" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    "createdBy" VARCHAR(50),
    "lastChangedAt" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    "lastChangedBy" VARCHAR(50),

    "floorId" UUID NOT NULL -- FK
);



BED TBL
-------

CREATE TABLE "bed" (
    "bedId" UUID PRIMARY KEY,
    "bedNumber" VARCHAR(10) NOT NULL,
    "vacancy" BOOLEAN DEFAULT FALSE,
    "upcomingVacancy" VARCHAR(15),
    "createdAt" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    "createdBy" VARCHAR(50),
    "lastChangedAt" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    "lastChangedBy" VARCHAR(50),
    "roomId" UUID NOT NULL,

    roomId uuid  NOT NULL -- FK
);



ANNOUNCEMENT TBL
----------------

CREATE TABLE "announcement" (
    "announcementId" UUID PRIMARY KEY,
    "announcementSub" VARCHAR(50) NOT NULL,
    "announcementMsg" TEXT NOT NULL,
    "createdAt" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    "createdBy" VARCHAR(50),
    "lastChangedAt" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    "lastChangedBy" VARCHAR(50)
);



QUERIES TBL
-----------

CREATE TABLE "queries" (
    "queryId" UUID PRIMARY KEY,
    "querySub" VARCHAR(50) NOT NULL,
    "query" VARCHAR(150) NOT NULL,
    "queryStatus" VARCHAR(50),
    "queryResponse" VARCHAR(150),
    "createdAt" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    "createdBy" VARCHAR(50),
    "lastChangedAt" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    "lastChangedBy" VARCHAR(50),

    "userId" UUID NOT NULL -- FK
);


PAYMENT TBL
-----------

CREATE TABLE "payment" (
    "paymentId" UUID PRIMARY KEY,
    "amount" VARCHAR(10) NOT NULL,
    "paymentDate" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    "paymentMethod" VARCHAR(50),
    "transactionId" VARCHAR(100) UNIQUE,
    "paymentStatus" VARCHAR(50) DEFAULT 'Pending',
    "notes" VARCHAR(50),
    "createdAt" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    "createdBy" VARCHAR(50),
    "lastChangedAt" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    "lastChangedBy" VARCHAR(50),

    "userId" UUID NOT NULL -- FK
);











































**/
