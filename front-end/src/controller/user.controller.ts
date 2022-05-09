import { Request , Response, NextFunction } from "express";
export const GetUser = (req: Request , res: Response , next: NextFunction) => {
    res.status(200).json('GetUser')
}