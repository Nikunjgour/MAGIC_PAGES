import jwt from "jsonwebtoken"
import User from "../model/usermodel.js"


const forUser = async (req, res, next) => {

    try {
        if (req.headers.authorization || req.headers.authorization.startWith('Bearer')) {

            const token = req.headers.authorization.split(" ")[1]
            const decoded = jwt.verify(token, process.env.JWT_SECRET)
            const user = await User.findById(decoded.id).select("-password")
            req.user = user
            next()
        } else {
            res.status(401)
            throw new Error("unauthorised Access!!  ")
        }

    } catch (error) {
        res.status(401)
        throw new Error("unauthorised Access!! ")
    }
}


const forAdmin = async (req, res, next) => {

    try {
        if (req.headers.authorization || req.headers.authorization.startWith('Bearer')) {

            const token = req.headers.authorization.split(" ")[1]
            const decoded = jwt.verify(token, process.env.JWT_SECRET)
            const user = await User.findById(decoded.id).select("-password")
            req.user = user
            if (user.isAdmin) {
                next()
            } else {
                res.status(401)
                throw new Error("Admin Only : unauthorised Access!!  ")
            }
        } else {
            res.status(401)
            throw new Error("unauthorised Access!!  ")
        }

    } catch (error) {
        res.status(401)
        throw new Error("unauthorised Access!! ")
    }
}

const protect = { forUser, forAdmin }

export default protect