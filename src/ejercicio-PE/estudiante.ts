import { Persona } from "./persona";

/**
 * Clase Estudiante
 */
export class Estudiante extends Persona {
    private _correoElec: string;

    /**
     * Constructor para la clase Estudiante
     * @param _nombre - nombre del estudiante
     * @param _apellidos - apellidos estudiante
     * @param _fechaNacimiento - fecha estudiante
     * @param _correo - correo
     */
    constructor(_nombre: string, _apellidos: string, _fechaNacimiento: number, _correo: string){
        super(_nombre, _apellidos, _fechaNacimiento);
        this._correoElec = _correo;
    }

    /**
     * metodo que devuelve info de los estudiantes
     * @returns - info de los estudiantes
     */
    getInfo(): string {
        return `
        Nombre: ${this.getNombre}
        Apellidos: ${this.getApellidos}
        Nacimiento: ${this.getNacimiento}
        Correo: ${this.getCorreo}
        `;
    }

    public get getCorreo() {
        return this._correoElec;
    }

    public set setCorreo(correo: string) {
        this._correoElec = correo;
    }

}

let estudiante1 = new Estudiante("estudiante1", "apellidos1", 2020, "correoEstudiante1");
let estudiante2 = new Estudiante("estudiante2", "apellidos2", 2020, "correoEstudiante2");
let estudiante3 = new Estudiante("estudiante3", "apellidos3", 2020, "correoEstudiante3");
let estudiante4 = new Estudiante("estudiante4", "apellidos4", 2020, "correoEstudiante4");
let estudiante5 = new Estudiante("estudiante5", "apellidos5", 2020, "correoEstudiante5");
let estudiante6 = new Estudiante("estudiante6", "apellidos6", 2020, "correoEstudiante6");
let estudiante7 = new Estudiante("estudiante7", "apellidos7", 2020, "correoEstudiante7");
let estudiante8 = new Estudiante("estudiante8", "apellidos8", 2020, "correoEstudiante8");
let estudiante9 = new Estudiante("estudiante9", "apellidos9", 2020, "correoEstudiante9");
