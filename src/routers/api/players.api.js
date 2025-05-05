import { Router } from "express";
import { getAllPlayers, createPlayer, deletePlayer, updatePlayer } from "../../controllers/players.controller.js";

const playersRouter = Router();

playersRouter.get("/", getAllPlayers);
playersRouter.post("/", createPlayer);
playersRouter.delete("/:pid", deletePlayer);
playersRouter.put("/:pid", updatePlayer);

export default playersRouter;
