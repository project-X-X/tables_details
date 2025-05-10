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


=-==============================================================================================================================

import React from "react";
import "./LoginPage.css";
import background from "../assets/background.jpg";

const LoginPage = () => {
  return (
    <div
      className="background-image"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="overlay">
        <div className="welcome-text">
          <h1>Welcome To<br />The Website</h1>
        </div>
        <form className="login-form">
          <h2><em>USER LOGIN</em></h2>
          <div className="input-group">
            <span className="icon">👤</span>
            <input type="email" placeholder="Email" required />
          </div>
          <div className="input-group">
            <span className="icon">🔒</span>
            <input type="password" placeholder="Password" required />
          </div>
          <div className="options">
            <label><input type="checkbox" /> Remember</label>
            <a href="#">Forgot Password</a>
          </div>
          <button type="submit" className="login-btn">Login</button>
          <p><a href="#">Sign up</a></p>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;




==========================================================================================================================


* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Segoe UI', sans-serif;
}

body, html, #root {
  height: 100%;
}

.background-image {
  background-size: cover;
  background-position: center;
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.overlay {
  background-color: rgba(255, 165, 79, 0.9);
  padding: 40px;
  border-radius: 15px;
  max-width: 400px;
  width: 90%;
  text-align: center;
  box-shadow: 0 0 10px rgba(0,0,0,0.5);
}

.welcome-text {
  color: white;
  margin-bottom: 20px;
}

.welcome-text h1 {
  font-size: 2rem;
  text-shadow: 1px 1px 3px #000;
}

.login-form {
  background: transparent;
}

.login-form h2 {
  margin-bottom: 20px;
  color: #000;
}

.input-group {
  display: flex;
  align-items: center;
  background: white;
  border-radius: 15px;
  padding: 10px 15px;
  margin-bottom: 15px;
}

.input-group .icon {
  margin-right: 10px;
  font-size: 1.2rem;
}

.input-group input {
  border: none;
  outline: none;
  flex: 1;
  font-size: 1rem;
}

.options {
  display: flex;
  justify-content: space-between;
  font-size: 0.9rem;
  margin-bottom: 20px;
}

.login-btn {
  background-color: white;
  color: black;
  border: none;
  padding: 10px 30px;
  border-radius: 25px;
  font-size: 1rem;
  cursor: pointer;
  margin-bottom: 10px;
}

.login-form a {
  color: black;
  text-decoration: none;
}



=========================================================================================================================================




import React from "react";
import LoginPage from "./components/LoginPage";

function App() {
  return <LoginPage />;
}

export default App;









































**/
