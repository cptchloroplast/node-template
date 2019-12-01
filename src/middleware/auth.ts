import { NextFunction, Request, Response } from "express";
import { Token } from "../models";
import { decodeToken, encodeToken } from "../util";

export function verifyToken(req: Request, res: Response, next: NextFunction) {
    const token: string = req.body.token;
    const decodedToken: any = decodeToken(token);
    if (!decodedToken) {
        return res.status(403).json({
            ok: false,
            msg: "Token invalid",
        });
    }
    req.token = encodeToken(Object.assign({}, new Token(decodedToken.idUser, decodedToken.data)));
    next();
}
