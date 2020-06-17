const data = [
    {
        id: 1,
        genre: "Javascript",
        question: 'What is a boolean',
        answer: 'True or False value',
        options: ['Lion that will scare you', 'Hurts your eyes, similar to an onion', 'Makes your soup broth taste like beef or chicken', 'True or False value'],
        resource: 'http://www.google.com'
    },
    {
        id: 2,
        genre: "Javascript",
        question: 'What is an arrow function?',
        answer: 'it is fat, and looks like an arrow',
        options: ['Robinhood created it', 'It can kill you', 'It is British for "hello"', 'it is fat, and looks like an arrow'],
        resource: 'http://www.google.com'
    },
]

const users = [
    {
        userId: 1, 
        totalAttempts: 251, 
        correctAttempts: 179,
        correctlyAnswered: [1, 13, 25, 27] // individual question IDs
    }
]

module.exports = { data, users }