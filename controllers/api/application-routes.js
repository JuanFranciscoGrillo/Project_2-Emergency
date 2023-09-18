// Import the necessary modules
const express = require('express');
const router = express.Router();
const db = require('../models');

// Define the application routes and their corresponding controller functions
router.get('/applications', async (req, res) => {
    try {
        // Fetch all applications from the database
        const applications = await db.Application.findAll();
        // Respond with all applications and a 200 status code
        res.status(200).json(applications);
    } catch (err) {
        // If there's an error, send an error message and a 500 status code
        res.status(500).json({ error: err.message });
    }
});

router.get('/applications/:id', async (req, res) => {
    try {
        // Find an application by its ID
        const application = await db.Application.findByPk(req.params.id);
        if (application) {
            // If found, send it with a 200 status code
            res.status(200).json(application);
        } else {
            // If not found, send a 404 status code with an error message
            res.status(404).json({ error: "Application not found" });
        }
    } catch (err) {
        // Handle errors with a generic error message and a 500 status code
        res.status(500).json({ error: err.message });
    }
});

router.post('/applications', async (req, res) => {
    try {
        // Create a new application based on the request data
        const newApplication = await db.Application.create(req.body);
        // Respond with the newly created application and a 201 status code
        res.status(201).json(newApplication);
    } catch (err) {
        // If there's an error, send an error message and a 500 status code
        res.status(500).json({ error: err.message });
    }
});

router.put('/applications/:id', async (req, res) => {
    try {
        // Update an application using its ID and request data
        await db.Application.update(req.body, {
            where: { application_id: req.params.id }
        });
        // Respond with a success message and a 200 status code
        res.status(200).json({ message: "Application updated successfully" });
    } catch (err) {
        // Handle errors with a generic error message and a 500 status code
        res.status(500).json({ error: err.message });
    }
});

router.delete('/applications/:id', async (req, res) => {
    try {
        // Delete an application using its ID
        await db.Application.destroy({
            where: { application_id: req.params.id }
        });
        // Respond with a success message and a 200 status code
        res.status(200).json({ message: "Application deleted successfully" });
    } catch (err) {
        // If there's an error, send an error message and a 500 status code
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
