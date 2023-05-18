-- psql -U postgres -f db/seed.sql

\c cubic_zirconia_database;

INSERT INTO users (user_login_name, user_login_password, user_failed_logins, user_last_login, user_date_of_birth, user_account_create_date, user_username, user_image_type, user_image_local, user_image_url, user_subscription_type, user_access_level, user_email, user_quote, user_notepad)
VALUES
('bruce_wayne', 'batman123', 0, '2023-05-01', '1970-07-15', '2023-01-01', 'Bruce Wayne (Batman)', 'local', '/images/batman.jpg', 'https://example.com/bruce_wayne.jpg', 'Premium', 1, 'bruce@wayneindustries.com', 'I don''t believe in luck. I believe in preparation.', 'Gotham?  Got cheese?  Well then you got yourself a sandwich.'),
('han_solo', 'falcon456', 0, '2023-05-02', '1977-05-25', '2023-01-02', 'Han Solo (Star Wars)', 'local', '/images/hansolo.jpg', 'https://example.com/han_solo.jpg', 'Free', 2, 'han@moseisley.com', 'Never tell me the odds.', 'May the Force be with you!'),
('dirty_harry', 'make_my_day789', 0, '2023-05-03', '1971-12-23', '2023-01-03', 'Dirty Harry', 'local', '/images/dirtyharry.jpg', 'https://example.com/dirty_harry.jpg', 'Premium', 1, 'harry@precinct1.com', 'You''ve got to ask yourself one question: Do I feel lucky? Well, do ya, punk?', 'Go ahead, make my day.'),
('katniss_everdeen', 'mockingjay123', 0, '2023-05-04', '2008-09-14', '2023-01-04', 'Katniss Everdeen (The Hunger Games)', 'local', '/images/katniss.jpg', 'https://example.com/katniss_everdeen.jpg', 'Free', 2, 'katniss@district12.com', 'May the odds be ever in your favor.', 'I volunteer!'),
('forrest_gump', 'run_forrest_run', 0, '2023-05-05', '1951-06-06', '2023-01-05', 'Forrest Gump', 'local', '/images/forrest.jpg', 'https://example.com/forrest_gump.jpg', 'Premium', 1, 'forrest@greenbow.com', 'I feel lucky. Luck is everything.', 'Life is like a box of chocolates.'),
('miranda_priestly', 'fashionqueen789', 0, '2023-05-06', '2003-06-30', '2023-01-06', 'Miranda Priestly (The Devil Wears Prada)', 'local', '/images/miranda.jpg', 'https://example.com/miranda_priestly.jpg', 'Free', 2, 'miranda@runway.com', 'Sometimes the universe just conspires to give you what you want.', 'Fashion is my passion.'),
('neo', 'matrix123', 0, '2023-05-07', '1999-03-31', '2023-01-07', 'Neo (The Matrix)', 'local', '/images/neo.jpg', 'https://example.com/neo.jpg', 'Premium', 1, 'neo@thematrix.com', 'Destiny is not something we''ve invented, it''s something we''ve found.', '''Do you believe in fate, Neo?''  ''No.''  ''Why not?''  ''I don''t like the idea that I''m not in control of my life.'''),
('darth_vader', 'empire456', 0, '2023-05-08', '7-05-25', '2023-01-08', 'Darth Vader (Star Wars)', 'local', '/images/darthvader.jpg', 'https://example.com/darth_vader.jpg', 'Free', 2, 'vader@empire.com', 'I find your lack of faith disturbing.', 'When I left you, I was but the learner.  Now I am the master.');

INSERT INTO themes (theme_name, theme_display_size, theme_show_badges, theme_palette, theme_font, theme_text_color, theme_text_size, theme_background, user_id)
VALUES
('Fall Theme', 'Medium', true, 'Orange', 'Arial', 'Black', 'Medium', 'Brown', 1),
('Winter Theme', 'Large', false, 'Blue', 'Verdana', 'White', 'Large', 'White', 1),
('Spring Theme', 'Small', true, 'Green', 'Tahoma', 'Black', 'Small', 'Light Green', 2);

INSERT INTO badges (badge_name, badge_description, badge_image_local)
VALUES
('Courage Badge', 'Courage!', '/images/courage_badge.png'),
('Sonic Badge', 'Gotta go fast!', '/images/sonic_badge.jpg'),
('Wile E. Coyote Badge', 'I am a genius by trade.', '/images/coyote_badge.png'),
('Luffy Badge', 'Aren''t we friends?', '/images/luffy_badge.jpg');

INSERT INTO jas_users_badges (user_id, badge_id, jas_user_badge_display, jas_user_badge_image_type, jas_user_badge_image_url, jas_user_badge_for, jas_user_badge_date)
VALUES
(1, 1, true, 'local', 'https://example.com/courage_badge.png', 'Persistence 2020 Campaign', '2023-05-01'),
(1, 1, false, 'local', 'https://example.com/courage_badge.png', 'Persistence 2020 Tournament Final Four', '2023-05-02'),
(1, 1, true, 'url', 'https://example.com/courage_badge.png', 'Persistence 2022 Invitational', '2023-05-03'),
(1, 3, true, 'local', 'https://example.com/coyote_badge.png', 'Calculated Odds 2023 All Stars', '2023-05-04'),
(2, 4, true, 'local', 'https://example.com/luffy_badge.jpg', '20 Friends 2023 January 14', '2023-05-05'),
(3, 1, true, 'local', 'https://example.com/courage_badge.png', 'Persistence 2022 Campaign', '2023-05-06'),
(3, 2, true, 'local', 'https://example.com/sonic_badge.jpg', 'Fast Game 2023 January 12', '2023-05-07'),
(3, 3, true, 'local', 'https://example.com/coyote_badge.png', 'Calculated Odds', '2023-05-08'),
(4, 1, true, 'local', 'https://example.com/courage_badge.png', 'Persistence', '2023-05-09'),
(4, 4, true, 'local', 'https://example.com/luffy_badge.jpg', '20 Friends', '2023-05-10'),
(5, 2, true, 'local', 'https://example.com/sonic_badge.jpg', 'Fast Game', '2023-05-11'),
(5, 3, true, 'local', 'https://example.com/coyote_badge.png', 'Calculated Odds', '2023-05-12'),
(6, 1, true, 'local', 'https://example.com/courage_badge.png', 'Persistence', '2023-05-13');