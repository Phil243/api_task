import { Router } from "express";
import { getAllUsers } from "../controllers/usersController.js";
import { getSingleUser } from "../controllers/usersController.js";
const usersRouter = Router();

usersRouter.route("/").get(getAllUsers);


usersRouter.route("/:id").get(getSingleUser);



export default usersRouter;