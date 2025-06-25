CREATE TABLE user
(
    userID     VARCHAR(36) NOT NULL DEFAULT (UUID()) PRIMARY KEY,
    picture    VARCHAR(255),
    firstname  VARCHAR(100),
    lastname   VARCHAR(100),
    username   VARCHAR(100) UNIQUE,
    password   VARCHAR(255),
    role       ENUM('user', 'admin') DEFAULT 'user',
    preferences ENUM('Vegetarisch','Glutenfrei','Keto','Rohkost','Vegan','Fleisch','Kalorienarm','Fisch','Keine Angabe') DEFAULT 'Keine Angabe',
    is_deleted BOOLEAN DEFAULT 0
);

CREATE TABLE user_favorite
(
    userID   VARCHAR(36),
    recipeID VARCHAR(24),
    PRIMARY KEY (userID, recipeID),
    FOREIGN KEY (userID) REFERENCES user (userID) ON DELETE CASCADE
);

CREATE TABLE comments_ratings
(
    commentID  INT AUTO_INCREMENT PRIMARY KEY,
    userID     VARCHAR(36),
    recipeID   VARCHAR(24),
    rating     INT,
    comment    TEXT,
    created_at TIMESTAMP NOT NULL,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (userID) REFERENCES user (userID) ON DELETE CASCADE
);

INSERT INTO user (userID, picture, firstname, lastname, username, password, role, preferences)
VALUES
    ('11111111-aaaa-bbbb-cccc-111111111111', 'character_6.png', 'John', 'Wick', 'admin', '$2b$10$K1NaagcnclmC2nKQ8ZvGyezBF0sc9v1MXRyx0L/2VUYEniL0vTtw.', 'admin', 'Vegan'),
    ('22222222-aaaa-bbbb-cccc-222222222222', 'character_5.png', 'Jonas', 'Schmidt', 'test', '$2b$10$K1NaagcnclmC2nKQ8ZvGyezBF0sc9v1MXRyx0L/2VUYEniL0vTtw.', 'user', 'Fleisch')
