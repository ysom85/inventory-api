import express from "express"
import {newTask,getMyTask,updateMyTask,deleteMyTask} from "../controllers/task.js"
import isAuthenticated from "../middlewares/auth.js"
const router = express.Router()
router.post("/new", newTask)//create
router.get("/my", getMyTask)//read
router
    .route("/:id")
    .put(updateMyTask)//update
    .delete(deleteMyTask)//delete
export default router