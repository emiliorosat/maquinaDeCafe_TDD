export default class Azucarero
{
    private cantidadDeAzucar: number

    constructor(cantidad: number)
    {
        this.cantidadDeAzucar = cantidad
    }

    public setCantidadDeAzucar(param1: number)
    {}
    public getCantidadDeAzucar()
    {
        return this.cantidadDeAzucar
    }
    public hasAzucar(cantidadDeAzucar: number)
    {
        return this.cantidadDeAzucar >= cantidadDeAzucar
    }
    public giveAzucar(cantidadDeAzucar: number)
    {
        this.cantidadDeAzucar -= cantidadDeAzucar
    }
}