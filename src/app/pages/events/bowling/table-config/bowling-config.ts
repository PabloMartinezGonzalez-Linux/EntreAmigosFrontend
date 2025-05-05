import { TableConfig } from "../../../../shared/interfaces/table-config";

export const BowlingConfig: TableConfig = {
  columns: [
    {code: "posicion", label:"Pos", type:"number"},
    {code: "equipo1", label:"Equipo 1", type:"string"},
    {code: "equipo2", label:"Equipo 2", type:"string"},
    {code: "set1", label:"Set 1", type:"string"},
    {code: "set2", label:"Set 2", type:"string"},
    {code: "set3", label:"Set 3", type:"string"},
    {code: "resultado", label:"Resultado", type:"string"}
  ]
}
