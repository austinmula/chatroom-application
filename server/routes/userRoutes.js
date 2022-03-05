const router = require('express').Router();

const { createUser, login } = require('../controllers/userControllers');
const { validateUser, validate } = require('../middleware/validator');

router.post('/register', validateUser, validate, createUser);
router.post('/login', login);

module.exports = router;
