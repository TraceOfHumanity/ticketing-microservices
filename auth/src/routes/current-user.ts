import express from "express";
import { currentUser, requireAuth } from "@thticketsms/common";

const router = express.Router();

router.get("/api/users/currentuser", currentUser, requireAuth, (req: any, res: any) => {
    res.send({ currentUser: req.currentUser || null });
});

export { router as currentUserRouter };