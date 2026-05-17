import express from "express"
import adminController from "../controller/adminController.js"
import protect from "../middlewares/authMiddleware.js"

const router = express.Router()

router.get("/users", protect.forAdmin, adminController.getAllusers)
router.put("/users/:uid", protect.forAdmin, adminController.updateUser)


export default router