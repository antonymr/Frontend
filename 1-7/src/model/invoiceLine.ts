import { Product } from "../interface/product.interface";

export class InvoiceLine{
    producto : Product;
    cant: number;
    tax: number = 0;
    total: number = 0;
    subtotal: number = 0;

    constructor(producto : Product, cant : number = 0){
        this.producto = producto;
        this.cant = cant;
        this.subtotal = this.calculateSubtotal(this.cant, this.producto.price);
        this.tax = this.calculateImpuesto(this.subtotal)
        this.total = this.calculateTotal(this.subtotal, this.tax);
    }

    updateCant(cant : number){
        if (cant!=0){
            this.cant += cant;
            this.subtotal = this.calculateSubtotal(this.cant, this.producto.price);
            this.tax = this.calculateImpuesto(this.subtotal)
            this.total = this.calculateTotal(this.subtotal, this.tax);
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

    calculateSubtotal = (cant : number, price : number) => {
        return cant * price
    }

    calculateImpuesto = (subtotal : number) => {
        return subtotal * 0.12
    }
    
    calculateTotal = (subtotal : number, impuesto : number) => {
        return subtotal + impuesto
    }

    printLine() : string{
        return `Cod: ${this.producto.code} \tProducto: ${this.producto.name} \tPrecio: ${this.producto.price} \tCantidad: ${this.cant} \tSubtotal: ${this.subtotal} \tImpuestos: ${this.tax} \tTotal ${this.total}`
    }
}
