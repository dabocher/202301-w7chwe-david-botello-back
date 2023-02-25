import createDebug from "debug";
import app from "../index.js";
import type CustomError from "../../customError/customError.js";

const debug = createDebug(process.env.DEBUG!);

const startServer = async (port: number) =>
  new Promise((resolve, reject) => {
    const server = app.listen(port, () => {
      debug(`Server is listening request from ${port} port`);
      resolve(server);
    });

    server.on("error", (error: CustomError) => {
      let errorMessage = "Error on starting server";

      if (error.code === "EADDRINUSE") {
        errorMessage += `Port ${port} is already in use`;
      }

      reject(new Error(errorMessage));
    });
  });

export default startServer;
