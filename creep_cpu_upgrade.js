var Creep = require("creep");

module.exports = {
	run: function(creep, memory) {
		if (!memory.inter_state) {
			memory.inter_state = "go_mind";
			memory.target = null;
		}

		if (memory.inter_state === "go_mind") {
			if (creep.carry.energy >= creep.carryCapacity) {
				memory.inter_state = "go_controller";
				memory.target = null;
				return;
			}

			Creep.mindEnergy(creep, memory);
		}

		if (memory.inter_state === "go_controller") {
			if (creep.carry.energy <= 0) {
				memory.inter_state = "go_mind";
				memory.target = null;
				return;
			}

			Creep.upgrade(creep, memory);
		}
	}
};
