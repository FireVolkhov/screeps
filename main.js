var core = require("core");
var room = require("room");
var creep = require("creep");

global.VERSION = "0.0.5";

module.exports = {
	loop: function() {
		core.run();
		room.run();
		creep.run();

		Memory.version = global.VERSION;
	}
};
