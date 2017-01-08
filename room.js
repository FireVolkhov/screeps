var api = require("api");

module.exports = {
	run: function(){
		if (Memory.rooms) {
			var rooms = api.getRooms();

			for (var name in Memory.rooms) {
				var memory = Memory.rooms[name];

				if (memory.state === 'new') {
					var room_new = require("room_new");
					room_new.run(rooms[name], memory);
				}
			}
		}
	},

	createOne: function(emptyCreeps, spawns, blocks, memory){
		if (emptyCreeps.length > 0) {
			Memory.creeps[emptyCreeps[0].name] = memory;
			return true;
		}

		var created = false;

		spawns.forEach(function(s){
			var created = api.createCreep(s, blocks, memory);
			return !created;
		});

		return created;
	},

	createWallMap: function(room, memory) {
		var map = [];
		var result = room.lookAtArea(0, 0, 49, 49);

		for (var x in result) {
			var xMap = [];

			for (var y in result[x]) {
				var val = result[x][y];

				val.forEach(function(v){
					if (v.type === "terrain") {
						if (v.terrain === "wall") {
							xMap.push("w");
						} else {
							xMap.push(" ");
						}
						return false;
					}
				});
			}

			map.push(xMap.join(""));
		}

		return map;
	},

	checkAdjacentPos: function(wallMap, checkedPos, pos, needCheckPoss) {
		var poss = [
			{x: pos.x - 1, y: pos.y - 1},
			{x: pos.x - 1, y: pos.y + 1},
			{x: pos.x + 1, y: pos.y + 1},
			{x: pos.x + 1, y: pos.y - 1}
		];

		return poss.filter(function(p){
			return p.x > -1 && p.x < 50 && p.y > -1 && p.y < 50 &&
					wallMap[p.x][p.y] !== "w" &&
					!~checkedPos.indexOf(p.x + ":" + p.y) &&
					!needCheckPoss.find(function(ncp){ return ncp.x === p.x && ncp.y === p.y });
		});
	},

	findPosition: function(room, memory, startPos, count) {
		var wallMap = memory.wall_map;
		var builds = [];
		var checkedPos = [startPos.x + ":" + startPos.y];
		var needCheckPoss = [startPos];

		if (builds.length >= count) {
			return builds;
		}

		while(needCheckPoss.length) {
			var needCheckPos = needCheckPoss.shift();
			needCheckPoss = needCheckPoss.concat(this.checkAdjacentPos(wallMap, checkedPos, needCheckPos, needCheckPoss));
			builds.push(needCheckPos);
			checkedPos.push(needCheckPos.x + ":" + needCheckPos.y);

			if (builds.length >= count) {
				break;
			}
		}

		if (builds.length < count) {
			console.log("Fatal in `room.findPosition`", new Error().stack);
		}

		return builds;
	},

	createBuildPlan: function(room, memory, pos, modules, data) {
		var postions = this.findPosition(room, memory, pos, modules.length);
		api.log(postions);

		data.builds = postions.map(function(p, i) {
			return {x: p.x, y: p.y, type: modules[i]};
		});

		data.builds = data.builds.filter(function(x){
			return x.type;
		});

		return data;
	},

	createEnergyCont: function(room, energy, target){
		var poss = energy.map(function(x){
			var path = room.findPath(x.pos, target.pos, {
				ignoreCreeps: true,
				ignoreDestructibleStructures: true,
				ignoreRoads: true,
				maxRooms: 1
			});

			return path[0];
		});

		return poss.map(function(p, i) {
			return {x: p.x, y: p.y, type: STRUCTURE_CONTAINER};
		});
	}
};
