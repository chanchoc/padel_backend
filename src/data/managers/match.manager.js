import Match from "../models/matches.model.js";
import MongoManager from "./manager.mongo.js";

const matchManager = new MongoManager(Match);

export default matchManager;
