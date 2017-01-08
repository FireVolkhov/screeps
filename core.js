var api = require("api");

module.exports = {
	run: function() {
		var rooms = api.getRooms();
		var countRooms = 0;

		if (!Memory.rooms) {
			Memory.rooms = {};
		}

		for (var name in rooms) {
			countRooms++;
		}

		for (var name in rooms) {
			var room = rooms[name];

			if (!Memory.rooms[name]) {
				Memory.rooms[name] = {};
			}

			if (!Memory.rooms[name].state) {
				Memory.rooms[name].state = 'new';
			}
		}
	}
};
