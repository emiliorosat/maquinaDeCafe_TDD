import MaquinaDeCafe from '../src/MaquinaDeCafe'
import Vaso from '../src/Vaso'
import Azucarero from '../src/Azuquero'
import Cafetera from '../src/Cafetera'

describe("Test Maquina de cafe", ()=> {

    let cafetera: Cafetera = new Cafetera(50)
    const vasosPequeno: Vaso = new Vaso(5, 10)
    const vasosMediano: Vaso = new Vaso(5, 20)
    const vasosGrande: Vaso = new Vaso(5, 30)
    let azucarero: Azucarero = new Azucarero(20)
    const maquinaDeCafe: MaquinaDeCafe = MaquinaDeCafe()

    maquinaDeCafe.setCafetera(cafetera)
    maquinaDeCafe.setVasosPequeno(vasosPequeno)
    maquinaDeCafe.setVasosMediano(vasosMediano)
    maquinaDeCafe.setVasosGrande(vasosGrande)
    maquinaDeCafe.setAzucarero(azucarero)

    it("deberiaDevolverUnVasoPequeno", ()=> {
        const vaso: Vaso = maquinaDeCafe.getTipoDeVaso("pequeno")
        expect( maquinaDeCafe.vasosPequeno ).toBe(vaso)
    })

    it("deberiaDevolverUnVasoMediano", ()=> {
        const vaso: Vaso = maquinaDeCafe.getTipoDeVaso("mediano")
        expect( maquinaDeCafe.vasosMediano ).toBe(vaso)
    })

    it("deberiaDevolverUnVasoGrande", ()=> {
        const vaso: Vaso = maquinaDeCafe.getTipoDeVaso("grande")
        expect( maquinaDeCafe.vasosGrande ).toBe(vaso)
    })

    it("deberiaDevolverNoHayVasos", ()=> {
        const vaso: Vaso = maquinaDeCafe.getTipoDeVaso("pequeno")
        const resultado: string = maquinaDeCafe.getVasoDeCafe(vaso, 10, 2)
        expect( resultado ).toBe("No hay Vasos")
    })

    it("deberiaDevolverNoHayCafe", ()=> {
        cafetera = new Cafetera(5)
        maquinaDeCafe.setCafetera(cafetera)
        const vaso: Vaso = maquinaDeCafe.getTipoDeVaso("pequeno")
        const resultado: string = maquinaDeCafe.getVasoDeCafe(vaso, 1, 2)
        expect( resultado ).toBe("No hay Cafe")
    })

    it("deberiaDevolverNoHayAzucar", ()=> {
        azucarero = new Azucarero(2)
        maquinaDeCafe.setAzucarero(azucarero)
        const vaso: Vaso = maquinaDeCafe.getTipoDeVaso("pequeno")
        const resultado: string = maquinaDeCafe.getVasoDeCafe(vaso, 1, 3)
        expect( resultado ).toBe("No hay Azucar")
    })

    it("deberiaRestarCafe", ()=> {
        const vaso: Vaso = maquinaDeCafe.getTipoDeVaso("pequeno")
        maquinaDeCafe.getVasoDeCafe(vaso, 1, 3)
        const resultado: number = maquinaDeCafe.getCafetera().getCantidadCafe()
        expect( resultado ).toBe(40)
    })

    it("deberiaRestarVaso", ()=> {
        const vaso: Vaso = maquinaDeCafe.getTipoDeVaso("pequeno")
        maquinaDeCafe.getVasoDeCafe(vaso, 1, 3)
        const resultado: number = maquinaDeCafe.getVasosPequeno().getCantidadVasos()
        expect( resultado ).toBe(4)
    })

    it("deberiaRestarAzucar", ()=> {
        const vaso: Vaso = maquinaDeCafe.getTipoDeVaso("pequeno")
        maquinaDeCafe.getVasoDeCafe(vaso, 1, 3)
        const resultado: number = maquinaDeCafe.getAzucarero().getCantidadAzucar()
        expect( resultado ).toBe(17)
    })

    it("deberiaDevolverFelicitaciones", ()=> {
        const vaso: Vaso = maquinaDeCafe.getTipoDeVaso("pequeno")
        const resultado: string = maquinaDeCafe.getVasoDeCafe(vaso, 1, 3)
        expect( resultado ).toBe("Felicitaciones")
    })
})