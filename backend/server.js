import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import connectDB from "./config/db.js"

const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

const connectServer = async () => {
    try {
        await connectDB();
        app.listen(3000, () => {
            console.log("listening on 3000");
        })
    }
    catch (err) {
        console.error("error connecting server", err);
        process.exit(1);
    }
}
connectServer();