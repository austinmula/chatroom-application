const Message = require('../model/Message');

exports.createMessage = async (req, res) => {
  try {
    const { sentBy, chatroomId, content } = req.body;
    const newMessage = new Message({ sentBy, chatroomId, content });

    const savedMessage = await newMessage.save();
    res.status(200).json(savedMessage);
  } catch (error) {
    console.log(error);
    res.status(500);
  }
};

//get messages from chatroom
exports.getMessages = async (req, res) => {
  try {
    const messages = await Message.find({
      chatroomId: req.params.chatroomId,
    });
    res.status(200).json(messages);
  } catch (err) {
    res.status(500).json(err);
  }
};
