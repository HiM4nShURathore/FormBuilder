import User from '../models/User.js';

export const createUser = async (req, res) => {
  try {
    const { name, email, phone, isAdmin } = req.body;
    const user = new User({ name, email, phone, isAdmin });
    await user.save();
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
