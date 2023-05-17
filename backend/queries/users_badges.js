const db = require('../db/dbConfig.js');

//JAS (Users Badges) index query, sort by date
const getAllJASUsersBadgesSortByDate = async () => {
    try {
        const allJASUsersBadges = await db.any("SELECT * FROM jas_user_badges ORDER BY jas_user_badge_date ASC");
        return { success: true, payload: allJASUsersBadges };
    } catch (error) {
        return { success: false, payload: error };
    }
}

//index query, get badges by user, sort by date
const getAllJASUsersBadgesByUserSortbyDate = async (userId) => {
    try {
        const allJASUsersBadgesByUser = await db.any("SELECT * FROM jas_user_badges WHERE user_id=$1 ORDER BY jas_user_badge_date ASC", userId);
        return { success: true, payload: allJASUsersBadgesByUser };
    } catch (error) {
        return { success: false, payload: error };
    }
}

//index query, get users by badge, sort by date
const getAllJASUsersBadgesByBadgeSortByDate = async (badgeId) => {
    try {
        const allJASUsersBadgesByBadge = await db.any("SELECT * FROM jas_user_badges WHERE badge_id=$1 ORDER BY jas_user_badge_date ASC", badgeId);
        return { success: true, payload: allJASUsersBadgesByBadge };
    } catch (error) {
        return { success: false, payload: error };
    }
}

//show query
const getOneJASUserBadge = async (JASUserBadgeId) => {
    try {
        const oneBadge = await db.one("SELECT * FROM jas_user_badges WHERE jas_user_badge_id=$1;", JASUserBadgeId);
        return { success: true, payload: oneBadge };
    } catch (error) {
        return { success: false, payload: error };
    }
}

//create query.  Field specific.
const createJASUserBadge = async (JASUserBadgeToAdd) => {
    const {
        userId, 
        badgeId, 
        JASUserBadgeDisplay, 
        JASUserBadgeImageType, 
        JASUserBadgeImageUrl, 
        JASUserBadgeFor, 
        JASUserBadgeDate
    } = JASUserBadgeToAdd;

    /*
    Excluding id, if 10 fields, 10 variables.
    As there are queries for each field (maintaining scalability), and database queries are to be minimized for cost,
    rather than using humps to retrieve data names and convert, they are manually entered.
    */
    try {
        const newJASUserBadge = await db.one(
            "INSERT INTO jas_user_badges (user_id, badge_id, jas_user_badge_display, jas_user_badge_image_type, jas_user_badge_image_url, jas_user_badge_for, jas_user_badge_date) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *;",
            [userId, badgeId, JASUserBadgeDisplay, JASUserBadgeImageType, JASUserBadgeImageUrl, JASUserBadgeFor, JASUserBadgeDate]
        );
        return { success: true, payload: newJASUserBadge };
    } catch (error) {
        return { success: false, payload: error };
    }
}

//delete query
const deleteJASUserBadge = async (JASUserBadgeId) => {
    try {
        const deletedJASUserBadge = await db.one("DELETE FROM jas_user_badges WHERE jas_user_badge_id=$1 RETURNING *;", JASUserBadgeId);
        return { success: true, payload: deletedJASUserBadge };
    } catch (error) {
        return { success: false, payload: error };
    }
}

//update query.  Field specific.
const updateJASUserBadge = async (JASUserBadgeId, JASUserBadgeToUpdate) => {
    const {
        userId, 
        badgeId, 
        JASUserBadgeDisplay, 
        JASUserBadgeImageType, 
        JASUserBadgeImageUrl, 
        JASUserBadgeFor, 
        JASUserBadgeDate
    } = JASUserBadgeToUpdate;

    /*
    Excluding id, if 10 fields, 11 variables (id at end)
    As there are queries for each field (maintaining scalability), and database queries are to be minimized for cost,
    rather than using humps to retrieve data names and convert, they are manually entered.
    */

    try {
        const updatedJASUserBadge = await db.one(
            "UPDATE jas_user_badges SET user_id=$1, badge_id=$2, jas_user_badge_display=$3, jas_user_badge_image_type=$4, jas_user_badge_image_url=$5, jas_user_badge_for=$6, jas_user_badge_date=$7 WHERE jas_user_badge_id=$8 RETURNING *;",
            [userId, badgeId, JASUserBadgeDisplay, JASUserBadgeImageType, JASUserBadgeImageUrl, JASUserBadgeFor, JASUserBadgeDate, JASUserBadgeId]
        );
        return { success: true, payload: updatedJASUserBadge };
    } catch (error) {
        return { success: false, payload: error };
    }
}

module.exports = {
    getAllJASUsersBadgesSortByDate,
    getAllJASUsersBadgesByUserSortbyDate,
    getAllJASUsersBadgesByBadgeSortByDate,
    getOneJASUserBadge,
    createJASUserBadge,
    deleteJASUserBadge,
    updateJASUserBadge
};