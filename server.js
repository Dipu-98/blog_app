const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const {MONGO_URL} = require ('./keys')
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const postRoute = require("./routes/posts");
const multer = require("multer");
const path = require("path");

dotenv.config();
app.use(express.json());
app.use("/images", express.static(path.join(__dirname, "/images")));

mongoose.connect(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify:true
  })
  .then(console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});

const upload = multer({ storage: storage });
app.post("/server/upload", upload.single("file"), (req, res) => {
  res.status(200).json("File has been uploaded");
});

app.use("/server/auth", authRoute);
app.use("/server/users", userRoute);
app.use("/server/posts", postRoute);

if(process.env.NODE_ENV === 'production'){
app.use(express.static(client/build));
}




const PORT = process.env.PORT || 5000

app.listen("5000", () => {
  console.log("Backend is running.");
});

const URL = "mongodb+srv://Blogger:fsKAgQuQkSB89zfA@cluster0.mqnvz.mongodb.net/Blogger?retryWrites=true&w=majority"
connection(process.env.MONGO_URL || URL)