import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import postRoutes from './routes/posts.js';
import userRouter from "./routes/user.js";


const app = express();

dotenv.config();
 

app.use(express.json({ limit : "30mb", extended : true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/posts", postRoutes);
app.use("/user", userRouter);

 
const CONNECTION_URL = "mongodb+srv://admin:Admin@123@cluster0.uahf8.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const PORT = 5000;

mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message));
 

mongoose.set('useFindAndModify', false);
