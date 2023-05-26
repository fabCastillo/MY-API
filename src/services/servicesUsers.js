const getUser = (req, res) => {
    res.status(200).json({
        "name":"Andres",
        "age": 27
    });
};

const getUserById = (req, res) => {
    const { id } = req.params;
    res.status(200).json({
        id,
        "name":"Andres",
        "age": 27
    });
};

module.exports = {
    getUser,
    getUserById
}