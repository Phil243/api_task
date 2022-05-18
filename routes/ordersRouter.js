import { Router } from "express";
import { getAllOrders } from "../controllers/ordersController.js";
import { getSingleOrder } from "../controllers/ordersController.js";

const ordersRouter = Router();

ordersRouter.route("/").get(getAllOrders);


ordersRouter.route("/:id").get(getSingleOrder);



export default ordersRouter;