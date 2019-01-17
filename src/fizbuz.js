export class FizBuz {
  retorne(numero) {
    if (numero%3 === 0 && numero%5===0)
      return 'FIZBUZ'
    if (numero%3 === 0)
      return 'FIZ'
    if (numero%5 === 0)
      return 'BUZ'
    
    return numero.toString()
  }
}