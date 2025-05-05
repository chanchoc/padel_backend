import playerManager from "../data/managers/player.manager.js";

async function getAllPlayers(req, res, next) {
    try {
        const filter = req.query;
        const response = await playerManager.readAll(filter);
        if (response.length > 0) {
            return res.status(200).json({ message: "Success reading all players", data: response });
        } else {
            const error = new Error("No players found");
            error.statusCode = 404;
            throw error;
        }
    } catch (error) {
        return next(error);
    }
}

async function createPlayer(req, res, next) {
    try {
        const player = req.body;
        const response = await playerManager.createOne(player);
        return res.status(201).json({ message: "Success creating player", data: response });
    } catch (error) {
        return next(error);
    }
}

async function deletePlayer(req, res, next) {
    try {
        const { pid } = req.params;
        const response = await playerManager.deleteOne(pid);
        if (!response) {
            const error = new Error(`Player with Id ${pid} not found`);
            error.statusCode = 404;
            throw error;
        }
        return res.status(200).json({ message: "Success deleting player", data: response });
    } catch (error) {
        return next(error);
    }
}

async function updatePlayer(req, res, next) {
    try {
        const { pid } = req.params;
        const player = req.body;
        const response = await playerManager.updateOne(pid, player);
        if (!response) {
            const error = new Error(`Player with Id ${pid} not found`);
            error.statusCode = 404;
            throw error;
        }
        return res.status(200).json({ message: "Success updating player", data: response });
    } catch (error) {
        return next(error);
    }
}

export { getAllPlayers, createPlayer, deletePlayer, updatePlayer };
