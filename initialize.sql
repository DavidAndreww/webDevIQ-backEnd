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
    (id, genre, question, answer, options, resources)
VALUES
(1, 'JavaScript', 'What is the result of: 5 + 5 + "7"?', '107', '17, 10, 557, 107', 'https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Math, https://www.youtube.com/watch?v=9Q8BAZffbz8'),
(2, 'JavaScript', 'Explain parseInt()', 'String method that returns all integers in the string', 'Number method that checks number and returns a boolean, Number method that combines two integers, String method that returns all integers in the string, Math method that turns an integer into a string', 'https://www.bitdegree.org/learn/javascript-parseint, https://www.youtube.com/watch?v=OXpTBQtL4nY');