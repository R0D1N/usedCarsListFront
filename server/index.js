import { createRoute, runServer } from "./interfaces/express.js";
import routes from "./routes.js";

const { PORT, HOST } = process.env;

routes.forEach(createRoute);

runServer(PORT, HOST);
