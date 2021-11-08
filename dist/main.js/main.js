"use strict";

var _script = require("./script1.js");

var _script2 = require("./script2.js");

var Impuesto1 = new _script2.Impuestos(15000);
var Impuesto2 = new _script2.Impuestos(21000, 2000);
Impuesto1.setDeducciones = 1800;
var Cliente1 = new _script.Clientes("Rodrigo", Impuesto1);
var Cliente2 = new _script.Clientes("", Impuesto2);
Cliente2.setNombre = "Francisco";
console.log(Impuesto1, Impuesto2);
console.log(Cliente1, Cliente2);
console.log(Cliente1.calcularImpuestos(), Cliente2.calcularImpuestos());