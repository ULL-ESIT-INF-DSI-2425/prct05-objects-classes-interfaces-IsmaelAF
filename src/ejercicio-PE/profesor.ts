import { Persona } from "./persona";


export class Profesor extends Persona {
    private _correoElec: string;
    private _horario: string;

    /**
     * Constructor para la clase profesor
     * @param _nombre - nombre profesor
     * @param _apellidos - apellidos profesor
     * @param _fechaNacimiento - nacimiento profesor
     * @param _correo  - correo del profesor
     * @param _horarioTutoria - horario del profesor
     */
    constructor(_nombre: string, _apellidos: string, _fechaNacimiento: number, _correo: string, _horarioTutoria: string){
        super(_nombre, _apellidos, _fechaNacimiento);
        this._correoElec = _correo;
        this._horario = _horarioTutoria;
    }

    /**
     * Info del profesor
     * @returns - Toda la informacion del profesor
     */
    getInfo(): string {
        return `
        Nombre: ${this.getNombre}
        Apellidos: ${this.getApellidos}
        Nacimiento: ${this.getNacimiento}
        Correo: ${this.getCorreo}
        Horario: ${this.getHorario}
        `;
    }

    public get getHorario() {
        return this._horario;
    }

    public get getCorreo() {
        return this._correoElec;
    }

    public set setCorreo(correo: string) {
        this._correoElec = correo;
    }

    public set setHorario(horario: string) {
        this._horario = horario;
    }

    

}

let profesor1 = new Profesor("profesor1", "apellidosP1", 1000, "correoProfesor1", "1700");
let profesor2 = new Profesor("profesor2", "apellidosP2", 1000, "correoProfesor2", "1800");
let profesor3 = new Profesor("profesor3", "apellidosP3", 1000, "correoProfesor3", "1900");
let profesor4 = new Profesor("profesor4", "apellidosP4", 1000, "correoProfesor4", "2000");
let profesor5 = new Profesor("profesor5", "apellidosP5", 1000, "correoProfesor5", "2100");
let profesor6 = new Profesor("profesor6", "apellidosP6", 1000, "correoProfesor6", "2200");
let profesor7 = new Profesor("profesor7", "apellidosP7", 1000, "correoProfesor7", "2300");
let profesor8 = new Profesor("profesor8", "apellidosP8", 1000, "correoProfesor8", "2400");
let profesor9 = new Profesor("profesor9", "apellidosP9", 1000, "correoProfesor9", "2500");