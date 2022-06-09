interface Product {  
    name: string;
    price: number;
    code: string;
}
class InvoiceLine{
    producto : Product;
    cant: number;
    tax: number = 0;
    total: number = 0;
    subtotal: number = 0;

    constructor(producto : Product, cant : number = 0){
        this.producto = producto;
        this.cant = cant;
        this.subtotal = this.cant * this.producto.price;
        this.tax = this.subtotal * 0.12;
        this.total = this.subtotal + this.tax;
    }

    updateCant(cant : number){
        if (cant!=0){
            this.cant += cant;
            this.subtotal = this.cant * this.producto.price;
            this.tax = this.subtotal * 0.12;
            this.total = this.subtotal + this.tax;
        }
    }

    getSubtotal() : number{
        return this.subtotal;
    }
    
    getTax() : number{
        return this.tax;
    }

    getTotal() : number{
        return this.total;
    }

    printLine(){
        console.log(`Cod: ${this.producto.code} \tProducto: ${this.producto.name} \tPrecio: ${this.producto.price} \tCantidad: ${this.cant} \tSubtotal: ${this.subtotal} \tImpuestos: ${this.tax} \tTotal ${this.total}`)
    }
}

class Invoice{
    clientName : string = "";
    subTotal: number = 0;
    tax: number = 0;
    total: number = 0;
    invoiceLines : InvoiceLine[] = [];

    constructor(clientName : string){
        this.clientName = clientName
    }

    addLine(invoiceLine : InvoiceLine){
        let isDuplicate = false;
        if (this.invoiceLines.length){
            for (let index = 0; index < this.invoiceLines.length && !isDuplicate; index++) {
                if(this.invoiceLines[index]?.producto?.code == invoiceLine.producto?.code){
                    this.invoiceLines[index].updateCant(invoiceLine.cant);
                    isDuplicate = true;
                }
            }
            if(!isDuplicate){
                this.invoiceLines.push(invoiceLine);
            }
        }else{
            this.invoiceLines.push(invoiceLine);
        }
        this.subTotal = this.calculateSubtotal();
        this.tax = this.calculateTax();
        this.total = this.calculateTotal();
    }

    calculateSubtotal() : number{
        if (this.invoiceLines){
            let listSubtotal : number[] = [];
            this.invoiceLines.forEach(line => listSubtotal.push(line.getSubtotal()));
            this.subTotal = listSubtotal.reduce((a, b) => a + b, 0); 
            return this.subTotal;
        }
        else{
            return 0;
        }
    }
    calculateTax() : number{
        if (this.invoiceLines && this.subTotal){
            let listTax : number[] = [];
            this.invoiceLines.forEach(line => listTax.push(line.getTax()))
            this.tax = listTax.reduce((a, b) => a + b, 0); 
            return this.tax;
        }
        else{
            return 0;
        }
    }
    calculateTotal() : number{
        if (this.invoiceLines && this.subTotal && this.tax){
            let listTotal : number[] = [];
            this.invoiceLines.forEach(line => listTotal.push(line.getTotal()))
            this.total = listTotal.reduce((a, b) => a + b, 0); 
            return this.total;
        }
        else{
            return 0;
        }
    }
}
function newCode() : string{
    return Math.random().toString(36).slice(2)
}

let product_1 : Product={
    name: "Camisa",
    price: 12.5,
    code: newCode()
}
let product_2 : Product={
    name: "Pantalon",
    price: 22.5,
    code: newCode()
}
let line_1 : InvoiceLine = new InvoiceLine(product_1, 5);
let line_2 : InvoiceLine = new InvoiceLine(product_2, 1);
let line_3 : InvoiceLine = new InvoiceLine(product_1, 2);

let invoice : Invoice = new Invoice("Antony Macias");
invoice.addLine(line_1);
invoice.addLine(line_2);
invoice.addLine(line_3);
console.log("Nueva Factura");
console.log(`Cliente: ${invoice.clientName}`);
invoice.invoiceLines.forEach(line => line.printLine());
console.log(`Subtotal: ${invoice.calculateSubtotal()}`);
console.log(`Impuesto: ${invoice.calculateTax()}`);
console.log(`Total: ${invoice.calculateTotal()}`);



