import { describe, expect, test } from "vitest";
import { Pokedex } from "../src/ejercicio-1/pokedex"
import { tipoPokemon, datosPokemon } from "../src/ejercicio-1/pokemon";
import { Pokemon } from "../src/ejercicio-1/pokemon";

let pikachu = new Pokemon("pikachu", 50, 130, "electrico", 40, 40, 50, 200);
let pokedex = new Pokedex([pikachu]);
let charmander = new Pokemon("charmander", 40, 120, "fuego", 20, 30, 60, 100);


describe("Tests clase Pokedex", () => {

    test("", () => {
      expect(pokedex.showPokedex()).toBe(`Nombre: pikachu
        Peso: 50
        Altura: 130
        Tipo: electrico
        Ataque: 40
        Defensa: 40
        Velocidad: 50
        HP: 200`);
    });

    test("", () => {
        pokedex.addPokemon(charmander);
      expect(pokedex.buscarNombre("charmander")).toBe(charmander);
    });

    test("", () => {
        pokedex.addPokemon(charmander);
      expect(pokedex.buscarCampo("nombre", "charmander")).toEqual([charmander]);
    });
    test("", () => {
        pokedex.addPokemon(charmander);
      expect(pokedex.buscarCampo("peso", 40)).toEqual([charmander]);
    });
    test("", () => {
        pokedex.addPokemon(charmander);
      expect(pokedex.buscarCampo("altura", 120)).toEqual([charmander]);
    });
    test("", () => {
        pokedex.addPokemon(charmander);
      expect(pokedex.buscarCampo("tipo", "fuego")).toEqual([charmander]);
    });
    test("", () => {
        pokedex.addPokemon(charmander);
      expect(pokedex.buscarCampo("ataque", 20)).toEqual([charmander]);
    });
    test("", () => {
        pokedex.addPokemon(charmander);
      expect(pokedex.buscarCampo("defensa", 30)).toEqual([charmander]);
    });
    test("", () => {
        pokedex.addPokemon(charmander);
      expect(pokedex.buscarCampo("velocidad", 60)).toEqual([charmander]);
    });
    test("", () => {
        pokedex.addPokemon(charmander);
      expect(pokedex.buscarCampo("HP", 100)).toEqual([charmander]);
    });

    
    



    /*test("showStats() returns all stats", () => {
      expect(pikachu.showStats()).toBe(`Nombre: pikachu
        Peso: 40
        Altura: 120
        Tipo: electrico
        Ataque: 40
        Defensa: 30
        Velocidad: 60
        HP: 100`);
    });*/

  
  });