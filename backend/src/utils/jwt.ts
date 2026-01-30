import jwt from 'jsonwebtoken'
import type {JwtPayload} from 'jsonwebtoken'
import { json } from 'express'

export const generateJWT = (payload : JwtPayload) => {
    const token = jwt.sign(payload, process.env.JWT_SECRET, {expiresIn: '180d'
        
    })
    return token
}
    