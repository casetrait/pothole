const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const imageSchema = new Schema(
  {
    url: String,
  },
  {
    timestamps: true,
  }
);

const ticketSchema = new Schema(
  {
    reporter: { type: Schema.Types.ObjectId, ref: "User" },
    title: String,
    category: {
      default: "Pothole",
      type: String,
      enum: [
        "Pothole",
        "Drainage",
        "Pedestrian",
        "Traffic Light",
        "Signage",
        "Speed Limit",
        "Snow",
        "Ice",
      ],
    },
    description: String,
    lat: Number,
    long: Number,
    confirmationVote: [],
    resolvedVote: [],
    isActive: {type: Boolean, default:true},
    images: [imageSchema],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Ticket", ticketSchema);
