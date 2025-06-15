export interface TableColumn {
  code: string,
  label: string,
  type: "string" | "number"
}

// TODO : key
export interface TableConfig {
  columns: TableColumn[],
  isClassification?: boolean

}
