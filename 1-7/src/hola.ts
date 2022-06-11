import { InvoiceLine } from "./model/invoiceLine";
import { Product } from "./interface/product.interface";
import { Invoice } from "./model/invoice";
import { newCode } from "./utils/code.function";

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
invoice.invoiceLines.forEach(line => console.log(line.printLine()));
console.log(`Subtotal: ${invoice.calculateSubtotal()}`);
console.log(`Impuesto: ${invoice.calculateTax()}`);
console.log(`Total: ${invoice.calculateTotal()}`);
