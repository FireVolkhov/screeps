global.OK = 0;
global.ERR_NOT_OWNER = -1;
global.ERR_NO_PATH = -2;
global.ERR_NAME_EXISTS = -3;
global.ERR_BUSY = -4;
global.ERR_NOT_FOUND = -5;
global.ERR_NOT_ENOUGH_ENERGY = -6;
global.ERR_NOT_ENOUGH_RESOURCES = -6;
global.ERR_INVALID_TARGET = -7;
global.ERR_FULL = -8;
global.ERR_NOT_IN_RANGE = -9;
global.ERR_INVALID_ARGS = -10;
global.ERR_TIRED = -11;
global.ERR_NO_BODYPART = -12;
global.ERR_NOT_ENOUGH_EXTENSIONS = -6;
global.ERR_RCL_NOT_ENOUGH = -14;
global.ERR_GCL_NOT_ENOUGH = -15;

global.FIND_EXIT_TOP = 1;
global.FIND_EXIT_RIGHT = 3;
global.FIND_EXIT_BOTTOM = 5;
global.FIND_EXIT_LEFT = 7;
global.FIND_EXIT = 10;
global.FIND_CREEPS = 101;
global.FIND_MY_CREEPS = 102;
global.FIND_HOSTILE_CREEPS = 103;
global.FIND_SOURCES_ACTIVE = 104;
global.FIND_SOURCES = 105;
global.FIND_DROPPED_ENERGY = 106;
global.FIND_DROPPED_RESOURCES = 106;
global.FIND_STRUCTURES = 107;
global.FIND_MY_STRUCTURES = 108;
global.FIND_HOSTILE_STRUCTURES = 109;
global.FIND_FLAGS = 110;
global.FIND_CONSTRUCTION_SITES = 111;
global.FIND_MY_SPAWNS = 112;
global.FIND_HOSTILE_SPAWNS = 113;
global.FIND_MY_CONSTRUCTION_SITES = 114;
global.FIND_HOSTILE_CONSTRUCTION_SITES = 115;
global.FIND_MINERALS = 116;
global.FIND_NUKES = 117;

global.TOP = 1;
global.TOP_RIGHT = 2;
global.RIGHT = 3;
global.BOTTOM_RIGHT = 4;
global.BOTTOM = 5;
global.BOTTOM_LEFT = 6;
global.LEFT = 7;
global.TOP_LEFT = 8;

global.COLOR_RED = 1;
global.COLOR_PURPLE = 2;
global.COLOR_BLUE = 3;
global.COLOR_CYAN = 4;
global.COLOR_GREEN = 5;
global.COLOR_YELLOW = 6;
global.COLOR_ORANGE = 7;
global.COLOR_BROWN = 8;
global.COLOR_GREY = 9;
global.COLOR_WHITE = 10;

global.LOOK_CREEPS = "creep";
global.LOOK_ENERGY = "energy";
global.LOOK_RESOURCES = "resource";
global.LOOK_SOURCES = "source";
global.LOOK_MINERALS = "mineral";
global.LOOK_STRUCTURES = "structure";
global.LOOK_FLAGS = "flag";
global.LOOK_CONSTRUCTION_SITES = "constructionSite";
global.LOOK_NUKES = "nuke";
global.LOOK_TERRAIN = "terrain";

global.MOVE = "move";
global.WORK = "work";
global.CARRY = "carry";
global.ATTACK = "attack";
global.RANGED_ATTACK = "ranged_attack";
global.TOUGH = "tough";
global.HEAL = "heal";
global.CLAIM = "claim";

global.WORLD_WIDTH = 162;
global.WORLD_HEIGHT = 162;

global.CREEP_LIFE_TIME = 1500;
global.CREEP_CLAIM_LIFE_TIME = 500;
global.CREEP_CORPSE_RATE = 0.2;

global.CARRY_CAPACITY = 50;
global.HARVEST_POWER = 2;
global.HARVEST_MINERAL_POWER = 1;
global.REPAIR_POWER = 100;
global.DISMANTLE_POWER = 50;
global.BUILD_POWER = 5;
global.ATTACK_POWER = 30;
global.UPGRADE_CONTROLLER_POWER = 1;
global.RANGED_ATTACK_POWER = 10;
global.HEAL_POWER = 12;
global.RANGED_HEAL_POWER = 4;
global.REPAIR_COST = 0.01;
global.DISMANTLE_COST = 0.005;

global.RAMPART_DECAY_AMOUNT = 300;
global.RAMPART_DECAY_TIME = 100;
global.RAMPART_HITS = 1;
global.ENERGY_REGEN_TIME = 300;
global.ENERGY_DECAY = 1000;

global.SPAWN_HITS = 5000;
global.SPAWN_ENERGY_START = 300;
global.SPAWN_ENERGY_CAPACITY = 300;
global.CREEP_SPAWN_TIME = 3;
global.SPAWN_RENEW_RATIO = 1.2;

global.SOURCE_ENERGY_CAPACITY = 3000;
global.SOURCE_ENERGY_NEUTRAL_CAPACITY = 1500;
global.SOURCE_ENERGY_KEEPER_CAPACITY = 4000;

global.WALL_HITS = 1;
global.WALL_HITS_MAX = 300000000;

global.EXTENSION_HITS = 1000;

global.ROAD_HITS = 5000;
global.ROAD_WEAROUT = 1;
global.ROAD_DECAY_AMOUNT = 100;
global.ROAD_DECAY_TIME = 1000;

global.LINK_HITS = 1000;
global.LINK_HITS_MAX = 1000;
global.LINK_CAPACITY = 800;
global.LINK_COOLDOWN = 1;
global.LINK_LOSS_RATIO = 0.03;

global.STORAGE_CAPACITY = 1000000;
global.STORAGE_HITS = 10000;

global.STRUCTURE_SPAWN = "spawn";
global.STRUCTURE_EXTENSION = "extension";
global.STRUCTURE_ROAD = "road";
global.STRUCTURE_WALL = "constructedWall";
global.STRUCTURE_RAMPART = "rampart";
global.STRUCTURE_KEEPER_LAIR = "keeperLair";
global.STRUCTURE_PORTAL = "portal";
global.STRUCTURE_CONTROLLER = "controller";
global.STRUCTURE_LINK = "link";
global.STRUCTURE_STORAGE = "storage";
global.STRUCTURE_TOWER = "tower";
global.STRUCTURE_OBSERVER = "observer";
global.STRUCTURE_POWER_BANK = "powerBank";
global.STRUCTURE_POWER_SPAWN = "powerSpawn";
global.STRUCTURE_EXTRACTOR = "extractor";
global.STRUCTURE_LAB = "lab";
global.STRUCTURE_TERMINAL = "terminal";
global.STRUCTURE_CONTAINER = "container";
global.STRUCTURE_NUKER = "nuker";


global.CONSTRUCTION_COST_ROAD_SWAMP_RATIO = 5;

global.CONTROLLER_CLAIM_DOWNGRADE = 0.2;
global.CONTROLLER_RESERVE = 1;
global.CONTROLLER_RESERVE_MAX = 5000;
global.CONTROLLER_MAX_UPGRADE_PER_TICK = 15;
global.CONTROLLER_ATTACK_BLOCKED_UPGRADE = 1000;
global.CONTROLLER_NUKE_BLOCKED_UPGRADE = 200;

global.SAFE_MODE_DURATION = 20000;
global.SAFE_MODE_COOLDOWN = 50000;
global.SAFE_MODE_COST = 1000;

global.TOWER_HITS = 3000;
global.TOWER_CAPACITY = 1000;
global.TOWER_ENERGY_COST = 10;
global.TOWER_POWER_ATTACK = 600;
global.TOWER_POWER_HEAL = 400;
global.TOWER_POWER_REPAIR = 800;
global.TOWER_OPTIMAL_RANGE = 5;
global.TOWER_FALLOFF_RANGE = 20;
global.TOWER_FALLOFF = 0.75;

global.OBSERVER_HITS = 500;
global.OBSERVER_RANGE = 10;

global.POWER_BANK_HITS = 2000000;
global.POWER_BANK_CAPACITY_MAX = 5000;
global.POWER_BANK_CAPACITY_MIN = 500;
global.POWER_BANK_CAPACITY_CRIT = 0.3;
global.POWER_BANK_DECAY = 5000;
global.POWER_BANK_HIT_BACK = 0.5;

global.POWER_SPAWN_HITS = 5000;
global.POWER_SPAWN_ENERGY_CAPACITY = 5000;
global.POWER_SPAWN_POWER_CAPACITY = 100;
global.POWER_SPAWN_ENERGY_RATIO = 50;

global.EXTRACTOR_HITS = 500;
global.EXTRACTOR_COOLDOWN = 5;

global.LAB_HITS = 500;
global.LAB_MINERAL_CAPACITY = 3000;
global.LAB_ENERGY_CAPACITY = 2000;
global.LAB_BOOST_ENERGY = 20;
global.LAB_BOOST_MINERAL = 30;
global.LAB_COOLDOWN = 10;
global.LAB_REACTION_AMOUNT = 5;

global.GCL_POW = 2.4;
global.GCL_MULTIPLY = 1000000;
global.GCL_NOVICE = 3;

global.MODE_SIMULATION = "simulation";
global.MODE_SURVIVAL = "survival";
global.MODE_WORLD = "world";
global.MODE_ARENA = "arena";

global.TERRAIN_MASK_WALL = 1;
global.TERRAIN_MASK_SWAMP = 2;
global.TERRAIN_MASK_LAVA = 4;

global.MAX_CONSTRUCTION_SITES = 100;
global.MAX_CREEP_SIZE = 50;

global.MINERAL_REGEN_TIME = 50000;
global.MINERAL_RANDOM_FACTOR = 2;

global.MINERAL_DENSITY_CHANGE = 0.05;
global.DENSITY_LOW = 1;
global.DENSITY_MODERATE = 2;
global.DENSITY_HIGH = 3;
global.DENSITY_ULTRA = 4;

global.TERMINAL_CAPACITY = 300000;
global.TERMINAL_HITS = 3000;
global.TERMINAL_SEND_COST = 0.1;
global.TERMINAL_MIN_SEND = 100;

global.CONTAINER_HITS = 250000;
global.CONTAINER_CAPACITY = 2000;
global.CONTAINER_DECAY = 5000;
global.CONTAINER_DECAY_TIME = 100;
global.CONTAINER_DECAY_TIME_OWNED = 500;

global.NUKER_HITS = 1000;
global.NUKER_COOLDOWN = 100000;
global.NUKER_ENERGY_CAPACITY = 300000;
global.NUKER_GHODIUM_CAPACITY = 5000;
global.NUKE_LAND_TIME = 50000;
global.NUKE_RANGE = 10;

global.PORTAL_DECAY = 30000;
global.ORDER_SELL = "sell";
global.ORDER_BUY = "buy";

global.MARKET_FEE = 0.05;

global.FLAGS_LIMIT = 10000;

global.SUBSCRIPTION_TOKEN = "token";

global.RESOURCE_ENERGY = "energy";
global.RESOURCE_POWER = "power";

global.RESOURCE_HYDROGEN = "H";
global.RESOURCE_OXYGEN = "O";
global.RESOURCE_UTRIUM = "U";
global.RESOURCE_LEMERGIUM = "L";
global.RESOURCE_KEANIUM = "K";
global.RESOURCE_ZYNTHIUM = "Z";
global.RESOURCE_CATALYST = "X";
global.RESOURCE_GHODIUM = "G";

global.RESOURCE_HYDROXIDE = "OH";
global.RESOURCE_ZYNTHIUM_KEANITE = "ZK";
global.RESOURCE_UTRIUM_LEMERGITE = "UL";

global.RESOURCE_UTRIUM_HYDRIDE = "UH";
global.RESOURCE_UTRIUM_OXIDE = "UO";
global.RESOURCE_KEANIUM_HYDRIDE = "KH";
global.RESOURCE_KEANIUM_OXIDE = "KO";
global.RESOURCE_LEMERGIUM_HYDRIDE = "LH";
global.RESOURCE_LEMERGIUM_OXIDE = "LO";
global.RESOURCE_ZYNTHIUM_HYDRIDE = "ZH";
global.RESOURCE_ZYNTHIUM_OXIDE = "ZO";
global.RESOURCE_GHODIUM_HYDRIDE = "GH";
global.RESOURCE_GHODIUM_OXIDE = "GO";

global.RESOURCE_UTRIUM_ACID = "UH2O";
global.RESOURCE_UTRIUM_ALKALIDE = "UHO2";
global.RESOURCE_KEANIUM_ACID = "KH2O";
global.RESOURCE_KEANIUM_ALKALIDE = "KHO2";
global.RESOURCE_LEMERGIUM_ACID = "LH2O";
global.RESOURCE_LEMERGIUM_ALKALIDE = "LHO2";
global.RESOURCE_ZYNTHIUM_ACID = "ZH2O";
global.RESOURCE_ZYNTHIUM_ALKALIDE = "ZHO2";
global.RESOURCE_GHODIUM_ACID = "GH2O";
global.RESOURCE_GHODIUM_ALKALIDE = "GHO2";

global.RESOURCE_CATALYZED_UTRIUM_ACID = "XUH2O";
global.RESOURCE_CATALYZED_UTRIUM_ALKALIDE = "XUHO2";
global.RESOURCE_CATALYZED_KEANIUM_ACID = "XKH2O";
global.RESOURCE_CATALYZED_KEANIUM_ALKALIDE = "XKHO2";
global.RESOURCE_CATALYZED_LEMERGIUM_ACID = "XLH2O";
global.RESOURCE_CATALYZED_LEMERGIUM_ALKALIDE = "XLHO2";
global.RESOURCE_CATALYZED_ZYNTHIUM_ACID = "XZH2O";
global.RESOURCE_CATALYZED_ZYNTHIUM_ALKALIDE = "XZHO2";
global.RESOURCE_CATALYZED_GHODIUM_ACID = "XGH2O";
global.RESOURCE_CATALYZED_GHODIUM_ALKALIDE = "XGHO2";