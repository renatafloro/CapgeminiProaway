class Carro{
    constructor(placa, marca){
        this._placa= placa
        this._marca= marca
    }
    get placa(){
        return this._placa
    }
    set placa(pPlaca){
        this._placa= pPlaca
    }
    set marca(marca){
        this._marca= marca
    }
    get marca(){
        return this._marca
    }
}

let c1 =new Carro()
c1.placa='abc-1234' //set
c1.marca='ford'
console.log(c1.placa, c1.marca) //get