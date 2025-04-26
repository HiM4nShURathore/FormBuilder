import Form from '../models/Form.js';

// Create a new form
export const createForm = async (req, res) => {
    try {
      console.log("Received data:", req.body); // 👈 DEBUG LOG
      const { title, description, fields, createdBy } = req.body;
  
      const form = new Form({ title, description, fields, createdBy });
      await form.save();
      res.status(201).json(form);
    } catch (err) {
      console.error("Create form error:", err); // 👈 show full error
      res.status(400).json({ message: err.message });
    }
  };
  

// Get all forms
export const getForms = async (req, res) => {
  try {
    const forms = await Form.find();
    res.json(forms);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get a single form by ID
export const getFormById = async (req, res) => {
  try {
    const form = await Form.findById(req.params.id);
    if (!form) return res.status(404).json({ message: 'Form not found' });
    res.json(form);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Delete a form by ID
export const deleteForm = async (req, res) => {
  try {
    const form = await Form.findByIdAndDelete(req.params.id);
    if (!form) return res.status(404).json({ message: 'Form not found' });
    res.status(200).json({ message: 'Form deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
