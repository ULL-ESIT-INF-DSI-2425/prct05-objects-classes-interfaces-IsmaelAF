import { describe, expect, test } from "vitest";
import { Pokemon } from "../src/ejercicio-1/pokemon"
import { Combat } from "../src/ejercicio-1/combat"
import { tipoPokemon } from "../src/ejercicio-1/pokemon";

let pikachu = new Pokemon("pikachu", 40, 120, "electrico", 40, 30, 60, 100);
let charmander = new Pokemon("charmander", 40, 120, "fuego", 20, 20, 60, 120);


let combate = new Combat(pikachu, charmander); 
let combate2 = new Combat(charmander, pikachu);

describe("Tests clase pokemon", () => {
    
    test("", () => {
      expect(combate.calcularAtaque(pikachu, charmander)).toBe(100);
    });

    test("", () => {
        expect(combate.start()).toBe("El ganador es: pikachu");
      });

    test("", () => {
      expect(combate2.start()).toBe("El ganador es: pikachu");
    });



    test("showStats() returns all stats", () => {
      expect(pikachu.showStats()).toBe(`Nombre: pikachu
        Peso: 40
        Altura: 120
        Tipo: electrico
        Ataque: 40
        Defensa: 30
        Velocidad: 60
        HP: 100`);
    });

  
  });
