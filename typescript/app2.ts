import Carro from "./Carro";
import Pessoa from "./Pessoa";
import Concessionaria from "./Concessionaria";

/**  -- criar carros -- */
let carroA = new Carro("dodge", 4);
let carroB = new Carro("veloster", 3);
let carroC = new Carro("cerato", 4);


/** montar lista de carro da concessionaria */
let listaDeCarros: Array<Carro> = [carroA, carroB, carroC];

let concessionaria = new Concessionaria("Av Paulista", listaDeCarros);

//console.log(concessionaria.mostraListaDeCarros());

/** comprar carro */
let cliente = new Pessoa("Joao", "veloster");

concessionaria.mostraListaDeCarros().map((carro: Carro) =>{

    if(carro["modelo"] == cliente.dizerCarroPreferido()) {

        //comprar carro
        cliente.comprarCarro(carro);
    }
});

console.log(cliente.dizerCarroQuemTem());
