import { TableConfig } from "../../../shared/interfaces/table-config";

export const padelConfig: TableConfig = {
  columns: [
    {
      code: "player1",
      label: "Jugador-1",
      type: "string"
    },
     {
      code: "player2",
      label: "Jugador-2",
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
  ],
  isClassification: true
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
    }
  ],
  isClassification: true
}
