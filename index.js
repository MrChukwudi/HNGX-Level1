import express from "express";
import dotenv from "dotenv";
import requestRoute from "./Routes/request-route.js";

const app = express();
dotenv.config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//My Request Route:
app.use("/api", requestRoute);

//Declaring my Port:
const port = process.env.PORT || 1002;

app.listen(port, () => {
  console.log(`My Server is Up and Running on Port ${port}...`);
});
