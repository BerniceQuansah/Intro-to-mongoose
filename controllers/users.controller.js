const getUsers = (req, res) => {
    res.status(200).send("Get All Users filtered by")
};

const getUser = (req, res) => {
    res.status(200).send("Get All User filtered by")
};

const createUser = (req, res) => {
    res.status(200).send("Create All User filtered by")
};

const updateUser = (req, res) => {
    res.status(200).send("Update All User filtered by")
};

const deleteUser = (req, res) => {
    res.status(200).send("delete All User filtered by")
};

    module.exports = {
        getUsers,
        getUser,
        createUser,
        updateUser,
        deleteUser,
    };