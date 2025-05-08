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
