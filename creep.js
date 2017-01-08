var api = require("api");

module.exports = {
	run: function(){
		var creeps = api.getCreeps();

		for (var name in creeps) {
			var creep = creeps[name];
			var memory = Memory.creeps[name];

			if (creep && memory.isCreating) {
				delete memory.isCreating;
			}

			if (memory.inter_state === "go_to") {
				var target = api.getById(memory.go_to_target);

				if (api.dist(target.pos, creep.pos) < 15) {
					memory.inter_state = memory.old_inter_state;
					delete memory.old_inter_state;
					delete memory.go_to_target;

				} else {
					var error = creep.moveTo(target);
					console.log("creep.moveTo error:", error);
				}
				continue;
			}

			if (memory.state === "energy") {
				require("creep_energy").run(creep, memory);
				continue;
			}

			if (memory.state === "cpu_upgrade") {
				require("creep_cpu_upgrade").run(creep, memory);
				continue;
			}

			if (memory.state === "builder") {
				require("creep_builder").run(creep, memory);
				continue;
			}
		}
	},

	mindEnergy: function(creep, memory) {
		var target;
		var error;

		if (!memory.target) {
			var energy = creep.room.find(FIND_SOURCES);
			var targets = energy.map(function(e){
				return {
					raw: e,
					energy: e.energy,
					dist: api.dist(e.pos, creep.pos)
				};
			});
			targets = targets.sort(function(a, b){
				if (b.energy > 0 && b.dist < a.dist) {
					return 1;
				} else if (a.energy > 0 && a.dist < b.dist) {
					return -1;
				} else {
					return 0;
				}
			});

			target = targets[0];
			memory.target = target.raw.id;
			target = target.raw;
		}

		if (!target) {
			target = api.getById(memory.target);
		}

		error = creep.harvest(target);

		if(error === OK || error === ERR_BUSY) {
			return;
		}

		if(error === ERR_NOT_IN_RANGE) {
			creep.moveTo(target);
			return;
		}

		if (error === ERR_INVALID_TARGET) {
			memory.target = null;
			return;
		}

		console.log('creep.harvest error: ', error);
	},


	transferToStore: function(creep, memory) {
		var target;
		var error;

		if (!memory.target) {
			var spawns = creep.room.find(FIND_MY_SPAWNS);
			spawns = spawns.sort(function (a, b) {
				if (a.energy > b.energy) {
					return 1;
				} else if (a.energy < b.energy) {
					return -1;
				} else {
					return 0;
				}
			});

			target = spawns[0];
			memory.target = spawns[0].id;
		}

		if (!target) {
			target = api.getById(memory.target);
		}

		error = creep.transfer(target, RESOURCE_ENERGY);

		if(error === OK || error === ERR_BUSY) {
			return;
		}

		if (error === ERR_INVALID_TARGET) {
			memory.target = null;
			return;
		}

		if (error === ERR_NOT_IN_RANGE) {
			creep.moveTo(target);
			return;
		}

		if (error === ERR_FULL) {
			//Найти другое хранилище
		}

		console.log('creep.transfer error: ', error);
	},


	upgrade: function(creep, memory){
		var target;
		var error;

		if (!memory.target) {
			target = creep.room.controller;
			memory.target = creep.room.controller.id;
		}

		if (!target) {
			target = api.getById(memory.target);
		}

		error = creep.upgradeController(target);

		if(error === OK) {
			return;
		}

		if (error === ERR_INVALID_TARGET) {
			memory.target = null;
			return;
		}

		if (error === ERR_NOT_IN_RANGE) {
			creep.moveTo(target);
			return;
		}

		console.log('creep.upgradeController error: ', error);
	},


	build: function(creep, memory, targets) {
		var target;
		var error;

		var posCreep = creep.pos;

		targets = targets.map(function(x){
			return {
				dist: api.dist(posCreep, x.pos),
				target: x
			}
		});

		targets = targets.sort(function(a, b){
			if (a.dist > b.dist) {
				return 1;
			} else if (a.dist < b.dist) {
				return -1;
			} else {
				return 0;
			}
		});

		target = targets[0].target;
		error = creep.build(target);

		if(error === OK) {
			return;
		}

		if (error === ERR_INVALID_TARGET) {
			memory.target = null;
			return;
		}

		if (error === ERR_NOT_IN_RANGE) {
			creep.moveTo(target);
			return;
		}

		console.log('creep.upgradeController error: ', error);
	},


	goTo: function(creep, memory, target) {
		memory.old_inter_state = memory.inter_state;
		memory.inter_state = "go_to";
		memory.go_to_target = target.id;

		//console.log(api.dist(target.pos, creep.pos));
		//creep.moveTo(target);
	}
};
