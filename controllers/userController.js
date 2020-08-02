const pool = require("../sql/connection");
// SQL error handler
const { sqlErrorhandler } = require("../sql/errorHandler");

const signup = (req, res) => {
  const { name, email } = req.body;
  res.json({ newUser: { name: name, email: email } });
};

const login = (req, res) => {
  const { id, name, email } = req.body;
  console.log(id);
  console.log(user);
  res.json({ loggedIn: user });
};


// METHOD: PUT
// PATH: 'localhost:3030/update'
const updateAttempts = (req, res) => {
  const { totalAttempts, correctAttempts, id } = req.body;

  let updatedRows = {
    correctAttempts: correctAttempts,
    totalAttempts: totalAttempts,
  };
  pool.query(
    `UPDATE users SET totalAttempts = ${totalAttempts}, correctAttempts = ${correctAttempts} where id = ${id}`,
    (err, results) => {
      if (err) return sqlErrorHandler(res, err);
      res.send(updatedRows);
    }
  );
};

module.exports = { login, signup, updateAttempts };
