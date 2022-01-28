let express = require("express");
let bodyParser = require("body-parser");
let app = express();

require("dotenv").config();

let portNumber = process.env.PORT;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.listen(portNumber, (err) => {
  if (err) console.log("Error in server setup");
  console.log("Server listening on Port:", portNumber);
});

// respond with "hello world" when a GET request is made to the homepage
app.get("/", function (req, res) {
  let respo = {
    developer: "Yadhunandana Gowda B S",
    from: "Mysuru",
  };
  res.send(respo);
});

app.post("/post", (req, res) => {
  console.log(req.body.name);
  res.send([...req.body.name].reverse().join(""));
});
