const express = require("express");
const path =require("path")
const generatePassword = require("./password");
const PORT = process.env.PORT || 8000;
const app = express();
app.use(express.json())
app.use(express.static(path.join(__dirname,'../dist')))
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname,'../dist','index.html'));
});

app.post("/password", (req, res) => {
  console.log(req.body);
  const length = req.body.length;
  const password = generatePassword(length)
  res.json({
   
    password
  }
);

});
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
