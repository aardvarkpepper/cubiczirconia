-- psql -U postgres -f db/schema.sql

-- IF already exists, drop it.
DROP DATABASE IF EXISTS cubic_zirconia_database;

-- Create our database
CREATE DATABASE cubic_zirconia_database;

-- Connect to the db
\c cubic_zirconia_database;

CREATE TABLE users (
  user_id SERIAL PRIMARY KEY,
  user_login_name VARCHAR(40) NOT NULL,
  user_login_password VARCHAR(40) NOT NULL,
  user_failed_logins SMALLINT NOT NULL CHECK (failed_logins >=0),
  user_last_login DATE NOT NULL,
  user_date_of_birth DATE NOT NULL,
  user_account_create_date DATE NOT NULL,
  user_username VARCHAR(40) NOT NULL,
  user_picture_url VARCHAR(60) NOT NULL,
  user_subscription_type VARCHAR(40) NOT NULL,
  user_access_level SMALLINT NOT NULL,
  user_email VARCHAR(60) NOT NULL,
  user_quote VARCHAR (200),
  user_notepad TEXT
);

CREATE TABLE themes (
    theme_id SERIAL PRIMARY KEY,
    theme_name VARCHAR(20) NOT NULL,
    theme_display_size VARCHAR(20) NOT NULL,
    theme_show_badges BOOLEAN NOT NULL,
    theme_palette VARCHAR(20) NOT NULL,
    theme_font VARCHAR(20) NOT NULL,
    theme_text_color VARCHAR(20) NOT NULL,
    theme_text_size VARCHAR(20) NOT NULL,
    theme_background VARCHAR(20) NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE CASCADE,
);

CREATE TABLE badges {
    badge_id SERIAL PRIMARY KEY,
    badge_display BOOLEAN NOT NULL,
    badge_name VARCHAR(40) NOT NULL,
    badge_description VARCHAR(80) NOT NULL,
    badge_image_type VARCHAR(10) NOT NULL,
    badge_image_local VARCHAR(80) NOT NULL,
    badge_images_url VARCHAR(200) NOT NULL
};

CREATE TABLE users_badges {
    user_id INT NOT NULL,
    badge_id INT NOT NULL,
    users_badges_for VARCHAR(120) NOT NULL,
    user_badges_date DATE NOT NULL,
    PRIMARY KEY (user_id, badge_id),
    FOREIGN KEY (user_id) REFERENCES users(user_id) ON UPDATE CASCADE ON DELETE CASCADE,
    FOREIGN KEY (badge_id) REFERENCES badges(badge_id) ON UPDATE CASCADE ON DELETE CASCADE,
};