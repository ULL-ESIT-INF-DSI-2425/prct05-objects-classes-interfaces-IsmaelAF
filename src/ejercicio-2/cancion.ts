export interface infoCancion {
    nombre: string;
    duracion: number;
    genero: string;
    single: boolean;
    reproducciones: number; 
}

export class Cancion implements infoCancion {
    constructor(public nombre: string, public duracion: number, public genero: string, public single: boolean, public reproducciones: number) {}

}