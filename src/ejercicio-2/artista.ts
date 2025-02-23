import { Disco } from "./disco";

export interface infoArtista {
    nombre: string;
    oyentes: number;
    discografia: Disco[];
}

export class Artista implements infoArtista {
    constructor(public nombre: string, public oyentes: number, public discografia: Disco[]) {}


}