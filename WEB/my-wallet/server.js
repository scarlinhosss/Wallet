const express = require("express");
const { join } = require("path");

const app = express();

app.use(express.static(join(__dirname, "build")));

app.get("/*", function (req, res) {
  res.sendFile(join(__dirname, "build", "index.html"));
});

const port = 3000;

app.listen(port, () => {
  /* eslint-disable-next-line no-console */
  console.log(`Server is listening on port ${port}.`);
});