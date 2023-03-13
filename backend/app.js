const express = require("express");
const cors = require("cors");
const { db } = require("./db/d");
const { readdirSync } = require("fs");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT;

// Middleware
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

// Routes
readdirSync("./routes").map((route) =>
  app.use("/api/v1", require("./routes/" + route))
);

const server = () => {
  db();
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};
server();
