import { TableConfig } from "../../../shared/interfaces/table-config";

export const padelConfig: TableConfig = {
  columns: [
    {
      code: "player1_name",
      label: "Jugador-1",
      type: "string"
    },
     {
      code: "player2_name",
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
    {
      code: "points",
      label: "Puntos",
      type: "number"
    },
  ],
  isClassification: true
}

export const classificationPadelConfig: TableConfig = {
  columns: [
    {
      code: "position",
      label: "Pos",
      type: "number"
    },
    {
      code: "points",
      label: "Ptos",
      type: "number"
    },
    {
      code: "user_name",
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
