var Creep = require("creep");

module.exports = {
	run: function(creep, memory) {
		if (!memory.inter_state) {
			memory.inter_state = "go_mind";
			memory.target = null;
		}

		if (memory.inter_state === "go_mind") {
			if (creep.carry.energy >= creep.carryCapacity) {
				memory.inter_state = "go_build";
				memory.target = null;
				return;
			}

			Creep.mindEnergy(creep, memory);
		}

		if (memory.inter_state === "go_build") {
			if (creep.carry.energy <= 0) {
				memory.inter_state = "go_mind";
				memory.target = null;
				return;
			}

			var targets = creep.room.find(FIND_CONSTRUCTION_SITES);

			if (targets.length) {
				Creep.build(creep, memory, targets);
				return;
			} else {
				var spawns = creep.room.find(FIND_MY_SPAWNS);
				Creep.goTo(creep, memory, spawns[0]);
				return;
			}
		}
	}
};
