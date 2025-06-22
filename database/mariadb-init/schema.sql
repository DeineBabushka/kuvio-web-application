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
    is_deleted BOOLEAN DEFAULT 0 -- um Soft Deletes zu ermöglichen , also nicht wirklich löschen, sondern als "gelöscht markieren"
);
-- Nuter kann sich nicht mehr einloggen und Admins können ihn später löschen

-- Notiz an mich: Enum verwendet, weil es auf erlaubte Rollen einschränkt!

CREATE TABLE deletion_requests
(
    requestID  INT AUTO_INCREMENT PRIMARY KEY,
    userID     VARCHAR(36),
    recipeID   VARCHAR(24),
    type       ENUM('account', 'recipe'),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (userID) REFERENCES user (userID)
);

-- Lösch-Anfrage: Wenn User die Löschung des Kontos/Rezepts anfragt, kann ich somit in einer zusätzlichen Tabelle speichern.
-- So könnte Admin sehen: User X will Rezept Y löschen und kann dies über Admin-Dashboard bestätigen.

CREATE TABLE user_favorite
(
    userID   VARCHAR(36),                                 -- Referenz auf User, dem Rezept gefällt
    recipeID VARCHAR(24),                         -- Die ID des Rezepts aus MongoDB, deshalb VARCHAR(24) – weil MongoDB ObjectIds immer 24 Zeichen lange Strings sind
    PRIMARY KEY (userID, recipeID),               -- Kombiniert beide -> Verhindert Verdopplung - User kann so Rezept nur 1x liken
    FOREIGN KEY (userID) REFERENCES user (userID) ON DELETE CASCADE -- userID mit User-Tabelle
);

-- Speichert Lieblingsrezepte der User

CREATE TABLE comments_ratings
(                                                 --
    commentID  INT AUTO_INCREMENT PRIMARY KEY,    -- ID fpr jeden Kommentar (eindeutig)
    userID     VARCHAR(36),                               -- Wer kommentar abgegeben hat
    recipeID   VARCHAR(24),                       -- Verweis auf MongoDB-Dokument
    rating     INT,                               -- z.B. 1-5 Sterne
    comment    TEXT,                              -- Kommentar an sich
    created_at TIMESTAMP NOT NULL,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (userID) REFERENCES user (userID) ON DELETE CASCADE -- userID, recipeID
);
-- Speichert kommentare und Bewertungen zu Rezepten