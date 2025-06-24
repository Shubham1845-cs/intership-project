import User from "../Model/user.js";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';


// Registration
export const register = async (req, res) => {
   
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ message: "Please fill all the fields" });
    }

    let existing = await User.findOne({ email });
    if (existing) {
      return res.status(400).json({ message: "User already exists with this email" });
    }

    const user = new User({ name, email, password });

    await user.save();

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });
   
      return  res.status(201).json({
      token,
      message: "User registered successfully",
      user: { id: user._id, name: user.name, email: user.email },
      
      
    },
   
   
);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Server error during registration" });
  }
};

// Login
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "Invalid credentials" });

    const isMatch = await user.comparePassword(password);
    if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });

    res.status(201).json({
      token,
      message: "User logged in successfully",
      user: { id: user._id, name: user.name, email: user.email },
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Server error during login" });
  }
};

    
