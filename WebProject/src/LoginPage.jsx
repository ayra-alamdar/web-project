import React from "react";
import "./LoginPage.css";

function LoginPage() {
    // make a login page that takes 2 inputs, username and password
    // and a submit button
    // when the submit button is clicked, alert the username and password
    // and clear the inputs
    return (
        <div className="login-container">
            <h2>Login</h2>
            <div className="credentials">
                <div className="credential">
                    <label htmlFor="username">Username:</label>
                    <input type="text" id="username" placeholder="Enter your username" />
                </div>
                <div className="credential">
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" placeholder="Enter your password" />
                </div>
                <div className="credential">
                    <label htmlFor="userType">User Type:</label>
                    <select id="userType">
                        <option value="faculty">Faculty Member</option>
                        <option value="student">Student</option>
                        <option value="admin">Admin</option>
                        <option value="director">Director</option>
                    </select>
                </div>
            </div>
            <button onClick={checkLogin}>Login</button>
        </div>
    );
}

// when the submit button is clicked check if the username and password is in the database
// if it is, alert "Login successful"
// if it is not, alert "Login failed"

function checkLogin() {
    //getting the username and password from the inputs
    const username = document.querySelector("input[type=text]").value;
    const password = document.querySelector("input[type=password]").value;

    // loading the database from mongodb 
    // const database = {};
    // db.once('open', function () {
    //     console.log('Connected to MongoDB');
    //     db.collection('AyraWeb').find().toArray(function (err, result) {
    //         if (err) throw err;
    //         result.forEach(function (user) {
    //             database[user.username] = user.password;
    //         });
    //     });
    // });
    console.log("Checking database");
    // check if the username is in the database
    if (database[username] === password) {
        alert("Login successful");
    } else {
        alert("Login failed");
    }
}

export default LoginPage;
