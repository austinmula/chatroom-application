const router = require('express').Router();

const {
  createMessage,
  getMessages,
} = require('../controllers/messageControllers');

const { authorize } = require('../middleware/authorization');

router.post('/create', authorize, createMessage);
router.get('/:chatroomId', authorize, getMessages);

module.exports = router;
