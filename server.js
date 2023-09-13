const next = require("next");
const express = require("express");

const app = next({ dev: false });

app.prepare().then(() => {
  const server = express();
  server.get("*", (req, res) => {
    app.render(req, res, "/custom_page");
  });
  server.listen(3000);
});
