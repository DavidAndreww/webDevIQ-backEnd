const login = (req, res) => {
    const { name, email } = req.body;
    res.send(`user ${name} logged in successfully`)
}

const signup = (req, res) => {
    const { name, email } = req.body;
    res.json({ newUser: { name: name, email: email } })
}

module.exports = { login, signup }