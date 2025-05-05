import { Types } from "mongoose";

class MongoManager {
    constructor(model) {
        this.model = model;
    }

    async readAll(filter) {
        try {
            const all = await this.model.find(filter, "-__v").sort({ date: -1, createdAt: -1 }).lean();
            return all;
        } catch (error) {
            throw error;
        }
    }

    async readOne(id) {
        try {
            if (Types.ObjectId.isValid(id)) {
                const one = await this.model.findById(id).lean();
                return one;
            }
            return null;
        } catch (error) {
            throw error;
        }
    }

    async createOne(data) {
        try {
            const created = await this.model.create(data);
            return created;
        } catch (error) {
            throw error;
        }
    }

    async deleteOne(id) {
        try {
            if (Types.ObjectId.isValid(id)) {
                const deleted = await this.model.findOneAndDelete({ _id: id });
                return deleted;
            }
            return null;
        } catch (error) {
            throw error;
        }
    }

    async updateOne(id, data) {
        try {
            if (Types.ObjectId.isValid(id)) {
                const opts = { new: true };
                const updated = await this.model.findOneAndUpdate({ _id: id }, data, opts);
                return updated;
            }
            return null;
        } catch (error) {
            throw error;
        }
    }
}

export default MongoManager;
