import express from "express";

const app = express();

app.get("/");

// Start our server...
const server = app.listen(process.env.PORT || 3000, () => {
  console.log("Listening on port " + server.address().port);
});
