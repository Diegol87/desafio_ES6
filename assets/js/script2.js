export class Impuestos {
    constructor(monto_bruto_anual, deducciones) {
        this._monto_bruto_anual = monto_bruto_anual;
        this.deducciones = deducciones; 
    }

    //getter
    get getMonto_bruto_anual() {
        return this._monto_bruto_anual;
    }

    get getDeducciones() {
        return this.deducciones;
    }

    //setter
    set setMonto_bruto_anual(monto_bruto_anual) {
        this._monto_bruto_anual = monto_bruto_anual;
    }

    set setDeducciones(deducciones) {
        this.deducciones = deducciones;
    } 
};