import { describe, expect, test } from "vitest";
import { Estudiante } from "../../src/ejercicio-PE/estudiante"


let estudiante1 = new Estudiante("estudiante1", "apellidos1", 2020, "correoEstudiante1");

describe("Tests clase estudiante", () => {
    
    test("", () => {
      expect(estudiante1.getNombre).toBe("estudiante1");
    });

    test("", () => {
        expect(estudiante1.getApellidos).toBe("apellidos1");
      });

      test("", () => {
        expect(estudiante1.getNacimiento).toBe(2020);
      });

      test("", () => {
        expect(estudiante1.getCorreo).toBe("correoEstudiante1");
      });


      test("", () => {
        estudiante1.setCorreo = "correoMod1"
        expect(estudiante1.getCorreo).toBe("correoMod1");
      });

    
      test("", () => {
        expect(estudiante1.getInfo()).toBe(`
        Nombre: estudiante1
        Apellidos: apellidos1
        Nacimiento: 2020
        Correo: correoMod1
        `);
      });

      test("", () => {
        estudiante1.setNombre = "nombre1"
        expect(estudiante1.getNombre).toBe("nombre1");
      });

      test("", () => {
        estudiante1.setApellidos = "apellidos1"
        expect(estudiante1.getApellidos).toBe("apellidos1");
      });

      test("", () => {
        estudiante1.setNacimiento = 1000
        expect(estudiante1.getNacimiento).toBe(1000);
      });




  
  });