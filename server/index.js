const express = require("express");
const users = require("./sample.json");
const app = express();
const cors = require("cors");
const fs = require("fs");
app.use(express.json());

const port = 8000;
app.use(cors()); // middleware - to cors issue

// display all users
app.get("/users", (request, response) => {
  return response.json(users);
});

// Delete user - creating the route in server

//                  "1"
app.delete("/users/:id", (req, res) => {
  //                  7
  let id = Number(req.params.id);
  //                                         1       7
  let filterUsers = users.filter((user) => user.id != id);

  // database we are re writing
  fs.writeFile("./sample.json", JSON.stringify(filterUsers), (err, data) => {
    return res.json(filterUsers);
  });
});

// add new user
app.post("/users", (req, res) => {
  let { name, age, city } = req.body;  // object destructuring 

  if (!name || !age || !city) {
    return res.status(400).send({ message: "all field required" });
  }

  const users = JSON.parse(fs.readFileSync("./sample.json")); // users varailbe la sample.json data store agi errukum

  let id = Date.now(); // to genrate the ID in random order
  users.push({ id, name, age, city });

  fs.writeFile("./sample.json", JSON.stringify(users), (err) => {
    return res.json(users);
  });
});

app.listen(port, (err) => {
  console.log(`App is started, running in the ${port}`);
});
