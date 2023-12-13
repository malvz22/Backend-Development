import express, { Handler, Request, Response } from "express";
import expensesRouter from "./router/expenses";

const PORT = 8000;
const app = express();
app.use(express.json());

//inject router

app.use("/expenses", expensesRouter);

//middleware error handling

app.use((err: Error,_req: Request, res: Response, _next: Handler) => {
    console.log(`/FATAL ERROR`, err.stack);
    res.status(500).json({
        message: err.message,
    })
})


app.use((_req: Request,res: Response) => {
    console.log(`404:`);
    
    res.status(404).json({
        message: "404 not found"
    })
})

app.listen(PORT, () => {
    console.log(`App run on Localhost: ${PORT} `);
});