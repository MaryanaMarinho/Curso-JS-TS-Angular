import Carro from "./Carro";
import { ConcessionariaInterface } from "./ConcessionariaInterface";

export default class Concessionaria implements ConcessionariaInterface{
    
    private endereco: string = "";
    private listaDeCarro: Array<Carro>;

    constructor(endereco: string, listaDeCarro: Array<Carro>) {
        this.endereco = endereco;
        this.listaDeCarro = listaDeCarro;
    }

    public forneceEndereco(): string {
        return this.endereco
    }

    public mostraListaDeCarros(): Array<Carro> {
        return this.listaDeCarro;
    }

    fornecerHorarioDeFuncionamento(): string {
        return "De segunda a sexta das 8:00 as 18:00 e sabado das 8:00 as 12:00";
    }
}