import express from 'express';
import bodyParser from 'body-parser';
import cors from "cors";
import mongoose from 'mongoose';
import http from 'http';
import dotenv from 'dotenv';
import useAppRoutes from './Routes/appRoutes.js';

dotenv.config();

mongoose
  .connect("mongodb://localhost:27017/ebider")
  .then(() => console.log("Connected to database"))
  .catch((err) => console.error("Could not connect to database", err));


  // app.post('/create', function(req, res) {
  //   const newUser = {
  //     email: req.body.email,
  //     name: req.body.name,
  //     dob: req.body.dob,
  //     gender: req.body.gender,
  //   };
  // console.log(newUser);
  

const app=express();
// app.use(cors({origin: 'http://localhost:3000'}));
const corsOptions ={
  origin:'*',
  "access-control-allow-credentials":true,
  
}

var allowCrossDomain = function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin", "X-Requested-With", "Content-Type","Accept");
  next();
};
app.use(allowCrossDomain);

app.use(cors(corsOptions)) // Use this after the variable declaration

// app.use(function (req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   next();
// });

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

// app.options('*', cors()); 




useAppRoutes(app);



const httpServer = http.createServer(app);
httpServer.listen(5000,()=>{console.log("Server started on port 5000")});