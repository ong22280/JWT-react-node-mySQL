const express = require("express"); // import express
const cors = require("cors"); // import cors
const app = express(); // create express app
const bodyParser = require("body-parser"); // for parsing request body
// create application/json parser
const jsonParser = bodyParser.json(); // for parsing application/json
const bcrypt = require("bcrypt"); // for hashing password
const saltRounds = 10;
const jwt = require("jsonwebtoken");
const secret = "Fullstack-Login-2023"; // secret key for jwt token generation

// Simple Usage (Enable All CORS Requests)
// cors makes we can access the api from different domain
// if we don't use cors, we can only access the api from the same domain
app.use(cors()); // enable all cors requests

// get the client
const mysql = require("mysql2");

// create the connection to database
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "mydb",
});

app.post("/register", jsonParser, function (req, res, next) {
  // const email = req.body.email; // get email from request body

  // hash password
  bcrypt.hash(req.body.password, saltRounds, function (err, hash) {
    // Store hash in your password DB.

    // execute will internally call prepare and query
    connection.execute(
      "INSERT INTO users (email, password, fname, lname) VALUES (?, ?, ?, ?)",
      [req.body.email, hash, req.body.fname, req.body.lname],
      function (err, results, fields) {
        if (err) {
          res.json({ error: "error", message: err });
          return;
        }
        res.json({status: "ok", message: "User registered successfully"});
      }
    );
  });
});

app.post("/login", jsonParser, function (req, res, next) {
  // execute will internally call prepare and query
  connection.execute(
    "SELECT * FROM users WHERE email = ?",
    [req.body.email],
    function (err, users, fields) {
      if (err) {
        res.json({ status: "error", message: err });
        return;
      }
      if (users.length > 0) {
        // compare password
        // Load hash from your password DB.
        bcrypt.compare(
          req.body.password,
          users[0].password,
          function (err, result) {
            // result == true
            if (result) {
              // generate jwt token and send it to client side
              // for authentication purpose in the future request to the server side api
              const token = jwt.sign({ email: users[0].email }, secret, {
                expiresIn: "1h",
              });

              res.json({
                status: "ok",
                message: "Login success",
                token: token,
              });
            } else {
              res.json({ error: err, message: "Invalid password" });
            }
          }
        );
      } else {
        res.json({ error: "error", message: "User not found" });
        return;
      }
    }
  );
});

app.post("/authen", jsonParser, function (req, res, next) {
  try {
    const token = req.headers.authorization.split(" ")[1]; // split for remove Bearer from token
    // verify a token symmetric - synchronous
    const decoded = jwt.verify(token, secret);
    res.json({ status: "ok", message: "Authentication success", decoded });
    /*
          "decoded": {
              "email": "ong22280@gmail.com", // email from payload of jwt token that we generated in login api
              "iat": 1676467393,
              "exp": 1676470993
          }
          */
  } catch (err) {
    res.json({ status: "error", message: err.message });
  }
});

/*
// get user profile api with authentication middleware
app.get("/user", jsonParser, function (req, res, next) {
  try {
    const token = req.headers.authorization.split(" ")[1]; // split for remove Bearer from token
    // verify a token symmetric - synchronous
    const decoded = jwt.verify(token, secret);
    // execute will internally call prepare and query
    connection.execute(
      "SELECT * FROM users WHERE email = ?",
      [decoded.email],
      function (err, users, fields) {
        if (err) {
          res.json({ status: "error", message: err });
          return;
        }
        if (users.length > 0) {
          res.json({
            // return user profile
            status: "ok",
            message: "User profile",
            user: {
              email: users[0].email,
              fname: users[0].fname,
              lname: users[0].lname,
            },
          });
        } else {
          res.json({ error: "error", message: "User not found" });
          return;
        }
      }
    );
  } catch (err) {
    res.json({ status: "error", message: err.message });
  }
});
*/

app.listen(3333, function () {
  console.log("CORS-enabled web server listening on port 3333");
});
