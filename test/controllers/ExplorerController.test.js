const ExplorerController = require("./../../lib/controllers/ExplorerController");

describe("Test for ExplorerController", () => {

    test("Filtrar lista de explorers por mision ", () => {
        const explorers = ExplorerController.getExplorersByMission("node");
        expect(explorers.length).toBe(10);
    }),

    test("Obtener explorer por nombre y mision ", () => {
        const explorers = ExplorerController.getExplorersUsernamesByMission("node");
        expect(explorers[0]).toBe("ajolonauta1");
    }),

    test("Obtener explorer por nombre y mision ", () => {
        const explorers = ExplorerController.getExplorersAmonutByMission("java");
        expect(explorers).toBe(5);
    });

});
