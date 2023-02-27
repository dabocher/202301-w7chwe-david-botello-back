import CustomError from "../../../../customError/customError.js";
import type { Request, Response, NextFunction } from "express";
import User from "../../../../database/models/Users.js";

const getUsers = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const users = await User.find().exec();

    res.status(200).json({ users });
  } catch (error) {
    const customError = new CustomError(
      error.message as string,
      500,
      "Couldn't retrieve users"
    );
    throw customError;
  }
};

export default getUsers;
