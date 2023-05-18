const express = require('express');
const JASUsersBadges = express.Router();

const {
    getAllJASUsersBadgesSortByDate,
    getAllJASUsersBadgesByUserSortByDate,
    getAllJASUsersBadgesByBadgeSortByDate,
    getOneJASUserBadge,
    createJASUserBadge,
    deleteJASUserBadge,
    updateJASUserBadge
} = require('../queries/JASUsersBadges.js');


//index route
JASUsersBadges.get('/', async (req, res) => {
    const allJASUsersBadgesSortByDate = await getAllJASUsersBadgesSortByDate();

    if (allJASUsersBadgesSortByDate.success) {
        res.status(200).json(allJASUsersBadgesSortByDate.payload);
    } else {
        res.status(400).json({ error: `Error: ${allJASUsersBadgesSortByDate.payload}` });
    }
})

//show route
JASUsersBadges.get('/:id', async (req, res) => {
    const { id } = req.params;
    const oneJASUserBadge = await getOneJASUserBadge(id);

    if (oneJASUserBadge.success) {
        res.status(200).json(oneJASUserBadge.payload);
    } else {
        res.status(400).json({ error: `Error: ${oneJASUserBadge.payload}` });
    }
})

//index route
JASUsersBadges.get('/user/:id', async (req, res) => {
    const { userId } = req.params;
    const allJASUsersBadgesByUserSortByDate = await getAllJASUsersBadgesByUserSortByDate(userId);

    if (allJASUsersBadgesByUserSortByDate.success) {
        res.status(200).json(allJASUsersBadgesByUserSortByDate.payload);
    } else {
        res.status(400).json({ error: `Error: ${allJASUsersBadgesByUserSortByDate.payload}` });
    }
})

//index route
JASUsersBadges.get('/badge/:id', async (req, res) => {
    const { badgeId } = req.params;
    const allJASUsersBadgesByBadgeSortByDate = await getAllJASUsersBadgesByBadgeSortByDate(badgeId);

    if (allJASUsersBadgesByBadgeSortByDate.success) {
        res.status(200).json(allJASUsersBadgesByBadgeSortByDate.payload);
    } else {
        res.status(400).json({ error: `Error: ${allJASUsersBadgesByBadgeSortByDate.payload}` });
    }
})

//create route
JASUsersBadges.post('/', async (req, res) => {
    const newJASUserBadge = req.body;
    const createdJASUserBadge = await createJASUserBadge(newJASUserBadge);

    if (createdJASUserBadge.success) {
        res.status(200).json(createdJASUserBadge.payload);
    } else {
        res.status(400).json({ error: `Error: ${createdJASUserBadge.payload}` });
    }
})

//delete route
JASUsersBadges.delete('/:id', async (req, res) => {
    const { id } = req.params;
    const deletedJASUserBadge = await deleteJASUserBadge(id);

    if (deletedJASUserBadge.success) {
        res.status(200).json(deletedJASUserBadge.payload);
    } else {
        res.status(400).json({ error: `Error: ${deletedJASUserBadge.payload}` });
    }
})

//update route
JASUsersBadges.put('/:id', async (req, res) => {
    const { id } = req.params;
    const editJASUserBadge = req.body;
    const updatedJASUserBadge = await updateJASUserBadge(id, editJASUserBadge);

    if (updatedJASUserBadge.success) {
        res.status(200).json(updatedJASUserBadge.payload);
    } else {
        res.status(400).json({ error: `Error: ${updatedJASUserBadge.payload}` });
    }
})


module.exports = JASUsersBadges;