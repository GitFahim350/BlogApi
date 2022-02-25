const express=require('express')
const mongoose=require('mongoose')
const dotenv=require('dotenv')
var cors = require('cors')
const authroute=require('./Router/auth.js')
const user=require('./Router/user.js')
const app=express();
dotenv.config();
app.use(cors());
app.use(express.json());
app.use('/api',authroute);
app.use('/api',user);

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(console.log("App is connected"))
  .catch((err) => console.log(err));

  app.listen("5000", () => {
    console.log("Backend is running.....");
  });