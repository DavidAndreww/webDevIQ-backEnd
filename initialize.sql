DROP TABLE IF EXISTS users, questions

CREATE TABLE users (
    id INT NOT NULL AUTO_INCREMENT, 
    username VARCHAR(255),
    email VARCHAR(255),
    _password VARCHAR(255),
    totalAttempts INT, 
    correctAttempts INT,
    correctlyAnswered INT,
    questionPref VARCHAR(255)
    PRIMARY KEY (id)
);

CREATE TABLE questions (
    id INT,
    genre VARCHAR(255),
    question VARCHAR(255),
    options VARCHAR(1000),
    answer VARCHAR(255),
    resources VARCHAR(255)
);

INSERT INTO questions
    (id, genre, question, options, answer, resources)
VALUES
(1, 'JavaScript', 'What is the result of: 5 + 5 + "7"?', '17, 10, 557, 107', '107', 'https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Math, https://www.youtube.com/watch?v=9Q8BAZffbz8'),