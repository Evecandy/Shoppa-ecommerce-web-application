
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { expressConfig } from '../config/index.js';

dotenv.config()

export const verifyUser = (req,res,next)=> {
    try {
        const token = req.headers['token']
        if (!token) {
            return res.status(401).json({message:'Unauthorized'})
        }
        req.auth = jwt.verify(token, expressConfig.jwt_secret)
        next() 
    } catch (error) {
        res.status(403).json({message:error.message})
    }
}

export const adminOnly = (req,res,next)=> {
    try {
        const token = req.headers['token']
        if (!token) {
            return res.status(401).json({message:'Unauthorized'})
        }
        req.auth = jwt.verify(token, expressConfig.jwt_secret)
        if (req.auth.role !== "admin" ){
           return res.status(403).json({message:"Forbidden"})
        }
        next()
    } catch (error) {
        res.status(403).json({message:error.message})
    }
}