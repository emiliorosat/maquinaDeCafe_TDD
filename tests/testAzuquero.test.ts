import Azucarero from '../src/Azuquero'

describe("Test Azuquero", ()=> {
    
    const azuquero = new Azucarero(10)
    
    test("deberiaDevolverVerdaderoSiHaySuficienteAzucarEnElAzuquero", ()=> {
        expect( azuquero.hasAzucar(5) ).toBe(true)
        
        expect( azuquero.hasAzucar(10) ).toBe(true)
    })
    
    test("deberiaDevolverFalsoPorqueNoHaySuficienteAzucarEnElAzuquero", ()=> {
        expect( azuquero.hasAzucar(15) ).toBe(false)
    })
    
    test("deberiaRestarAzucarAlAzuquero", ()=> {
        azuquero.giveAzucar(5)
        expect( azuquero.getCantidadDeAzucar() ).toBe(5)
        
        azuquero.giveAzucar(2)
        expect( azuquero.getCantidadDeAzucar() ).toBe(3)
        
    })
})