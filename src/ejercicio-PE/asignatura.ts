import { Persona } from "./persona";
import { Estudiante } from "./estudiante";
import { Profesor } from "./profesor";

type alumNota = [Estudiante, number];

export class Asignatura {
    /**
     * Constructor para la clase Asignatura
     * @param _codigo - Codigo asignatura
     * @param _nombreAsig - nombre asignatura
     * @param _titulacion - nombre titulacion
     * @param _profesores - lista de profesores
     * @param _estudiantes - lista de alumnos
     * @param _nota - tupla estudiante nota
     */
    constructor(private _codigo: number, private _nombreAsig: string, private _titulacion: string, private _profesores: Profesor[], private _estudiantes: Estudiante[], private _nota: alumNota[]){}

    public get getCodigo() {
        return this._codigo;
    }

    public get getNombreAsig() {
        return this._nombreAsig;
    }

    get nota() {
        return this._nota;
    }


    public get getTitulacion() {
        return this._titulacion;
    }

    public get getProfesores() {
        return this._profesores;
    }

    public get getEstudiantes() {
        return this._estudiantes;
    }

    public set setCodigo(codigo: number) {
        this._codigo = codigo;
    }

    public set setAsignatura(asig: string) {
        this._nombreAsig = asig;
    }

    public set setTitulacion(titulacion: string) {
        this._titulacion = titulacion;
    }

    /**
     * Metodo que muestra la info de todos los profesores de la asignatura
     * @returns - info de todos los profesores de una asignatura
     */
    public infoProfesores(): string  {
        let result: string = "";

        this.getProfesores.forEach(element => {
            result += element.getInfo();
        });

        return result;
    }

    /**
     * Metodo que muestra la info de todos los estudiantes de la asignatura
     * @returns -  info de todos los estudiantes de una asignatura
     */
    public infoEstudiantes(): string  {
        let result: string = "";

        this.getEstudiantes.forEach(element => {
            result += element.getInfo();
        });

        return result;
    }

    /**
     * Metodo que filtra los profesores por nombre o correo
     * @param nombre - nombre o correo
     * @returns - profesores con ese nombre o correo
     */
    public searchProfesorNameMail(nombre: string): (Profesor)[] {
        let result: (Profesor)[] = [];

        this.getProfesores.forEach(element => {
            if (nombre === element.getNombre || nombre === element.getCorreo) {
                result.push(element);
            }
        });

        return result;
    }

    /**
     * Metodo que filtra los estudiantes por nombre o correo
     * @param nombre - nombre o correo
     * @returns - estudiantes con ese nombre o correo
     */
    public searchEstudianteNameMail(nombre: string): (Estudiante)[] {
        let result: (Estudiante)[] = [];

        this.getEstudiantes.forEach(element => {
            if (nombre === element.getNombre || nombre === element.getCorreo) {
                result.push(element);
            }
        });

        return result;
    }

    /**
     * Metodo que busca estudiantes por nota
     * @param nota - nota a buscar
     * @returns - lista de etudiantes con esa nota
     */
    public searchEstudianteNota(nota: number): (Estudiante)[] {
        let result: (Estudiante)[] = [];

        this.nota.forEach(element => {
            if (element[1] === nota) {
                result.push(element[0]);
            }
            
        });

        return result;
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


let profesor1 = new Profesor("profesor1", "apellidosP1", 1000, "correoProfesor1", "1700");
let profesor2 = new Profesor("profesor2", "apellidosP2", 1000, "correoProfesor2", "1800");
let profesor3 = new Profesor("profesor3", "apellidosP3", 1000, "correoProfesor3", "1900");
let profesor4 = new Profesor("profesor4", "apellidosP4", 1000, "correoProfesor4", "2000");
let profesor5 = new Profesor("profesor5", "apellidosP5", 1000, "correoProfesor5", "2100");
let profesor6 = new Profesor("profesor6", "apellidosP6", 1000, "correoProfesor6", "2200");
let profesor7 = new Profesor("profesor7", "apellidosP7", 1000, "correoProfesor7", "2300");
let profesor8 = new Profesor("profesor8", "apellidosP8", 1000, "correoProfesor8", "2400");
let profesor9 = new Profesor("profesor9", "apellidosP9", 1000, "correoProfesor9", "2500");

let asignatura1 = new Asignatura(1234, "nombreAsig1", "ing1", [profesor1, profesor2], [estudiante1, estudiante2], [[estudiante1,8], [estudiante2,10]]);
let asignatura2 = new Asignatura(5678, "nombreAsig2", "ing2", [profesor3, profesor4], [estudiante3, estudiante4], [[estudiante3,4], [estudiante4,6]]);


console.log(asignatura1.searchEstudianteNota(8));


