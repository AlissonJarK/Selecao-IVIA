import { expect } from 'chai'
import { FizBuz } from '../src/fizbuz'

describe('FizBuz', () => {

  describe("Quando passo um multiplo de 3", () => {
    it("Deve retornar 'FIZ'", () => {
      let fb = new FizBuz();
      expect(fb.retorne(3)).to.equal('FIZ')
    })
  })

  describe("Quando passo um multiplo de 5", () => {
    it("Deve retornar 'BUZ'", () => {
      let fb = new FizBuz();
      expect(fb.retorne(5)).to.equal('BUZ')
    })
  })
  
  describe("Quando passo um multiplo de 3 e 5", () => {
    it("Deve retornar 'FIZBUZ'", () => {
      let fb = new FizBuz();
      expect(fb.retorne(15)).to.equal('FIZBUZ')
    })
  })

  describe("Quando passo um numero que não é multiplo de 3 ou 5", () => {
    it("Deve retornar o próprio numero", () => {
      let fb = new FizBuz();
      expect(fb.retorne(2)).to.equal('2')
    })
  })
})
