import { Router } from "express";
import { getAllOrders } from "../controllers/ordersController.js";

const ordersRouter = Router();

ordersRouter.route("/").get(getAllOrders)


ordersRouter.route("/:id")



export default ordersRouter;