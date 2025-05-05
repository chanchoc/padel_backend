import { Router } from "express";
import matchesRouter from "./matches.api.js";
import playersRouter from "./players.api.js";

const apiRouter = Router();

apiRouter.use("/matches", matchesRouter);
apiRouter.use("/players", playersRouter);

export default apiRouter;
