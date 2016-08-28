import http from 'http'
import express from 'express'
import socketio from 'socket.io'

var app = express(),
	server = http.createServer(app),
	io = socketio.listen(server);

app.use(express.static(__dirname));
app.use("/scripts", express.static('/scripts'));

io.sockets.on('connection', (socket) => {
	socket.on("start_sync", (timeState) => {
		timeState.t1 = Date.now()
		timeState.t2 = Date.now()
		socket.emit("time_sync", timeState)
	})
});

server.listen(3000);
app.get('/client', (req, res) => {
	res.sendFile(__dirname + "/client/index.html")
})
console.log('Server running on port 3000');