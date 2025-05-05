import { Schema, model, Types } from "mongoose";

const collection = "matches";
const schema = new Schema(
    {
        date: { type: Date, default: Date.now },
        location: { type: String, required: true },
        level: { type: Number, enum: [1, 2, 3, 4, 5, 6, 7, 8, 9], required: true },
        result: { type: String, enum: ["Victoria", "Empate", "Derrota"], required: true },
        score: { type: String },
        teammates: [{ type: Types.ObjectId, ref: "players" }],
        opponents: [{ type: Types.ObjectId, ref: "players" }],
        comment: { type: String, default: "" },
        side: { type: String, enum: ["Derecha", "Revés"], required: true },
    },
    { timestamps: true }
);

schema.pre("find", function () {
    this.populate("teammates", "name _id").populate("opponents", "name _id");
});

schema.pre("findOne", function () {
    this.populate("teammates", "name _id").populate("opponents", "name _id");
});

const Match = model(collection, schema);
export default Match;
