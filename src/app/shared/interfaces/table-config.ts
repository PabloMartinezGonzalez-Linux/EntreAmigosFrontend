export interface TableColumn {
  code: string,
  label: string,
  type: "string" | "number"
}

export interface TableConfig {
  columns: TableColumn[],
  isClassification?: boolean
}
