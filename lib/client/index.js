(root => {

	const service = {};
	var offsets = [];
	var socket;

	service.init = (s, options) => {
		
		socket = s;
		socket.on("time_sync", onTimeSync)
		sync()
	}

	const onTimeSync = (tPack) => {
		tPack.t3 = Date.now()
		var theta = (tPack.t1 - tPack.t0 + tPack.t2 - tPack.t3) / 2
		var diff = (tPack.t3 - tPack.t0) - (tPack.t2 - tPack.t0)
		console.log(theta + " " + diff)
	}

	const sync = () => {
		socket.emit("start_sync", { t0: Date.now() });
		setTimeout(sync, 5000);
	}

	if (typeof define === 'function' && define.amd) {
		define('service', [], () => service );
	} else {
		root.service = service;
	}

})(window)
