import { Product } from "./interface/product.interface";
import { Invoice } from "./model/invoice";
import { InvoiceLine } from "./model/invoiceLine";
import { newCode } from "./utils/code.function";

describe("Factura funcionamiento", () => {
    test("La funcion newCode bebe devolver un ramdon de [10] digitos", () => {
        const tamanioEsperado : number = 10;
        let respuesta : number;

        respuesta = newCode().length;

        expect(respuesta).toBe(tamanioEsperado);
    })
    test("La funcion newCode bebe devolver un [string]", () => {
        const expectedstring = expect.any( String )
        let respuesta : string;

        respuesta = newCode();

        expect(respuesta).toEqual(expectedstring);
    })
    test("La funcion calculateSubtotal debe retornar [50] si recibe [5] y [10]", () => {
        const firstNumber : number = 5;
        const secondNumber : number = 10;
        const expectedResult : number = 50;
        const producto : Product ={
            name: "Zapato",
            price: 10,
            code: "09876543210"
        }
        const lineFactura : InvoiceLine = new InvoiceLine(producto, 5)
        let respuesta : number;

        respuesta = lineFactura.calculateSubtotal(firstNumber, secondNumber)

        expect(respuesta).toBe(expectedResult)
    })
    test("La funcion calculateImpuesto debe retornar [6] si recibe [50]", () => {
        const firstNumber : number = 50;
        const expectedResult : number = 6;
        const producto : Product ={
            name: "Zapato",
            price: 10,
            code: "09876543210"
        }
        const lineFactura : InvoiceLine = new InvoiceLine(producto, 5)
        let respuesta : number;

        respuesta = lineFactura.calculateImpuesto(firstNumber)

        expect(respuesta).toBe(expectedResult)
    })
    test("La funcion calculateTotal debe retornar [56] si recibe [50] y [6]", () => {
        const firstNumber : number = 50;
        const secondNumber : number = 6;
        const expectedResult : number = 56;
        const producto : Product ={
            name: "Zapato",
            price: 10,
            code: "09876543210"
        }
        const lineFactura : InvoiceLine = new InvoiceLine(producto, 5)
        let respuesta : number;

        respuesta = lineFactura.calculateTotal(firstNumber, secondNumber)

        expect(respuesta).toBe(expectedResult)
    })
    test("Debe retornar un [string]", () => {
        const producto : Product ={
            name: "Zapato",
            price: 10,
            code: "09876543210"
        }
        const lineFactura : InvoiceLine = new InvoiceLine(producto, 5)
        const expectedResult = expect.any( String )
        let result : string

        result = lineFactura.printLine()

        expect(result).toEqual(expectedResult)
    })
    test("Debe devolver [50] si recive [producto {nombre: 'zapato', price: 10, code: '0987654321'}] y [5]", () => {
        const producto : Product ={
            name: "Zapato",
            price: 10,
            code: "09876543210"
        }
        const expectedSubTotal : number = 50;
        const lineFactura : InvoiceLine = new InvoiceLine(producto, 5)
        let responseSubtotal : number = lineFactura.getSubtotal()

        responseSubtotal = lineFactura.getSubtotal()
        
        expect(responseSubtotal).toBe(expectedSubTotal)
    })
    test("Debe devolver [6] si recive [producto {nombre: 'zapato', price: 10, code: '0987654321'}] y [5]", () => {
        const producto : Product ={
            name: "Zapato",
            price: 10,
            code: "09876543210"
        }
        const expectedImpuesto : number = 6;
        const lineFactura : InvoiceLine = new InvoiceLine(producto, 5)
        let responseImpuesto : number = lineFactura.getTax()
        responseImpuesto = lineFactura.getTax()
        
        expect(responseImpuesto).toBe(expectedImpuesto)
    })
    test("Debe devolver [56] si recive [producto {nombre: 'zapato', price: 10, code: '0987654321'}] y [5]", () => {
        const producto : Product ={
            name: "Zapato",
            price: 10,
            code: "09876543210"
        }
        const expectedTotal : number = 56;
        const lineFactura : InvoiceLine = new InvoiceLine(producto, 5)
        let responseTotal : number = lineFactura.getTotal()

        responseTotal = lineFactura.getTotal()
        
        expect(responseTotal).toBe(expectedTotal)
    })
    test("Debe llamar a la fn calculateSubtotal, calculateImpuesto y calculateTotal si le envia [1]", () => {
        const producto : Product ={
            name: "Zapato",
            price: 10,
            code: "09876543210"
        }
        const lineFactura : InvoiceLine = new InvoiceLine(producto, 5)
        const spyCalculateSubtotal = jest.spyOn(lineFactura, 'calculateSubtotal')
        const spyCalculateImpuesto = jest.spyOn(lineFactura, 'calculateImpuesto')
        const spyCalculateTotal = jest.spyOn(lineFactura, 'calculateTotal')

        lineFactura.updateCant(1);

        expect(spyCalculateSubtotal).toHaveBeenCalled()
        expect(spyCalculateImpuesto).toHaveBeenCalled()
        expect(spyCalculateTotal).toHaveBeenCalled()
        spyCalculateSubtotal.mockRestore()        
    })
    test("Debe llamar a la fn calculateSubtotal, calculateTax y calculateTotal si le envia [LineaFactura()]", () => {
        const producto : Product ={
            name: "Zapato",
            price: 10,
            code: "09876543210"
        }
        const lineFacturaZ : InvoiceLine = new InvoiceLine(producto, 5)
        const factura : Invoice = new Invoice("Antony")
        const spyCalculateSubtotal = jest.spyOn(factura, 'calculateSubtotal')
        const spyCalculateImpuesto = jest.spyOn(factura, 'calculateTax')
        const spyCalculateTotal = jest.spyOn(factura, 'calculateTotal')

        factura.addLine(lineFacturaZ)

        expect(spyCalculateSubtotal).toHaveBeenCalled()
        expect(spyCalculateImpuesto).toHaveBeenCalled()
        expect(spyCalculateTotal).toHaveBeenCalled()
        spyCalculateSubtotal.mockRestore()        
    })
    test("Debe llamar a la fn updateCant de InvoiceLine si le envia [LineaFactura()] con code ya registrado", () => {
        const producto : Product ={
            name: "Zapato",
            price: 10,
            code: "09876543210"
        }
        const lineFacturaZ : InvoiceLine = new InvoiceLine(producto, 5)
        const factura : Invoice = new Invoice("Antony")
        const spyUpdateCant = jest.spyOn(lineFacturaZ, 'updateCant')
        factura.addLine(lineFacturaZ)
        factura.addLine(lineFacturaZ)

        expect(spyUpdateCant).toHaveBeenCalled()
        spyUpdateCant.mockRestore()        
    })
    test("La fn calculateSubtotal Debe devolver [0] si no tiene InvoiceLines", () => {
        const factura : Invoice = new Invoice("Antony")
        let response : number

        response = factura.calculateSubtotal()

        expect(response).toBe(0)
    })
    test("La fn calculateTax Debe devolver [0] si no tiene InvoiceLines", () => {
        const factura : Invoice = new Invoice("Antony")
        let response : number

        response = factura.calculateTax()

        expect(response).toBe(0)
    })
    test("La fn calculateTotal Debe devolver [0] si no tiene InvoiceLines", () => {
        const factura : Invoice = new Invoice("Antony")
        let response : number

        response = factura.calculateTotal()

        expect(response).toBe(0)
    })    
})