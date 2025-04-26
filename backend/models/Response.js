// models/Response.js
import mongoose from "mongoose";
const ResponseSchema = new mongoose.Schema({
  formId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Form",
  },
  answers: mongoose.Schema.Types.Mixed, // Store dynamic key-value pairs
  submittedAt: {
    type: Date,
    default: Date.now,
  },
});

const Response = mongoose.model("Response", ResponseSchema);
export default Response;

