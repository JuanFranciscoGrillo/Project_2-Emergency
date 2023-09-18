// Import the necessary modules
const express = require('express');
const router = express.Router();
const db = require('../models');

// Define the user routes and their corresponding controller functions
router.get('/users', async (req, res) => {
    try {
        // Retrieve all users from the database
        const users = await db.User.findAll();
        // Respond with a JSON array of users and a 200 status code
        res.status(200).json(users);
    } catch (err) {
        // Handle errors by responding with a JSON error message and a 500 status code
        res.status(500).json({ error: err.message });
    }
});

router.get('/users/:id', async (req, res) => {
    try {
        // Find a user by their primary key (ID)
        const user = await db.User.findByPk(req.params.id);
        if (user) {
            // If the user is found, respond with it and a 200 status code
            res.status(200).json(user);
        } else {
            // If the user is not found, respond with a 404 status code and an error message
            res.status(404).json({ error: "User not found" });
        }
    } catch (err) {
        // Handle errors by responding with a JSON error message and a 500 status code
        res.status(500).json({ error: err.message });
    }
});

router.post('/users', async (req, res) => {
    try {
        // Create a new user in the database based on the request body
        const newUser = await db.User.create(req.body);
        // Respond with the newly created user and a 201 status code (resource created)
        res.status(201).json(newUser);
    } catch (err) {
        // Handle errors by responding with a JSON error message and a 500 status code
        res.status(500).json({ error: err.message });
    }
});

router.put('/users/:id', async (req, res) => {
    try {
        // Update a user in the database based on the provided ID
        const [updated] = await db.User.update(req.body, {
            where: { user_id: req.params.id }
        });
        
        if (updated) {
            // If the user is updated successfully, respond with a success message and a 200 status code
            res.status(200).json({ message: "User updated successfully" });
        } else {
            // If the user is not found, respond with a 404 status code and an error message
            res.status(404).json({ error: "User not found" });
        }
    } catch (err) {
        // Handle errors by responding with a JSON error message and a 500 status code
        res.status(500).json({ error: err.message });
    }
});

router.delete('/users/:id', async (req, res) => {
    try {
        // Delete a user from the database based on the provided ID
        const result = await db.User.destroy({
            where: { user_id: req.params.id }
        });

        if (result) {
            // If the user is deleted successfully, respond with a success message and a 200 status code
            res.status(200).json({ message: "User deleted successfully" });
        } else {
            // If the user is not found, respond with a 404 status code and an error message
            res.status(404).json({ error: "User not found" });
        }
    } catch (err) {
        // Handle errors by responding with a JSON error message and a 500 status code
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
