# JWT-react-node-mySQL
Example using react, nodeJS, mySQL with JWT(Json web token) to create login and register system

## What is a JWT?
JSON Web Token is an open industry standard used to share information between two entities, usually a client (like your app’s frontend) and a server (your app’s backend).

They contain JSON objects which have the information that needs to be shared. Each JWT is also signed using cryptography (hashing) to ensure that the JSON contents (also known as JWT claims) cannot be altered by the client or a malicious party.

For example, when you sign in with Google, Google issues a JWT which contains the following claims / JSON payload:

[JWT.IO](https://jwt.io/) allows you to decode, verify and generate JWT.

<img src="./screenshots.png"/>

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
1. import sql script into mysql ( **mydb.sql** )
    ### user table
    | Field    | Type        | Null | Key | Default | Extra          | Comment         |
    |----------|-------------|------|-----|---------|----------------|-----------------|
    | id       | int(11)     | NO   | PRI | NULL    | auto_increment | primary key     |
    | email    | varchar(50) | NO   | UNI | NULL    |                | user's email    |
    | password | text        | NO   |     | NULL    |                | user's password |
    | fname    | varchar(50) | NO   |     | NULL    |                | first name      |
    | lname    | varchar(50) | NO   |     | NULL    |                | last name       |
2. ### Server Installation
    ``````````````````````````
    cd server 
    npm install
    nodemon app.js
    ``````````````````````````
    Open [http://localhost:3333](http://localhost:3333) to view it in the browser.
3. ### Client Installation
    ``````````````````````````
    cd client
    npm install
    npm run dev
    ``````````````````````````
    Open [http://localhost:5173/](http://localhost:5173/) to view it in the browser.

## Website reference
- [JWT-nodejs](https://www.npmjs.com/package/jsonwebtoken) : identify an authenticated user
- [Express API with JWT](https://gist.github.com/thebigredgeek/230368bd92aa19e3f6638b659edf5cef)
- [Bcrypt](https://www.npmjs.com/package/bcrypt) : A library to help you hash passwords.
- [Ajax](https://reactjs.org/docs/faq-ajax.html) : send and receive (HTTPS request)information in various formats
- [Cors](https://www.npmjs.com/package/cors) : access the api from different domain