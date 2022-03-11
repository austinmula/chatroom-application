const io = require('socket.io')(3001, {
  cors: {
    origin: 'http://localhost:3000',
  },
});

// connect and disconnect
io.on('connection', (socket) => {
  console.log(`user of id ${socket.id} connected`);

  socket.on('joinroom', (data) => {
    socket.join(data);
    console.log(`user of id ${socket.id} joined room ${data}`);
  });

  socket.on('sendmessage', (data) => {
    // receive msg from client
    console.log(data); // this contains roomId, senderid and name, msg content
    // send msg to the chatroom
    socket.to(data.chatroomId).emit('receivemessage', data);
  });

  io.on('disconnect', (socket) => {
    console.log(`user of id ${socket.id} disconnected`);
  });
});
