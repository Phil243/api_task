import 'dotenv/config';
import express from "express";
import usersRouter from "./routes/usersRouter.js";


const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use("/api/users", usersRouter);


app.get("/", (req, res) =>
    res.send("<p>Ahoy!</p>"));

    app.listen(port, () =>
    console.log(`Server listening on port ${port}`));
