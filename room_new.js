var api = require("api");
var role = {
	builders: {
		level1: [WORK, WORK, CARRY, MOVE]
	},
	workers: {
		level1: [WORK, CARRY, CARRY, MOVE, MOVE]
	}
};

var buildPlan = {
	level2: [STRUCTURE_SPAWN, null, null, null, STRUCTURE_EXTENSION, STRUCTURE_EXTENSION, STRUCTURE_EXTENSION, STRUCTURE_EXTENSION, STRUCTURE_EXTENSION]
};

module.exports = {
	run: function(room, memory){
		var buildPlanLvl1 = "l1v5";
		var buildPlanLvl2 = "l2v3";

		var roomM = require("room");

		if (!Memory.creeps) {
			Memory.creeps = {};
		}

		var myCreeps = api.getCreeps();
		var creeps = room.find(FIND_MY_CREEPS);
		var energy = room.find(FIND_SOURCES);
		var spawns = room.find(FIND_MY_SPAWNS);
		var freeSpanws = spawns.filter(function(x){
			return !x.spawning;
		});

		var emptyCreeps = [];
		var harvesterCreeps = [];
		var cpuUpgradeCreeps = [];
		var builderCreeps = [];

		creeps.forEach(function(c){
			if (!Memory.creeps[c.name]) {
				Memory.creeps[c.name] = {};
			}

			if (!Memory.creeps[c.name].state) {
				emptyCreeps.push(c);
			} else if (Memory.creeps[c.name].state === "energy") {
				harvesterCreeps.push(c);
			} else if (Memory.creeps[c.name].state === "cpu_upgrade") {
				cpuUpgradeCreeps.push(c);
			} else if (Memory.creeps[c.name].state === "builder") {
				builderCreeps.push(c);
			}
		});

		for (var name in Memory.creeps) {
			if (!Memory.creeps[name].isCreating && !myCreeps[name]) {
				delete Memory.creeps[name];
			}
		}


		if (!memory.wall_map || Memory.version !== VERSION) {
			memory.wall_map = roomM.createWallMap(room, memory);
			return
		}

		if (freeSpanws.length) {
			if (harvesterCreeps.length < energy.length) {
				roomM.createOne(emptyCreeps, spawns, role.workers.level1, {state: "energy"});
				return
			}

			if (cpuUpgradeCreeps.length < 2) {
				roomM.createOne(emptyCreeps, spawns, role.workers.level1, {state: "cpu_upgrade"});
				return
			}

			if (builderCreeps.length < 2) {
				roomM.createOne(emptyCreeps, spawns, role.builders.level1, {state: "builder"});
				return
			}
		}


		if (memory.build_plan) {
			var build = memory.build_plan.builds;

			var sites = room.find(FIND_CONSTRUCTION_SITES);
			sites.forEach(function(s){
				if (s.structureType === STRUCTURE_SPAWN || s.structureType === STRUCTURE_CONTROLLER) {
					return;
				}

				var found = build.find(function(b){ return b.x === s.pos.x && b.y === s.pos.y });

				if (!found || s.structureType !== found.type) {
					s.remove();
				}
			});

			var structures = room.find(FIND_STRUCTURES);
			structures.forEach(function(s){
				if (s.structureType === STRUCTURE_SPAWN || s.structureType === STRUCTURE_CONTROLLER) {
					return;
				}

				var found = build.find(function(b){ return b.x === s.pos.x && b.y === s.pos.y });

				if (!found || s.structureType !== found.type) {
					s.destroy();
				}
			});

			memory.build_plan.builds.forEach(function(newBuild){
				var result = room.lookAt(newBuild.x, newBuild.y);
				result = result.find(function(x){
					return x.type === "structure" || x.type === "constructionSite";
				});

				if (!result) {
					var error = room.createConstructionSite(newBuild.x, newBuild.y, newBuild.type);

					if (error === ERR_INVALID_TARGET) {
						api.log("Can not build in room `" + room.name + "` on `" + newBuild.x + ":" + newBuild.y + "` ");
					}
				}
			});
		}

		if (room.controller.level < 1) {
			return;
		}

		if (!memory.build_plan || (memory.build_plan.level === 1 && memory.build_plan.version !== buildPlanLvl1)) {
			var builds = roomM.createEnergyCont(room, energy, spawns[0]);

			builds.push({
				x: spawns[0].pos.x,
				y: spawns[0].pos.y,
				type: STRUCTURE_SPAWN
			});

			memory.build_plan = {
				level: 1,
				version: buildPlanLvl1,
				builds: builds
			};
			return
		}

		if (room.controller.level < 2) {
			return;
		}

		if (!memory.build_plan || (memory.build_plan.level === 2 && memory.build_plan.version !== buildPlanLvl2)) {
			var builds = roomM.createEnergyCont(room, energy, spawns[0]);
			var build_plan = roomM.createBuildPlan(room, memory, spawns[0].pos, buildPlan.level2, {level: 2, version: buildPlanLvl2});
			build_plan.builds = build_plan.builds.concat(builds);
			memory.build_plan = build_plan;
			return
		}
	}
};
