// const matematica = require("./matematica")
import {somar,subtrair,multiplicar} from './matematica';
import validator from 'validator';
let n1:number=10;
let n2:number=2;


console.log(`soma = ${somar(n1,n2)}`);
console.log(`subtraçao = ${subtrair(n1,n2)}`)
console.log(`multiplicao = ${multiplicar(n1,n2)}`)


console.log(validator.isEmail('suporte@klrentacar.com.br'))

console.log(validator.isIP('192.168.0.1'))