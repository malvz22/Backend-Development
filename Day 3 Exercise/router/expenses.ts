import { Request, Response, Router } from "express";
import { handleCreateExpense, handleGetExpense } from "../controller/expenses";

const router = Router();

router.get("/", handleGetExpense);

router.post("/", handleCreateExpense);

export default router;