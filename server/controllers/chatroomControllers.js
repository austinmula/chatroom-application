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
    const chatroom = await Chatroom.findById(req.params.id);

    if (!chatroom) return res.status(404).json('Chatroom not found');

    // check if user is already in the room
    const found = chatroom.members.some((id) => id === req.user);

    if (found) return res.status(404).json('You are already in this chatroom');

    // add id to members array
    const newchatroom = await chatroom.updateOne({
      $push: { members: req.user },
    });

    if (newchatroom) return res.status(200).json('Room Joined successfuly');
  } catch (error) {
    res.status(500);
    console.log(error);
  }
};

// Fetch chatrooms i am a member in
exports.myChatroom = async (req, res) => {
  try {
    // find all chatrooms returning only those i am a member in
    const myChatrooms = await Chatroom.find({ members: req.user });
    res.json(myChatrooms);
  } catch (error) {
    res.status(500);
    console.log(error);
  }
};

// delete a chatroom

// Leave a chatroom

// fetch chatroom members
