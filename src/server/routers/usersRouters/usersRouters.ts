import { Router } from "express";
import getUsers from "../../controllers/userControllers/userControllers.js";

const usersRouter = Router();

usersRouter.get("/", getUsers);

export default usersRouter;
