let ola = (nome: string, sobrenome: string) => { //nome:sring -- inferencia de tipo
    console.log("Olá " + nome + sobrenome);
    
}

ola("Maryana", "Marinho");


//inferencia de tipos
let message: string = "Seja Bem Vindo!!";
let temporadasFriends: number = 10;
let estudandoAngular: boolean = true;

let listaDeFruntas: Array<string> = ["Uva", "banana", "maçã"];
let listaDeFruntas2: string[] = ["Uva", "banana", "maçã"];

let notasDasProvas: Array<number> = [7.5, 8.9];
let notasDasProvas2: number[] = [7.5, 8.9];