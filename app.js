const express = require("express");
const next = require("next");
const path = require("path");

const PORT = process.env.PORT || 5000;
const dev = process.env.NODE_ENV !== "production";

const nextApp = next({ dev });
const handle = nextApp.getRequestHandler();

nextApp.prepare().then(() => {
  const app = express();

  app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./out", "index.html"));
  });

  app.get("/services", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./out", "services.html"));
  });

  app.get("/projects", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./out", "projects.html"));
  });

  app.get("/projects/audiophile", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./out", "projects/audiophile.html"));
  });

  app.get("/projects/coffeeroasters", (req, res) => {
    res.sendFile(
      path.resolve(__dirname, "./out", "projects/coffeeroasters.html")
    );
  });

  app.get("/projects/designo", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./out", "projects/designo.html"));
  });

  app.get("/projects/dine", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./out", "projects/dine.html"));
  });

  app.get("*", (req, res) => {
    handle(req, res);
  });

  app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
});
