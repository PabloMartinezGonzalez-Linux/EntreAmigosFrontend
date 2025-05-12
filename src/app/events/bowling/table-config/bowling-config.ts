import { TableConfig } from "../../../shared/interfaces/table-config";

export const bowlingConfig: TableConfig = {
  columns: [
    {
      code: "nombre",
      label: "Nombre",
      type: "string"
    },
    {
      code: "puntuacion",
      label: "Puntuación",
      type: "number"
    }
  ]
}

export const bowlingConfigClassification: TableConfig = {
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
  ],
  isClassification: true
}
