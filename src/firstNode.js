const express = require("express");
const serverless = require("serverless-http");
const bodyParser = require("body-parser");

const app = express();
const router = express.Router();

// const portNumber = process.env.PORT;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// app.listen(portNumber, (err) => {
//   if (err) console.log("Error in server setup");
//   console.log("Server listening on Port:", portNumber);
// });

// respond with "hello world" when a GET request is made to the homepage
router.get("/", function (req, res) {
  let respo = {
    developer: "Yadhunandana Gowda B S",
    from: "Mysuru",
  };
  res.json(respo);
});

router.post("/reverse", (req, res) => {
  console.log(req.body.name);
  res.send([...req.body.name].reverse().join(""));
});

app.use("/.netlify/functions/firstNode", router);
module.exports = app;
module.exports.handler = serverless(app);
