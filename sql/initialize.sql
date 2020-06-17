DROP TABLE IF EXISTS users, reactQuestions, ReduxQuestions, vanillaJSQuestions;

CREATE TABLE users(
    id INT NOT NULL AUTO_INCREMENT,
    username VARCHAR(255),
    email VARCHAR(255),
    _password VARCHAR(255,
    attempts INT NOT NULL,
    correctAttempts INT NOT NULL,
    corectQuestions VARCHAR(255),
    PRIMARY KEY (id)
);

CREATE TABLE reactQuestions (
    id INTO NOT NULL,
    question VARCHAR(255),
    options VARCHAR(1000),
    answer VARCHAR(255),
    resources VARCHAR(255),
    PRIMARY KEY (id)
    ON DELETE CASCADE
);

CREATE TABLE reduxQuestions (
    id INTO NOT NULL,
    question VARCHAR(255),
    options VARCHAR(1000),
    answer VARCHAR(255),
    resources VARCHAR(255),
    PRIMARY KEY (id)
    ON DELETE CASCADE
);

CREATE TABLE vanillaJSQuestions (
    id INTO NOT NULL,
    question VARCHAR(255),
    options VARCHAR(1000),
    answer VARCHAR(255),
    resources VARCHAR(255),
    PRIMARY KEY (id)
    ON DELETE CASCADE
);