import { Request, Response, Router } from "express";

const router = Router();

router.get("/", (_req: Request, res: Response) => {
    res.send("GET STUDENT");
})

router.post("/", (_req: Request, res: Response) => {
    res.send("POST STUDENT");
});

export default router;