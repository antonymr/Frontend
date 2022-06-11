import { InvoiceLine } from "./invoiceLine";

export class Invoice{
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
            this.invoiceLines.forEach(line => listTax.push(line.getTax()));
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
            this.invoiceLines.forEach(line => listTotal.push(line.getTotal()));
            this.total = listTotal.reduce((a, b) => a + b, 0); 
            return this.total;
        }
        else{
            return 0;
        }
    }
}
