const router = require('express').Router();

const {
  createRoom,
  joinRoom,
  myChatroom,
} = require('../controllers/chatroomControllers');

const { authorize } = require('../middleware/authorization');

router.post('/create', authorize, createRoom);
router.put('/:id', authorize, joinRoom);
router.get('/', authorize, myChatroom);

module.exports = router;
