import express from "express";
const app= express();
app.use(express.json());

const scanRouter = express.Router();
app.use(express.json());

scanRouter.post("/scan",async function(req,res){

})

export default scanRouter;