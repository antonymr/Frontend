import { getLevel, sumar, getType } from "./app";

describe("Functions Randoms", () => {
    test("Debe sumar [10] y [20] y devolber 30 con la funcion #sumar", ()=>{
        ///AAA
        //Arranque: aca se configura
        const primerValor = 10;
        const segundoValor = 20;
        const resultado = 30;
        let result : number;
        //Act: aca trae la funcion
        result = sumar(primerValor, segundoValor);
        //Asset: aca comprueba
        expect(result).toBe(resultado);
    });

    test("Debe devolver [Junior] con la funcion getLevel cuando envio [30]", () =>{
        const resultexpected = "Junior"
        const level = 30;
        let result : string;

        result = getLevel(level);

        expect(result).toBe(resultexpected)
    })

    test("Debe devolver [Semi Senior] con la funcion getLevel cuando envio [70]", () =>{
        const resultexpected = "Semi Senior"
        const level = 70;
        let result : string;

        result = getLevel(level);
        
        expect(result).toBe(resultexpected)
    })
    
    test("Debe devolver [Senior] con la funcion getLevel cuando envio [90]", () =>{
        const resultexpected = "Senior"
        const level = 90;
        let result : string;

        result = getLevel(level);
        
        expect(result).toBe(resultexpected)
    })

    test("fn getType", ()=>{
        ///AAA
        //Arranque: aca se configura
        const expected = expect.any( String );
        const random = 25;
        const resultado = 30;
        //Act: aca trae la funcion
        const result = getType(random)
        //Asset: aca comprueba
        expect(result).toEqual(expected);
    });  

    test("se debe llamar a la funcion getLevel", ()=>{
        ///AAA
        //Arranque: aca se configura
        const expected = expect.any( String );
        const random = 25;
        const resultado = 30;
        //Act: aca trae la funcion
        const result = getType(random)
        //Asset: aca comprueba
        expect(result).toEqual(expected);
    });   


})