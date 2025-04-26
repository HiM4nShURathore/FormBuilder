import mongoose from 'mongoose';

const fieldSchema = new mongoose.Schema({
  type: String,
  label: String,
  options: [String], // For dropdown/checkbox etc.
}, { _id: false });

const formSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  fields: [fieldSchema],
  createdBy: String,
}, { timestamps: true });

const Form = mongoose.model('Form', formSchema);
export default Form;
