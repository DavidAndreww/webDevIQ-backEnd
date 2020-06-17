const { users } = require('../dummyData')
const login = (req, res) => {
    const { id, name, email } = req.body;
    console.log(id)
    let user = users.find(user => user.userId === id)
    console.log(user)
    res.json({loggedIn: user})
}

const signup = (req, res) => {
    const { name, email } = req.body;
    res.json({ newUser: { name: name, email: email } })
}

module.exports = { login, signup }