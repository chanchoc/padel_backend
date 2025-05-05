import Player from "../models/players.model.js";
import MongoManager from "./manager.mongo.js";

const playerManager = new MongoManager(Player);

export default playerManager;
