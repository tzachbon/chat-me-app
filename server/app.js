const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const headers = require('./util/header.util');
const userRoutes = require('./routes/user.routes');
const groupRoutes = require('./routes/group.routes');
const imageRoutes = require('./routes/image.routes');
const path = require('path');

const app = express();
app.use(bodyParser.json({ limit: '10mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }));
app.use(headers);

app.use('/api/v1/user', userRoutes);
app.use('/api/v1/group', groupRoutes);
app.use('/api/v1/image', imageRoutes);
app.use('/', express.static(path.join(__dirname, 'frontend')));
app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, 'frontend', 'index.html'));
});

const port = process.env.PORT || 8080;
const PASSWORD = '7412365';
const URI = `mongodb+srv://tzachb:${PASSWORD}@chatmeapp-ndy1b.mongodb.net/chat`;

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
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
