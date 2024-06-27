import { Router } from "express";
import { getRoot, getRootData } from "./handlers/root";

const router = Router();


router.get("/", getRoot)


router.get("/:data", getRootData)


export default router;