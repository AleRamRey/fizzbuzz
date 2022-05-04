const Reader = require("./../../lib/utils/Reader")
const ExplorerService = require("./../../lib/services/ExplorerService")
const FizzbuzzService = require("./../../lib/services/FizzbuzzService")

class ExplorerController {
    
    static getExplorersByMission(mission){
        const explorers = Reader.readJasonFile("explorers.json")    
        return ExplorerService.filterByMission(explorers, mission)
    }

    static getExplorersUsernamesByMission(mission){
        const explorers = Reader.readJasonFile("explorers.json")
        return ExplorerService.getExplorersUsernamesByMission(explorers, mission)
    }

    static getExplorersAmonutByMission(mission) {
        const explorers = Reader.readJasonFile("explorers.json")
        return ExplorerService.getAmountOfExplorersByMission(explorers, mission)
    }

    static getFizzbuzz(number){
        return FizzbuzzService.applyValidationInNumber(number);
    }
}

module.exports = ExplorerController;
