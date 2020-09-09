import { Router } from "express";
import { createToken } from "./../../jwtUtils";
const router = Router();


router.post("/login", async (req, res) => {
    console.log("body: ", req.body);
    // const username: string = req.body.username;
    // const password: string = req.body.password;

    const token = createToken(111);

    console.log(token);
    
    res.json({token});
});

router.post("/refresh-token", async (req, res) => {
    console.log("body: ", req.body);

    res.sendStatus(200);
});

export default router;