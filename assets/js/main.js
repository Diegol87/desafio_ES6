import { Clientes } from "./script1.js";
import { Impuestos } from "./script2.js";

let Impuesto1 = new Impuestos(15000);
let Impuesto2 = new Impuestos(21000, 2000);

Impuesto1.setDeducciones = 1800;

let Cliente1 = new Clientes("Rodrigo", Impuesto1)
let Cliente2 = new Clientes("",Impuesto2)

Cliente2.setNombre = "Francisco"


console.log(Impuesto1, Impuesto2);
console.log(Cliente1, Cliente2)
console.log(Cliente1.calcularImpuestos(), Cliente2.calcularImpuestos())