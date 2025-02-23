import { Artista } from "./artista";
import { Cancion } from "./cancion";
import { Disco } from "./disco";

export class BibliotecaMusical {

    constructor(public artista: Artista[]){}

    addArtista(artistaNuevo: Artista): Boolean {
        let encontrado: Boolean = false;

        this.artista.forEach(element => {
            if(artistaNuevo.nombre === element.nombre) {
                encontrado = true;
            }

        });

        if(!encontrado) {
            this.artista.push(artistaNuevo);
        }

        return encontrado;

    }

    informacion(): unknown[] {
        let table: unknown[] = [];

        this.artista.forEach(artistaP => {
            artistaP.discografia.forEach(discoP => {
                discoP.canciones.forEach(cancionP => {
                    table.push({
                        Nombre: artistaP.nombre,
                        Oyentes: artistaP.oyentes,
                        Disco: discoP.nombre,
                        Publicacion: discoP.publicacion,
                        Cancion: cancionP.nombre,
                        Duracion: cancionP.duracion,
                        Genero: cancionP.genero,
                        Single: cancionP.single,
                        Reproducciones: cancionP.reproducciones

                    })
                });
                
            });
        });


        console.table(table);
        return table;
        
    }

    buscarArtista(nombre: string): unknown[] {
        let table: unknown[] = [];

        this.artista.forEach(element => {
            if(nombre === element.nombre) {
                table.push(element);
            }
        });

        console.table(table);
        return table;
    }

    buscarDisco(nombre: string): unknown[] {
        let table: unknown[] = [];

        this.artista.forEach(artistaP => {
            artistaP.discografia.forEach(element => {
                if(nombre === element.nombre) {
                    table.push(element);
                }
            });
        });

        console.table(table);
        return table;
    }

    buscarCancion(nombre: string): unknown[] {
        let table: unknown[] = [];

        this.artista.forEach(artistaP => {
            artistaP.discografia.forEach(discoP => {
                discoP.canciones.forEach(element => {
                    if(nombre === element.nombre) {
                        table.push(element);
                    }
                });
            });
        });

        console.table(table);
        return table;
    }

    numCancionesDisco(nombre:string):number | undefined {
        let result: number | undefined = undefined;
        let encontrado: boolean = false;

        this.artista.forEach(artistaP => {
            artistaP.discografia.forEach(element => {
                if (nombre === element.nombre) {
                    encontrado = true;
                    result = element.canciones.length;
                    //return element.canciones.length;
                }
                //console.log(element.canciones.length);
            });
        });
        return encontrado ? result : undefined;

    }

    duracionDisco(nombre: string): number | undefined {
        let result: number = 0;
        let encontrado: boolean = false;
        this.artista.forEach(artistaP => {
            artistaP.discografia.forEach(discoP => {
                if (nombre === discoP.nombre) {
                    encontrado = true;
                    discoP.canciones.forEach(element => {
                        result += element.duracion;
                    });
                    //result += element.canciones;
                    //return element.canciones.length;
                }
                //console.log(element.canciones.length);
            });
        });
        return encontrado ? result : undefined;

    }

    reproduccionesDisco(nombre: string): number | undefined {
        let result: number = 0;
        let encontrado: boolean = false;
        this.artista.forEach(artistaP => {
            artistaP.discografia.forEach(discoP => {
                if (nombre === discoP.nombre) {
                    encontrado = true;
                    discoP.canciones.forEach(element => {
                        result += element.reproducciones;
                    });
                    //result += element.canciones;
                    //return element.canciones.length;
                }
                //console.log(element.canciones.length);
            });
        });
        return encontrado ? result : undefined;

    }
    

}


/*
let cancion1 = new Cancion("NombreCancion1", 123, "rock", true, 444);
let cancion2 = new Cancion("NombreCancion2", 456, "pop", false, 777);
let cancion3 = new Cancion("NombreCancion3", 789, "rap", true, 888);

let disco1 = new Disco("NombreDisco1", 2023, [cancion1, cancion2]);
let disco2 = new Disco("NombreDisco2", 2000, [cancion3]);

let artista1 = new Artista("NombreArtista1" , 111, [disco1]);
let artista2 = new Artista("NombreArtista2" , 222, [disco2]);

let BibliotecaMusical1 = new BibliotecaMusical([artista1, artista2]);

BibliotecaMusical1.buscarArtista("NombreArtista1");

//console.log(BibliotecaMusical1.reproduccionesDisco("NombreDisco3"));


*/




