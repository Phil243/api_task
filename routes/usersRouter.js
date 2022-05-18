import { Router } from "express";
import { getAllUsers } from "../controllers/usersController.js";

const usersRouter = Router();

usersRouter.route("/").get(getAllUsers)


usersRouter.route("/:id")



export default usersRouter;