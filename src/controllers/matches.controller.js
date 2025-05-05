import matchManager from "../data/managers/match.manager.js";

async function getAllMatches(req, res, next) {
    try {
        const filter = req.query;
        const response = await matchManager.readAll(filter);
        if (response.length === 0) {
            return res.status(200).json({ message: "No matches found", data: [] });
        }
        return res.status(200).json({ message: "Success reading all matches", data: response });
    } catch (error) {
        return next(error);
    }
}

async function getMatch(req, res, next) {
    try {
        const { mid } = req.params;
        const response = await matchManager.readOne(mid);
        if (!response) {
            const error = new Error(`Match with Id ${mid} not found`);
            error.statusCode = 404;
            throw error;
        }
        return res.status(200).json({ message: "Success reading match", data: response });
    } catch (error) {
        return next(error);
    }
}

async function createMatch(req, res, next) {
    try {
        const match = req.body;
        const response = await matchManager.createOne(match);
        return res.status(201).json({ message: "Success creating match", data: response });
    } catch (error) {
        return next(error);
    }
}

async function deleteMatch(req, res, next) {
    try {
        const { mid } = req.params;
        const response = await matchManager.deleteOne(mid);
        if (!response) {
            const error = new Error(`Match with Id ${mid} not found`);
            error.statusCode = 404;
            throw error;
        }
        return res.status(200).json({ message: "Success deleting match", data: response });
    } catch (error) {
        return next(error);
    }
}

async function updateMatch(req, res, next) {
    try {
        const { mid } = req.params;
        const match = req.body;
        const response = await matchManager.updateOne(mid, match);
        if (!response) {
            const error = new Error(`Match with Id ${mid} not found`);
            error.statusCode = 404;
            throw error;
        }
        return res.status(200).json({ message: "Success updating match", data: response });
    } catch (error) {
        return next(error);
    }
}

export { getAllMatches, getMatch, createMatch, deleteMatch, updateMatch };
