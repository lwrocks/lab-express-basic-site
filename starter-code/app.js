const express = require("express");
const app = express();

app.use(express.static("public"));
app.use(express.static("views"));

app.get("/", (request, response) => {
  console.log("GET request made to /");

  response.sendFile(__dirname + "/views/home.html");
});

app.get("/about", (request, response) => {
  console.log("GET request made to /");

  response.sendFile(__dirname + "/views/about.html");
});

app.get("/gallery", (request, response) => {
    console.log("GET request made to /");
  
    response.sendFile(__dirname + "/views/gallery.html");
  });

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
