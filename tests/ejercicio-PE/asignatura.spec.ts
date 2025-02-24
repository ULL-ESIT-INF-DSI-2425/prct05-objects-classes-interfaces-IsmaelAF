import { describe, expect, test } from "vitest";
import { Estudiante } from "../../src/ejercicio-PE/estudiante"
import { Profesor } from "../../src/ejercicio-PE/profesor";
import { Asignatura } from "../../src/ejercicio-PE/asignatura";



let estudiante1 = new Estudiante("estudiante1", "apellidos1", 2020, "correoEstudiante1");
let profesor1 = new Profesor("profesor1", "apellidosP1", 1000, "correoProfesor1", "1700");
let asignatura1 = new Asignatura(1234, "nombreAsig1", "ing1", [profesor1], [estudiante1], [[estudiante1,8]]);

describe("Tests clase estudiante", () => {
    
    test("", () => {
      expect(estudiante1.getNombre).toBe("estudiante1");
    });


  
  });