import express from "express";
import morgan from "morgan";
import cors from "cors";
import usersRouter from "./routers/usersRouters/usersRouters.js";

const app = express();

app.disable("x-powered-by");

app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

app.use("/user", usersRouter);

export default app;
