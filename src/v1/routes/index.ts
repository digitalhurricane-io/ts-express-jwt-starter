import { Router } from "express";
import authRoutes from "./auth.route";
import exampleRoutes from "./example.route";

const router = Router();

router.get("/status", (req, res) => res.send("OK"));

router.use("/auth", authRoutes);
router.use("/example", exampleRoutes);

export default router;