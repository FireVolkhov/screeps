var api = require("api");
var Creep = require("creep");

module.exports = {
	run: function(creep, memory) {
		if (!memory.inter_state) {
			memory.inter_state = "go_mind";
			memory.target = null;
		}

		if (memory.inter_state === "go_mind") {
			if (creep.carry.energy >= creep.carryCapacity) {
				memory.inter_state = "go_store";
				memory.target = null;
				return;
			}

			Creep.mindEnergy(creep, memory);
		}

		if (memory.inter_state === "go_store") {
			if (creep.carry.energy <= 0) {
				memory.inter_state = "go_mind";
				memory.target = null;
				return;
			}

			Creep.transferToStore(creep, memory);
		}
	}
};