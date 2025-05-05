import "dotenv/config.js";
import express from "express";
import { createServer } from "http";
import dbConnect from "./src/utils/db.util.js";
import morgan from "morgan";
import cors from "cors";
import router from "./src/routers/index.router.js";
import pathHandler from "./src/middlewares/pathHandler.mid.js";
import errorHandler from "./src/middlewares/errorHandler.mid.js";

try {
    const server = express();
    const port = process.env.PORT || 8000;
    const ready = async () => {
        console.log("Server is running in port " + port);
        await dbConnect();
    };
    const httpServer = createServer(server);
    httpServer.listen(port, ready);

    server.use(morgan("dev"));
    server.use(express.urlencoded({ extended: true }));
    server.use(express.json());
    server.use(cors());

    server.use(router);
    server.use(pathHandler);
    server.use(errorHandler);
} catch (error) {
    console.log(error);
}
