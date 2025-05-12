import { TableConfig } from "../../../shared/interfaces/table-config";

export const padelConfig: TableConfig = {
  columns: [
    {
      code: "equipo",
      label: "Equipo",
      type: "string"
    },
    {
      code: "set1",
      label: "Set-1",
      type: "number"
    },
    {
      code: "set2",
      label: "Set-2",
      type: "number"
    },
    {
      code: "set3",
      label: "Set-3",
      type: "number"
    },
    {
      code: "resultado",
      label: "Resultado",
      type: "number"
    },
  ]
}

export const classificationPadelConfig: TableConfig = {
  columns: [
    {
      code: "posicion",
      label: "Pos",
      type: "number"
    },
    {
      code: "puntos",
      label: "Ptos",
      type: "number"
    },
    {
      code: "jugador",
      label: "Jugador",
      type: "string"
    },
    {
      code: "gap",
      label: "Gap",
      type: "string"
    },
    {
      code: "posicionJuego",
      label: "Posicion de juego",
      type: "string"
    },
  ],
  isClassification: true
}
