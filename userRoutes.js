const express = require('express');

const router = express.Router();

const {
    getUser,
    createUser,
    updateUser,
    deleteUser
} = require('../controllers/userController');

router.get('/', getUser);

router.post('/', createUser);

router.put('/:id', updateUser);

router.delete('/:id', deleteUser);

module.exports = router;