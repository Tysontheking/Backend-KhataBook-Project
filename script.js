let express = require("express");
const path = require("path");
let app = express();

const fs = require("fs");

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public"))); //add css or js in public folder

app.use(express.json());
app.use(express.urlencoded({ extended: true })); // parse application/x-www-form-urlencoded

app.get("/", (req, res) => {
  fs.readdir("./files", (err, files) => {
    // console.log(files);
    res.render("index", { files: files });
  });
});

app.get("/files/:filename", (req, res) => {
  fs.readFile(`./files/${req.params.filename}`, "utf-8", (err, filesData) => {
    res.render("show", { filename: req.params.filename, filesData: filesData });
  });
});
app.get("/Edit/:filename", (req, res) => {
  res.render("Edit", { filename: req.params.filename });
});

app.post("/Edit", (req, res) => {
  fs.rename(
    `./files/${req.body.Privious}`,
    `./files/${req.body.New}`,
    function (err) {
      try {
        res.redirect("/");
      } catch (error) {
        console.log("SomeThing Wrong");
      }
    }
  );
});

app.post("/create", (req, res) => {
  fs.writeFile(
    `./files/${req.body.title.split(" ").join("")}.txt`,
    req.body.details,
    function (err) {
      res.redirect("/");
    }
  );
});

app.get("/public", (req, res, next) => {
  try {
    res.send("public page");
  } catch (err) {
    return next(Error("Something went wrong we don't know"));
  }
});

app.use((err, req, res, next) => {
  console.log(err.stack);
  res.status(500).send("something went wrong");
});

app.listen(3000);
