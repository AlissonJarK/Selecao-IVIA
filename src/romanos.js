export class Romanos {
    transformar(numero) {
        let result = [];
        while (numero > 0) {
            if (numero >= 1000) {
                numero = numero - 1000; 
                result.push("M")
                continue
            } else
            if (numero >= 900 && numero < 1000) { 
                numero = numero - 900;
                result.push("CM")
                continue
            } else
            if (numero > 500) {
                numero = numero - 500;
                result.push("D")
                continue
            } else
            if (numero >= 400 && numero < 500) {
                numero = numero - 400;
                result.push("CD")
                continue
            } else
            if (numero > 100) {
                numero = numero - 100;
                result.push("C")
                continue
            } else
            if (numero >= 90 && numero < 100) {
                numero = numero - 90;
                result.push("XC")
                continue
            } else
            if (numero > 50) {
                numero = numero - 50;
                result.push("L")
                continue
            } else
            if (numero >= 40 && numero < 50) {
                numero = numero - 40;
                result.push("XL")
                continue
            } else
            if (numero > 10) {
                numero = numero - 10;
                result.push("X")
                continue
            } else
            if (numero == 9) {
                numero = numero - 9;
                result.push("IX")
                continue
            } else
            if (numero > 5) {
                numero = numero - 5;
                result.push("V")
                continue
            } else
            if (numero == 4) {
                numero = numero - 4;
                result.push("IV")
                continue
            } else
            if (numero >= 1) {
                numero = numero - 1;
                result.push("I")
            }
        }
        return (result.join(""));
    }
}