// Import the necessary modules
const express = require('express');
const router = express.Router();
const db = require('../models');

// Define the contractor routes and their corresponding controller functions
router.get('/contractors', async (req, res) => {
    try {
        // Retrieve all contractors from the database
        const contractors = await db.Contractor.findAll();
        // Respond with all contractors and a 200 status code
        res.status(200).json(contractors);
    } catch (err) {
        // If there's an error, send an error message and a 500 status code
        res.status(500).json({ error: err.message });
    }
});

router.get('/contractors/:id', async (req, res) => {
    try {
        // Find a contractor by their ID
        const contractor = await db.Contractor.findByPk(req.params.id);
        if (contractor) {
            // If found, send it with a 200 status code
            res.status(200).json(contractor);
        } else {
            // If not found, send a 404 status code with an error message
            res.status(404).json({ error: "Contractor not found" });
        }
    } catch (err) {
        // Handle errors with a generic error message and a 500 status code
        res.status(500).json({ error: err.message });
    }
});

router.post('/contractors', async (req, res) => {
    try {
        // Create a new contractor based on the request data
        const newContractor = await db.Contractor.create(req.body);
        // Respond with the newly created contractor and a 201 status code
        res.status(201).json(newContractor);
    } catch (err) {
        // If there's an error, send an error message and a 500 status code
        res.status(500).json({ error: err.message });
    }
});

router.put('/contractors/:id', async (req, res) => {
    try {
        // Update a contractor using their ID and request data
        await db.Contractor.update(req.body, {
            where: { contractor_id: req.params.id }
        });
        // Respond with a success message and a 200 status code
        res.status(200).json({ message: "Contractor updated successfully" });
    } catch (err) {
        // Handle errors with a generic error message and a 500 status code
        res.status(500).json({ error: err.message });
    }
});

router.delete('/contractors/:id', async (req, res) => {
    try {
        // Delete a contractor using their ID
        await db.Contractor.destroy({
            where: { contractor_id: req.params.id }
        });
        // Respond with a success message and a 200 status code
        res.status(200).json({ message: "Contractor deleted successfully" });
    } catch (err) {
        // If there's an error, send an error message and a 500 status code
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
