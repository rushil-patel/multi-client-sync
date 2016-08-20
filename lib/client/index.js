() => {

	const service = {};
	var offsets = [];
	var socket;

	service.init = (socket, options) => {
		
		this.socket = socket;
		socket.on("lapse_server", on_lapse)
	}
}()
