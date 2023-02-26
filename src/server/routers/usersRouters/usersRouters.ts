import { Router } from "express";
import getUsers from "../../controllers/userControllers/getUsersController/getUsersControllers.js";

const usersRouter = Router();

usersRouter.get("/", getUsers);

export default usersRouter;
