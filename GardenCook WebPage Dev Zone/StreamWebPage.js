var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);
var mysql = require('mysql');
var connection = mysql.createConnection({
  host: 'localhost',
  port: 4002,
  user: 'bence',
  password: 'aQ1sW2dE3',
  timezone: "Z"
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/indexHome.html');
});

app.get('/BasXStyle.css', (req, res) => {
  res.sendFile(__dirname + '/BasXStyle.css');
});

//app.get('/ukulele.jpg', (req, res) => {
//  res.sendFile(__dirname + '/images/ukulele.jpg');
//});

//app.get('/hey.mp3', (req, res) => {
//  res.sendFile(__dirname + '/songs/hey.mp3');
//});


io.on('connection', (socket) => {
  console.log(socket.conn.id);
  console.log(socket.conn.remoteAddress);
});

http.listen(3001, () => {
  console.log('listening on *:3001');
});