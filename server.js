var express = require("express");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});

const tables = [
  {
    customerName: "chea",
    phoneNumber: "7062515019",
    customerEmail: "cheacliatt@gmail.com",
    customerID: "1",
  },
  {
    customerName: "maya",
    phoneNumber: "9999999999",
    customerEmail: "maya@gmail.com",
    customerID: "2",
  },
];

const waitlist = [];


app.get("/api/tables", function(req, res) {
  return res.json(tables);
});

app.get("/api/waitlist", function(req, res) {
  return res.json(waitlist);
});

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});
app.get("/tables", function(req, res) {
  res.sendFile(path.join(__dirname, "tables.html"));
});
app.get("/reserve", function(req, res) {
  res.sendFile(path.join(__dirname, "reserve.html"));
});
