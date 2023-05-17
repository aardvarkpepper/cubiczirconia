const express = require('express');
const badges = express.Router();

const {
    getAllBadgesSortBadgeId,
    getOneBadge,
    createBadge,
    deleteBadge,
    updateBadge
} = require('../queries/badges.js');

//index route
badges.get('/', async (req, res) => {
    const allBadges = await getAllBadges();

    if (allBadges.success) {
        res.status(200).json(allBadges.payload);
    } else {
        res.status(400).json({ error: `Error: ${allBadges.payload}` });
    }
})

//show route
badges.get('/:id', async (req, res) => {
    const { id } = req.params;
    const oneBadge = await getOneBadge(id);

    if (oneBadge.success) {
        res.status(200).json(oneBadge.payload);
    } else {
        res.status(400).json({ error: `Error: ${oneBadge.payload}` });
    }
})

//create route
badges.post('/', async (req, res) => {
    const newBadge = req.body;
    const createdBadge = await createBadge(newBadge);

    if (createdBadge.success) {
        res.status(200).json(createdBadge.payload);
    } else {
        res.status(400).json({ error: `Error: ${createdBadge.payload}` });
    }
})

//delete route
badges.delete('/:id', async (req, res) => {
    const { id } = req.params;
    const deletedBadge = await deleteBadge(id);

    if (deletedBadge.success) {
        res.status(200).json(deletedBadge.payload);
    } else {
        res.status(400).json({ error: `Error: ${deletedBadge.payload}` });
    }
})

//update route
badges.put('/:id', async (req, res) => {
    const { id } = req.params;
    const editBadge = req.body;
    const updatedBadge = await updateBadge(id, editBadge);

    if (updatedBadge.success) {
        res.status(200).json(updatedBadge.payload);
    } else {
        res.status(400).json({ error: `Error: ${updatedBadge.payload}` });
    }
})

module.exports = badges;