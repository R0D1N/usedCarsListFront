import express from "express";
import cors from "cors";
import { welcomeMessage, log, CONSOLE_COLORS } from "./console.js";

const app = express();
app.use(express.json());
app.use(cors());

const METHODS = ["get", "post", "put", "delete"];

const isValidMethod = (method) => METHODS.includes(method);

const createRoute = ({
  endpoint,
  middlewares = [],
  method = "get",
  handler,
}) => {
  if (isValidMethod(method)) {
    app[method](endpoint, ...middlewares, handler);
  } else {
    log(`${CONSOLE_COLORS.RED}Invalid method: ${method}`);
  }
};

const handleError = ({ code, message }) =>
  app.use((_, res) => res.status(code).json({ code, message }));

const runServer = (port, host) => {
  app.listen(port, host);
  welcomeMessage(port);
};

export { runServer, handleError, createRoute };
