import { NextFunction, Request, Response } from "express";
import { CRUDController } from "./CRUD";

export class UserController extends CRUDController {
    public create(req: Request, res: Response, next: NextFunction): void {
        res.status(201).json({
            ok: true,
            msg: "CREATE user",
        });
    }
    public read(req: Request, res: Response, next: NextFunction): void {
        res.status(200).json({
            ok: true,
            msg: "READ user"
        });
    }
    public update(req: Request, res: Response, next: NextFunction): void {
        res.status(200).json({
            ok: true,
            msg: "UPDATE user",
        });
    }
    public delete(req: Request, res: Response, next: NextFunction): void {
        res.status(200).json({
            ok: true,
            msg: "DELETE user",
        });
    }
}
