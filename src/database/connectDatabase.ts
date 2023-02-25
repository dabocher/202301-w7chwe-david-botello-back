import createDebug from "debug";
import mongoose from "mongoose";

const debug = createDebug(process.env.DEBUG!);
const connectDatabase = async (url: string) => {
  mongoose.set("strictQuery", false);

  try {
    await mongoose.connect(url);
    debug(`Connected to database`);
  } catch (error) {}
};

export default connectDatabase;
