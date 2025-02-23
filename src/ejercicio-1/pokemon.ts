export type tipoPokemon = 'fuego' | 'agua' | 'electrico' | 'hierba' ;

export interface datosPokemon {
    nombre: string;
    peso: number;
    altura: number;
    tipo: tipoPokemon;
    ataque: number;
    defensa: number;
    velocidad: number;
    HP: number;
}

export class Pokemon implements datosPokemon{

    constructor(
        public readonly nombre: string, 
        public readonly peso: number, 
        public readonly altura: number, 
        public readonly tipo: tipoPokemon, 
        public readonly ataque: number, 
        public readonly defensa: number,
        public readonly velocidad: number,
        public readonly HP: number
    ) {
        //if (ataque <= 0 || defensa <= 0 || velocidad <= 0 || HP <= 0) {
        //    throw new Error("Las estadísticas deben ser mayores que 0");
        //}
    }

    showStats(): string {
        return `Nombre: ${this.nombre}
        Peso: ${this.peso}
        Altura: ${this.altura}
        Tipo: ${this.tipo}
        Ataque: ${this.ataque}
        Defensa: ${this.defensa}
        Velocidad: ${this.velocidad}
        HP: ${this.HP}`;
    }





}
//let pikachu = new Pokemon("pikachu", 40, 120, "electrico", 40, 30, 60, 100);
//console.log(pikachu.showStats());


//let pikachu = new Pokemon("pikachu", 40, 120, "electrico", 40, 30, 60, 100);
//let pokemon2 = new Pokemon("pokemon2", 40, 120, "fuego", 20, 30, 60, 100);

//console.log(pikachu.ataque);

//pikachu.showStats();
//pokemon2.showStats();

