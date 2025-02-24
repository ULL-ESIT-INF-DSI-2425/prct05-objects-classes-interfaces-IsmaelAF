import { describe, expect, test } from "vitest";
import { Profesor } from "../../src/ejercicio-PE/profesor"


let profesor1 = new Profesor("profesor1", "apellidosP1", 1000, "correoProfesor1", "1700");

describe("Tests clase profesor", () => {
    
    test("", () => {
      expect(profesor1.getNombre).toBe("profesor1");
    });

    test("", () => {
        expect(profesor1.getApellidos).toBe("apellidosP1");
      });

      test("", () => {
        expect(profesor1.getNacimiento).toBe(1000);
      });

      test("", () => {
        expect(profesor1.getCorreo).toBe("correoProfesor1");
      });

      test("", () => {
        expect(profesor1.getHorario).toBe("1700");
      });

      test("", () => {
        profesor1.setHorario = "1800"
        expect(profesor1.getHorario).toBe("1800");
      });

      test("", () => {
        profesor1.setCorreo = "correoMod1"
        expect(profesor1.getCorreo).toBe("correoMod1");
      });

      test("", () => {
        expect(profesor1.getInfo()).toBe(`
        Nombre: profesor1
        Apellidos: apellidosP1
        Nacimiento: 1000
        Correo: correoMod1
        Horario: 1800
        `);
      });

      



   

  
  });