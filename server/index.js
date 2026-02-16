const express = require("express");
const users = require("./sample.json");
const app = express();
const cors = require("cors");


const port = 8000;
app.use(cors()); // middleware - to cors issue

// display all users 
app.get("/users", (request, response) => {
    return response.json(users);
})

app.listen(port, (err) => {
    console.log(`App is started, running in the ${port}`);
});

