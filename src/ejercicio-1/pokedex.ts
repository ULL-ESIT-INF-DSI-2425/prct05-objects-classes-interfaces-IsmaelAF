import { Pokemon, datosPokemon } from "./pokemon";

export class Pokedex {

    constructor(public readonly pokedex: Pokemon[]){};

    addPokemon(poke: Pokemon): void {
        //if (this.buscarNombre)
        if (this.buscarNombre(poke.nombre) === undefined) {
            this.pokedex.push(poke);
        }// else {
        //    console.log(poke.nombre,"ya existe en la Pokedex.");
        //}
        //this.pokedex.push(poke);
    }

    showPokedex(): string {
        let result: string = "";

        //let contador:number  = 0;
        this.pokedex.forEach(element => {
            result += element.showStats();
            //console.log("Pokemon nº",++contador);
            //element.showStats();
            //console.log("");
        });

        return result;
    }


    buscarCampo(campo: string, data: string | number): Pokemon[] {

        let encontrados: Pokemon[] = [];
        
        
        switch (campo) {
            case "nombre":
                this.pokedex.forEach(element => {
                    if (data === element.nombre) {
                        encontrados.push(element);
                    }

                });
                //return encontrados;
                break;
            case "peso":
                this.pokedex.forEach(element => {
                    if (data === element.peso) {
                        encontrados.push(element);
                    }

                });
                //return encontrados;
                break;
            case "altura":
                this.pokedex.forEach(element => {
                    if (data === element.altura) {
                        encontrados.push(element);
                    }

                });
                //return encontrados;
                break;
            case "tipo":
                this.pokedex.forEach(element => {
                    if (data === element.tipo) {
                        encontrados.push(element);
                    }

                });
                //return encontrados;
                break;
            case "ataque":
                this.pokedex.forEach(element => {

                    if (data === element.ataque) {
                        encontrados.push(element);
                    }
                });
                //return encontrados;
                break;
            case "defensa":
                this.pokedex.forEach(element => {
                    if (data === element.defensa) {
                        encontrados.push(element);
                    }

                });
                //return encontrados;
                break;
            case "velocidad":
                this.pokedex.forEach(element => {
                    if (data === element.velocidad) {
                        encontrados.push(element);
                    }

                });
                //return encontrados;
                break;
            case "HP":
                this.pokedex.forEach(element => {
                    if (data === element.HP) {
                        encontrados.push(element);
                    }

                });
                //return encontrados;
                break;
        
            //default:
                //console.log("Campo de información no existente.");
                //break;
        }
        return encontrados;
    }

    buscarNombre(nombrePokemon: string): Pokemon | undefined {

        let encontrado: Pokemon | undefined = undefined;

        this.pokedex.forEach(element => {
            if (element.nombre === nombrePokemon) {
                encontrado = element;
            }
        });
        return encontrado;
    }

}



//let pikachu = new Pokemon("pikachu", 40, 120, "electrico", 40, 30, 60, 100);
//let pokedex = new Pokedex([pikachu]);

//let charmander = new Pokemon("charmander", 40, 120, "fuego", 20, 30, 60, 100);

//pokedex.addPokemon(charmander);

//console.log(pokedex.showPokedex());

//pokedex.showPokedex()


/*
let pikachu = new Pokemon("pikachu", 40, 120, "electrico", 40, 30, 60, 100);
let pokemon2 = new Pokemon("pokemon2", 40, 120, "electrico", 20, 30, 60, 100);
let pokemon3 = new Pokemon("pokemon3", 34, 123, "fuego", 23, 12, 12, 120);

let pokedex = new Pokedex([pikachu, pokemon2]);
pokedex.addPokemon(pokemon3);

console.log(pokedex.buscarCampo("tipo" , "fuego"));




PRUEBAS

let pikachu = new Pokemon("pikachu", 40, 120, "Electrico", 40, 30, 60, 100);
let pokemon2 = new Pokemon("pokemon2", 40, 120, "Electrico", 20, 30, 60, 100);
let pokemon3 = new Pokemon("pokemon3", 34, 123, "Fuego", 23, 12, 12, 120);

let pokedex = new Pokedex([pikachu, pokemon2]);
pokedex.addPokemon(pokemon3);

pokedex.buscarCampo("ataque" , 40);

console.log(pokedex.buscarCampo("HP", 100));


pokedex.buscarCampo("HP", 100);

let a: Pokemon[] = pokedex.buscarCampo("HP", 100);

a.forEach(element => {
    console.log(element.nombre);
});

console.log(pokedex.buscarCampo("ataque" , 40));

console.log(pokedex.buscarCampo("tipo" , "Fuego"));

pokedex.showPokedex();
pokedex.addPokemon(pokemon3);
pokedex.addPokemon(pikachu);
pokedex.showPokedex();
console.log(pokedex.buscarNombre("nose"));
pokedex.buscarNombre("pikachu")?.nombre;

*/

