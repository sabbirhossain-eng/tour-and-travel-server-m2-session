// req and res manage
import { Request, Response } from "express";
import User from "./user.model";

const createUser = async(req:Request, res:Response)=>{
     
    const payload = req.body;

    const result = await User.create(payload);

    res.json({
        message: 'User create successfully',
        data: result,
    })
}

export const userController ={
    createUser,
}