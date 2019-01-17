import { expect } from 'chai'
import { Romanos } from '../src/romanos'

describe('Romanos', () => {

    describe("Quando passo 8", () => { 
        it("Deve retornar VIII", () => {
            let rom = new Romanos();
            expect(rom.transformar(8)).to.equal('VIII')
        })
    })

    describe("Quando passo 129", () => {
        it("Deve retornar CXXIX", () => {
            let rom = new Romanos();
            expect(rom.transformar(129)).to.equal('CXXIX') 
        })
    })

    describe("Quando passo 1057", () => {
        it("Deve retornar MLVII", () => {
            let rom = new Romanos();
            expect(rom.transformar(1057)).to.equal('MLVII')
        })
    })
})