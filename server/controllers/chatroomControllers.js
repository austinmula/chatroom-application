const Chatroom = require('../model/Chatroom');

// create a chatroom
exports.createRoom = async (req, res) => {
  const { name, description } = req.body;
  // Get current user from auth middleware and add them to members array

  const newchatroom = new Chatroom({
    name: name,
    description: description,
    members: [req.user],
  });

  try {
    // make post req to db
    const savedroom = await newchatroom.save();
    res.json(savedroom);
  } catch (error) {
    console.log(error);
  }
};

// Join chatroom
exports.joinRoom = async (req, res) => {
  try {
    // get id from auth middleware
    // check if already a member
    // get chatroom id from params
    // add id to members array
  } catch (error) {
    console.log(error);
  }
};

// delete a chatroom
