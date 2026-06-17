const mongoose = require('mongoose');
const user = require('../model/usermodel');
const jwt = require('jsonwebtoken');

exports.registerUser = async (req, res) => {
    try {
        const { name, email, phone_number, password } = req.body;
        const newUser = new user({
            userId: new mongoose.Types.ObjectId(),
            name,
            email,
            phone_number,
            password
        });
        await newUser.save();
        const token = jwt.sign({ userId: newUser.userId }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.status(201).json({ message: 'User registered successfully', user: newUser, token });
    }
    catch (error) {
        res.status(500).json({ message: 'Error registering user', error: error.message });
    }
};

exports.loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const existingUser = await user.findOne({ email });
        if (!existingUser) {
            return res.status(404).json({ message: 'User not found' });
        }
        if (existingUser.password !== password) {
            return res.status(401).json({ message: 'Invalid password' });
        }
        const token = jwt.sign({ userId: existingUser.userId }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.status(200).json({ message: 'Login successful', user: existingUser, token });
    }
    catch (error) {
        res.status(500).json({ message: 'Error logging in', error: error.message });
    }   
};

exports.getUserProfile = async (req, res) => {
    try {
        const userId = req.params.userId;
        const userProfile = await user.findOne({ userId }); 
        if (!userProfile) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json({ user: userProfile });
    }
    catch (error) {
        res.status(500).json({ message: 'Error fetching user profile', error: error.message });
    }
};

exports.updateUserProfile = async (req, res) => {   
    try {
        const userId = req.params.userId;
        const { name, email, phone_number, password } = req.body;
        const updatedUser = await user.findOneAndUpdate(
            { userId },
            { name, email, phone_number, password },
            { new: true }
        );
        if (!updatedUser) {
            return res.status(404).json({ message: 'User not found' });
        }   
        const token = jwt.sign({ userId: updatedUser.userId }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.status(200).json({ message: 'User profile updated successfully', user: updatedUser, token });
    }   
    catch (error) {
        res.status(500).json({ message: 'Error updating user profile', error: error.message });
    }   
};

exports.deleteUserProfile = async (req, res) => {
    try {
        const userId = req.params.userId;
        const deletedUser = await user.findOneAndDelete({ userId });
        if (!deletedUser) {
            return res.status(404).json({ message: 'User not found' });
        }
        const token = jwt.sign({ userId: deletedUser.userId }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.status(200).json({ message: 'User profile deleted successfully', token });
    }
    catch (error) {
        res.status(500).json({ message: 'Error deleting user profile', error: error.message });
    }   
};