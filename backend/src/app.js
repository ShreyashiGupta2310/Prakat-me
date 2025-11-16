import express from "express";
import { createServer } from "node:http";

import { Server } from "socket.io";

import mongoose from "mongoose";
import { connectToSocket } from "./controllers/socketManager.js";


import cors from "cors";
import userRoutes from "./routes/users.routes.js";
import { login, register, getUserHistory, addToHistory } from "./controllers/user.controller.js";

const app = express();
const server = createServer(app);
const io = connectToSocket(server);


app.set("port", (process.env.PORT || 8000))
app.use(cors());
app.use(express.json({ limit: "40kb" }));
app.use(express.urlencoded({ limit: "40kb", extended: true }));

app.use("/api/v1/users", userRoutes);
app.post("/api/login", login);
app.post("/api/register", register);
app.get("/api/history", getUserHistory);
app.post("/api/add-history", addToHistory);
const start = async () => {
    app.set("mongo_user")
    const connectionDb = await mongoose.connect("mongodb+srv://shreyashi:QOiIttgc8ZmlwrV8@cluster0.lbduedt.mongodb.net/")

    console.log(`MONGO Connected DB HOst: ${connectionDb.connection.host}`)
    server.listen(app.get("port"), () => {
        console.log("LISTENIN ON PORT 8000")
    });



}



start();


// notes

//in backend -->npm run dev
//in  my-frontend==>npm run dev

// here’s why you cannot just run node app.js from the backend folder:

//  Your folder structure matters

// Your app.js is inside src/:

// backend/
//  ├── package.json
//  └── src/
//       └── app.js


// When you run node app.js from backend/, Node looks for backend/app.js.

// But your file is at backend/src/app.js.

// That’s why Node throws:

// Cannot find module '.../backend/app.js'