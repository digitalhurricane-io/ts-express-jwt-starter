import { Router } from "express";
import passport from "passport";
const router = Router();


router.get("", passport.authenticate("jwt", { session: false }), async (req, res) => {
    const claims: any = req.user;
    const userID = claims.sub;

    console.log("claims: ", claims);
    console.log("userID: ", userID);
    
    res.sendStatus(200);
});

export default router;