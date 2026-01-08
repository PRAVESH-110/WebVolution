import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

function authMiddleware(req, res, next){
    const token =req.headers.authorization;

    const data= jwt.sign()
}