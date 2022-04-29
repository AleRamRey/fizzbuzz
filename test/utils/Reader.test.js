const Reader = require("../../lib/utils/Reader")

describe("Prueba archivo Reader", () => {

    test("1. Total de explorers", () => {
        const explorers = Reader.readJasonFile("explorers.json");
        expect(explorers.length).toBe(15);       
    });
});
