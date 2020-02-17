import express from "express";
import cors from "cors";

const app = express();
// Add middleware for parsing URL encoded bodies (which are usually sent by browser)
app.use(cors());
// Start our server...
const server = app.listen(process.env.PORT || 3000, () => {
  console.log("Listening on port " + server.address().port);
});

export default app;
