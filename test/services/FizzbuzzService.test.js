const FizzbuzzService = require("./../../lib/services/FizzbuzzService");

describe("Prueba de FizzbuzzService",()=> {

    test("1. Obtener trick",()=>{
        const explorer1 = {name: "Explorer1", score: 1};
        const explorerResult  = FizzbuzzService.applyValidationInExplorer(explorer1);
        expect(explorerResult.trick).toBe(1);        
    }),    

    test("2. Obtener fizz",()=>{
        const explorer3 = {name: "Explorer3", score: 3};
        const explorerResult = FizzbuzzService.applyValidationInExplorer(explorer3);
        expect(explorerResult.trick).toBe("FIZZ");        
    }),

    test("3. Obtener buzz",()=>{
        const explorer5 = {name: "Explorer5", score: 5};
        const explorerResult = FizzbuzzService.applyValidationInExplorer(explorer5);
        expect(explorerResult.trick).toBe("BUZZ");        
    }),

    test("4. Obtener Fizzbuzz",()=>{        
        const explorer15 = {name: "Explorer15", score: 15};
        const explorerResult = FizzbuzzService.applyValidationInExplorer(explorer15);
        expect(explorerResult.trick).toBe("FIZZBUZZ");        
    }),
    
    test("5. Validar numero trick",()=>{        
        const explorerResult = FizzbuzzService.applyValidationInNumber(1);
        expect(explorerResult).toBe(1);        
    }),

    test("6. Validar numero fizz",()=>{        
        const explorerResult = FizzbuzzService.applyValidationInNumber(3);
        expect(explorerResult).toBe("FIZZ");        
    }),

    test("7. Validar numero buzz",()=>{        
        const explorerResult = FizzbuzzService.applyValidationInNumber(5);
        expect(explorerResult).toBe("BUZZ");        
    }),

    test("8. Validar numero Fizzbuzz",()=>{        
        const explorerResult = FizzbuzzService.applyValidationInNumber(15);
        expect(explorerResult).toBe("FIZZBUZZ");        
    });  
    
});

