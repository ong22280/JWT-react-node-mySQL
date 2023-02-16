# JWT-react-node-mySQL
Example using react, nodeJS, mySQL with JWT(Json web token) to create login and register system

## What is a JWT?
JSON Web Token is an open industry standard used to share information between two entities, usually a client (like your app’s frontend) and a server (your app’s backend).

They contain JSON objects which have the information that needs to be shared. Each JWT is also signed using cryptography (hashing) to ensure that the JSON contents (also known as JWT claims) cannot be altered by the client or a malicious party.

For example, when you sign in with Google, Google issues a JWT which contains the following claims / JSON payload:

[JWT.IO](https://jwt.io/) allows you to decode, verify and generate JWT.

<img src="./screenshots.png" style="border-radius: 20px;"/>

## Prerequisites
1. Install XAMPP web server
2. Any Editor (Preferably VS Code or Sublime Text)
3. Any web browser with latest version

## Languages and Technologies used
1. HTML5/CSS3
2. ReactJS
3. Material-UI
4. XAMPP
5. Nodejs express nodemon
6. MySQL

## Steps to run the project in your machine
1. import sql script into mysql (mydb.sql)
2. ### Server Installation
    ``````````````````````````
    cd server 
    npm install
    npm run dev
    ``````````````````````````
    Open [http://localhost:5173/](http://localhost:5173/) to view it in the browser.
3. ### Server Installation
    ``````````````````````````
    cd server 
    npm install
    nodemon app.js
    ``````````````````````````
    Open [http://localhost:3333](http://localhost:3333) to view it in the browser.