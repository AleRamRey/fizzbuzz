const Reader = require("./../../lib/utils/Reader");
const ExplorerService = require("./../../lib/services/ExplorerService");

describe("Test for ExplorerService", () => {

    const explorers = Reader.readJasonFile("explorers.json");

    test("1. Obtiene número de explorers mission node", () => {
        const explorersFilter = ExplorerService.filterByMission(explorers, "node");
        expect(explorersFilter.length).toBe(10);        
    }),    

    test("2. Obtiene número de explorers mission java",()=>{
        const amountExplorers = ExplorerService.getAmountOfExplorersByMission(explorers, "java");
        expect(amountExplorers).toBe(5);        
    }),

    test("3. Obtiene el primer nombre del explorer de mission node",()=>{
        const userNameExplorer = ExplorerService.getExplorersUsernamesByMission(explorers, "node");
        expect(userNameExplorer[0]).toBe("ajolonauta1");        
    });
   
});