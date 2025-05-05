import { Schema, model } from "mongoose";

const collection = "players";
const schema = new Schema(
    {
        name: { type: String, required: true, unique: true },
    },
    { timestamps: true }
);

const Player = model(collection, schema);
export default Player;
