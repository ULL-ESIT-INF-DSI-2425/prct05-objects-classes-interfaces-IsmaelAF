export abstract class Persona {

    /**
     * Constructor para clase Persona
     * @param _nombre - nombre persona
     * @param _apellidos - apellidos persona
     * @param _fechaNacimiento - nacimiento persona
     */
    constructor(private _nombre: string, private _apellidos: string, private _fechaNacimiento: number){}

    /**
     * Metodo abstracto
     */
    abstract getInfo(): string; 
    
    public get getNombre() {
        return this._nombre;
    }

    public get getApellidos() {
        return this._apellidos;
    }

    public get getNacimiento() : number {
        return this._fechaNacimiento;
    }

    
    public set setNombre(nombre: string) {
        this._nombre = nombre;
    }

    public set setApellidos(apellidos: string) {
        this._apellidos = apellidos;
    }

    public set setNacimiento(nacimiento: number) {
        this._fechaNacimiento = nacimiento;
    }
    
    
}

//let persona1 = new Persona("nombre1", "apellido1", 2021);



//console.log(persona1.getNombre);
//persona1.setNombre = "nombre2";
//console.log(persona1.getNombre);
