import Azucarero from "./Azuquero";
import Cafetera from "./Cafetera";
import Vaso from "./Vaso";

export default class MaquinaDeCafe
{
    private cafe: Cafetera
    private vasosPequenos: Vaso
    private vasosMedianos: Vaso
    private vasosGrandes: Vaso
    private azucar: Azucarero

    public getTipoDeVaso(tipoDeVaso: string): Vaso 
    {
        switch(tipoDeVaso.toLocaleLowerCase())
        {
            case "pequeno": return this.vasosPequenos
            break
            case "mediano": return this.vasosMedianos
            break
            case "grande": return this.vasosGrandes
            break
        }
    }

    public getVasoDeCafe(tipoDeVaso: Vaso, cantidadDeVasos: number, cantidadDeAzucar: number): string
    {
        return ""
    }

    public setVasosPequeno(vasosPequeno: Vaso)
    {
        this.vasosPequenos = vasosPequeno
    }
    public setCafetera(cafetera: Cafetera)
    {
        this.cafe = cafetera
    }
    public setVasosMediano(vasoMediano: Vaso)
    {
        this.vasosMedianos = vasoMediano
    }
    public setVasosGrande(vasosGrande: Vaso)
    {
        this.vasosGrandes = vasosGrande
    }
    public setAzucarero(azucarero: Azucarero)
    {
        this.azucar = azucarero
    }
    public getAzucarero(): Azucarero
    {
        return this.azucar
    }
    public getCafetera(): Cafetera
    {
        return this.cafe
    }
    public getVasosPequeno()
    {
        return this.vasosPequenos
    }
}