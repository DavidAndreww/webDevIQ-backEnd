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
(2, 'JavaScript', 'What is the result of: 5 + 5 + "7"?', '107', '17, 10, 557, 107', 'https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Math, https://www.youtube.com/watch?v=9Q8BAZffbz8'),
(3, 'JavaScript', 'Explain parseInt()', 'String method that returns all integers in the string', 'Number method that checks number and returns a boolean, Number method that combines two integers, String method that returns all integers in the string, Math method that turns an integer into a string', 'https://www.bitdegree.org/learn/javascript-parseint, https://www.youtube.com/watch?v=OXpTBQtL4nY'),
(43, 'React' 'What is JSX?', 'JSX is shorthand for JavaScript XML', 'JSX is shorthand for JavaScript XML, Shorthand for JavaScript Styling Exponents, Pulls HTML into the React application, Stands for JavaScript Styling Exponents', 'https://reactjs.org/docs/introducing-jsx.html, https://www.youtube.com/watch?v=9GtB5G2xGTY'),
(46, 'React', 'What are 3 of the lifecycle methods?', 'componentDidMount(), componentDidUpdate(), componentWillMount()', 'componentDidMount(), componentDidUpdate(), componentWillMount(); componentDidRender(), componentWillRender(), componentWillMount(); componentOnRender(), componentWillRender(), componentWillMount()', 'N/A');