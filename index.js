import 'dotenv/config';
import express from "express";
import usersRouter from "./routes/usersRouter.js";
import ordersRouter from "./routes/ordersRouter.js";


const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use("/api/users", usersRouter);
app.use("/api/orders", ordersRouter);

app.get("/", (req, res) =>
    res.send("<p>Bleee!</p>"));

    app.listen(port, () =>
    console.log(`Server listening on port ${port}`));
