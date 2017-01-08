module.exports = {
	getSpawns: function(){
		return Game.spawns;
	},
	getCreeps: function(){
		return Game.creeps;
	},
	getCPULimit: function(){
		return Game.cpuLimit;
	},
	getCPUUsed: function(){
		return Game.getUsedCpu;
	},
	getTime: function(){
		return Game.time;
	},
	getRooms: function() {
		return Game.rooms
	},
	getById: function(id){
		return Game.getObjectById(id);
	},

	createCreep: function(spawn, modules, memory){
		var name = "Creep_" + this.getName();

		if (!memory) {
			memory = {};
		}

		memory.isCreating = true;

		if (spawn.canCreateCreep(modules, name) === OK) {
			spawn.createCreep(modules, name);
			Memory.creeps[name] = memory;

			return true;
		}

		return false;
	},

	getName: function(){
		if (!Memory.uniq) {
			Memory.uniq = 0;
		}

		var name = Memory.uniq + "_" + new Date().getTime();
		Memory.uniq++;

		return name;
	},

	dist: function(pos1, pos2) {
		var x = pos1.x - pos2.x;
		var y = pos1.y - pos2.y;

		return x * x + y * y;
	},

	log: function(d) {
		console.log(JSON.stringify(d));
	}
};
