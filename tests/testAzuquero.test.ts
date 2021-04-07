import Azucarero from '../src/Azuquero'

describe("Test Azuquero", ()=> {
    
    const azuquero = new Azucarero(10)

    it("deberiaDevolverVerdaderoSiHaySuficienteAzucarEnElAzuquero", ()=> {
        expect( azuquero.hasAzucar(5) ).toBe(true)
    
        expect( azuquero.hasAzucar(10) ).toBe(true)
    })

    it("deberiaDevolverFalsoPorqueNoHaySuficienteAzucarEnElAzuquero", ()=> {
        expect( azuquero.hasAzucar(15) ).toBe(false)
    })

    it("deberiaRestarAzucarAlAzuquero", ()=> {
        azuquero.giveAzucar(5)
        expect( azuquero.getCantidadAzucar() ).toBe(5)
        
        azuquero.giveAzucar(2)
        expect( azuquero.getCantidadAzucar() ).toBe(3)
        
    })
})