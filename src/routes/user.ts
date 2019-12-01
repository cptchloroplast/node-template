import express, { NextFunction, Request, Response } from "express";
import { userController } from "../controllers";
import { verifyToken } from "../middleware";

export const router = express.Router({
    strict: true
});

router.post("/", [verifyToken], (req: Request, res: Response, next: NextFunction) => {
    userController.create(req, res, next);
});

router.get("/", (req: Request, res: Response, next: NextFunction) => {
    userController.read(req, res, next);
});

router.patch("/", [verifyToken], (req: Request, res: Response, next: NextFunction) => {
    userController.update(req, res, next);
});

router.delete("/", [verifyToken], (req: Request, res: Response, next: NextFunction) => {
    userController.delete(req, res, next);
});
