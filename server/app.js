const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const headers = require('./util/header.util');
const userRoutes = require('./routes/user.routes');

const app = express();
app.use(bodyParser.json({ limit: '10mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }));
app.use(headers);

app.use('/api/v1/user', userRoutes);

const port = process.env.PORT || 8080;
const PASSWORD = '7412365';
const URI = `mongodb+srv://tzachb:${PASSWORD}@chatmeapp-ndy1b.mongodb.net/chat?retryWrites=true&w=majority`;

mongoose
  .connect(URI, { useNewUrlParser: true })
  .then(res => {
    console.log('Connected To The Database');

    const server = app.listen(port);
    const io = require('./util/socket.util').init(server);
    io.on('connection', socket => {
      console.log('a user connected');

      socket.on('disconnect', () => {
        console.log('a user disconnected');
      });
    });
  })
  .catch(error => {
    console.log(error);
  });
