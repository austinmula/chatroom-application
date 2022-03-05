const router = require('express').Router();

const { createRoom, joinRoom } = require('../controllers/chatroomControllers');

const { authorize } = require('../middleware/authorization');

router.post('/create', authorize, createRoom);
router.put('/:roomId', joinRoom);

module.exports = router;
