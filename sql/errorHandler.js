const sqlErrorHandler = (res, err) => {
    console.log('SQL Error: ', err);
    return res.status(500).send('Unexpected error occurred');
}

module.exports = sqlErrorHandler;