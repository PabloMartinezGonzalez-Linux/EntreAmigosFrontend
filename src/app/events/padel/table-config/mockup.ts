import { PadelClassification, PadelEvent } from "../interfaces/padel.interface";

export const dataPadel: PadelEvent[] = [
  {
    id: "asdas",
    equipo: "Pablo/Bodalo",
    set1: 6,
    set2: 4,
    set3: 6,
    resultado: 2,
  },
  {
    id: "aa55a2",
    equipo: "Alex/Ruben",
    set1: 4,
    set2: 6,
    set3: 4,
    resultado: 1,
  }
]

export const dataPadelClassification: PadelClassification[] = [
  {
    id: "aa55gfg5a2",
    posicion: 1,
    puntos: 25,
    jugador: "Pablo",
    gap: "",
    posicionJuego: "Revés"
  },
  {
    id: "asdasdaffsdgs",
    posicion: 2,
    puntos: 10,
    jugador: "Pablo",
    gap: "-25",
    posicionJuego: "Derecho"
  }
]

