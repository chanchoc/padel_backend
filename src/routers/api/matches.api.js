import { Router } from "express";
import {
    getAllMatches,
    getMatch,
    createMatch,
    deleteMatch,
    updateMatch,
} from "../../controllers/matches.controller.js";

const matchesRouter = Router();

matchesRouter.get("/", getAllMatches);
matchesRouter.get("/:mid", getMatch);
matchesRouter.post("/", createMatch);
matchesRouter.delete("/:mid", deleteMatch);
matchesRouter.put("/:mid", updateMatch);

export default matchesRouter;
