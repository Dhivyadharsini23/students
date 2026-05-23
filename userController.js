const users = require('../models/usermodel');

// GET all users
const getUser = (req, res) => {
    res.json(users);
};

// POST create user
const createUser = (req, res) => {

    const { id, name, age, course } = req.body;

    const newUser = {
        id,
        name,
        age,
        course
    };

    users.push(newUser);

    res.json({
        message: "User Added Successfully",
        users
    });
};

// PUT update user
const updateUser = (req, res) => {

    const id = parseInt(req.params.id);

    const user = users.find(u => u.id === id);

    if (!user) {
        return res.status(404).json({
            message: "User Not Found"
        });
    }

    user.name = req.body.name || user.name;
    user.age = req.body.age || user.age;
    user.course = req.body.course || user.course;

    res.json({
        message: "User Updated Successfully",
        users
    });
};

// DELETE user
const deleteUser = (req, res) => {

    const id = parseInt(req.params.id);

    const index = users.findIndex(u => u.id === id);

    if (index === -1) {
        return res.status(404).json({
            message: "User Not Found"
        });
    }

    users.splice(index, 1);

    res.json({
        message: "User Deleted Successfully",
        users
    });
};

module.exports = {
    getUser,
    createUser,
    updateUser,
    deleteUser
};