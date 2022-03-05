const mongoose = require('mongoose');

mongoose
  .connect('mongodb://localhost:27017/chatroom')
  .then(() => console.log('Connected to DB successfully'))
  .catch((error) => console.log(error));
