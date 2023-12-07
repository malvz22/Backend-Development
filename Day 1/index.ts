import http from "http";
import express from "express";

const PORT = 8080;

const app = express();

app.get("/api", async (_req,res) => {
    res.send("randomize api")
})


app.post("/api", async(req, res) => {
    const requesterName = req.header("name")
    res.send(`you got me, ${requesterName}`)
})

app.use(async (_req,res) => {
    res.status(404).json({message: "page not found"});
})


app.listen(PORT, () => {
    console.log(`Success: API server start on localhost:${PORT}`);
});