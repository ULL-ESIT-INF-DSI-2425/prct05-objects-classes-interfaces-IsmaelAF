import { Cancion } from "./cancion";

export interface infoDisco {
    nombre: string;
    publicacion: number;
    canciones: Cancion[];
}

export class Disco implements infoDisco {

    constructor(public nombre: string, public publicacion: number, public canciones: Cancion[]) {}



}