export class Clientes {
    constructor(nombre, impuestos) {
        this.nombre = nombre;
        this.impuestos = impuestos || [];
    }

      //getter
      get getNombres() {
        return this.nombre;
    }

    //setter
    set setNombre(nombre) {
        this.nombre = nombre;
    }

    //método buscar por cliente
    calcularImpuestos() {
        return ((this.impuestos._monto_bruto_anual - this.impuestos.deducciones) * 0.21)
    }
};