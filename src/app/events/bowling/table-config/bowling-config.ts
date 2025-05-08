import { TableConfig } from "../../../shared/interfaces/table-config";

export const BowlingConfig: TableConfig = {
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
