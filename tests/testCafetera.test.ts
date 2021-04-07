import Cafetera from '../src/Cafetera'

describe("Test Cafeteria", ()=> {
    it("deberiaDevolverVerdaderoSiExisteCafe", ()=> {
        const cafetera: Cafetera = new Cafetera(10)
        const resultado: Boolean = cafetera.hasCafe(5)
        expect(resultado).toBe(true)
    })
    
    it("deberiaDevolverFalsoSiNoExisteCafe", ()=> {
        const cafetera: Cafetera = new Cafetera(10)
        const resultado: Boolean = cafetera.hasCafe(11)
        expect(resultado).toBe(false)
    })
    
    it("deberiaRestarCafeALaCafetera", ()=> {
        const cafetera: Cafetera = new Cafetera(10)
        cafetera.giveCafe(7)
        expect(cafetera.getCantidadDeCafe()).toBe(3)
    })
})