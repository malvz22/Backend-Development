import express, { Request, Response } from "express";
import classRouter from "./router/class"

const PORT = 8000;

const app = express();

app.get("/", (_req: Request, res: Response) => {
    res.send("Welcome to my API")
})

//Routing users

//routing

app.use("/class", classRouter);


app.use((_req: Request,res: Response) => {
    res.status(404).json({
        message: "not found",
    });
})

app.listen(PORT, () => {
    console.log(`App run on localhost ${PORT}`);
});