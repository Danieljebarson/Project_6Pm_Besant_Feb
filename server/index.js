const express = require("express");
const users = require("./sample.json");
const app = express();

const port = 8000;

// display all users 
app.get("/users", (request, response) => {
    return response.json(users);
})

app.listen(port, (err) => {
    console.log(`App is started, running in the ${port}`);
});

