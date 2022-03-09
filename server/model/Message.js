const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema(
  {
    sentBy: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
    chatroomId: {
      type: String,
      required: true,
    },
    content: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Message', messageSchema);
