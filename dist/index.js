"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const matematica = require("./matematica")
const matematica_1 = require("./matematica");
const validator_1 = __importDefault(require("validator"));
let n1 = 10;
let n2 = 2;
console.log(`soma = ${(0, matematica_1.somar)(n1, n2)}`);
console.log(`subtraçao = ${(0, matematica_1.subtrair)(n1, n2)}`);
console.log(`multiplicao = ${(0, matematica_1.multiplicar)(n1, n2)}`);
console.log(validator_1.default.isEmail('suporte@klrentacar.com.br'));
console.log(validator_1.default.isIP('192.168.0.1'));
