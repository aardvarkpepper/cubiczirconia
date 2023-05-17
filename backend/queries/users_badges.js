const db = require('../db/dbConfig.js');

//index query
const getAllBadges = async () => {
  try {
    const allBadges = await db.any("SELECT * FROM badges ORDER BY badge_id ASC");
    return { success: true, payload: allBadges };
  } catch (error) {
    return { success: false, payload: error };
  }
}

//show query
const getOneBadge = async (badge_id) => {
  try {
    const oneBadge = await db.one("SELECT * FROM badges WHERE badge_id=$1;", id);
    return { success: true, payload: oneBadge };
  } catch (error) {
    return { success: false, payload: error };
  }
}

//create query
const createBadge = async (badgeToAdd) => {
  const { 
    badge_display,
    badge_name,
    badge_description,
    badge_image_type,
    badge_image_local,
    badge_image_url,
  } = badgeToAdd;

  /*
  Excluding id, if 10 fields, 10 variables.
  As there are queries for each field (maintaining scalability), and database queries are to be minimized for cost,
  rather than using humps to retrieve data names and convert, they are manually entered.
  */
  try {
    const newBadge = await db.one(
      "INSERT INTO badges (badge_display, badge_name, badge_description, badge_image_type, badge_image_local, badge_image_url) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *;",
      [badgeDisplay, badgeName, badgeDescription, badgeImageType, badgeImageLocal, badgeImagesUrl]
    );
    return { success: true, payload: newBadge };
  } catch (error) {
    return { success: false, payload: error };
  }
}

//delete query
const deleteBadge = async (badge_id) => {
  try {
    const deletedBadge = await db.one("DELETE FROM badges WHERE badge_id=$1 RETURNING *;", id);
    return { success: true, payload: deletedBadge };
  } catch (error) {
    return { success: false, payload: error };
  }
}

//update query
const updateBadge = async (badge_id, badgeToUpdate) => {
  const { 
    badge_display,
    badge_name,
    badge_description,
    badge_image_type,
    badge_image_local,
    badge_image_url,
  } = badgeToUpdate;

  /*
  Excluding id, if 10 fields, 11 variables (id at end)
  As there are queries for each field (maintaining scalability), and database queries are to be minimized for cost,
  rather than using humps to retrieve data names and convert, they are manually entered.
  */

  try {
    const updatedBadge = await db.one(
      "UPDATE badges SET badge_display=$1, badge_name=$2, badge_description=$3, badge_image_type=$4, badge_image_local=$5, WHERE badge_id=$6 RETURNING *;",
      [badgeDisplay, badgeName, badgeDescription, badgeImageType, badgeImageLocal, badgeImagesUrl, badge_id]
    );
    return { success: true, payload: updatedBadge };
  } catch (error) {
    return { success: false, payload: error };
  }
}


module.exports = {
  getAllBadges,
  getOneBadge,
  createBadge,
  deleteBadge,
  updateBadge
};