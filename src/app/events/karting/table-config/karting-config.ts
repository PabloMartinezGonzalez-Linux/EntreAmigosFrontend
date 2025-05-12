import { TableConfig } from '../../../shared/interfaces/table-config';

export const KartingConfig: TableConfig = {
  columns: [
    { code: 'posicion', label: 'Pos', type: 'number' },
    { code: 'name', label: 'Piloto', type: 'string' },
    { code: 'vueltaRapida', label: 'Vuelta Rápida', type: 'string' },
    { code: 'tiempoMedio', label: 'Tiempo Medio', type: 'string' },
  ],
  isClassification: true
};

export const KartingConfigClassification: TableConfig = {
  columns: [
    { code: 'posicion', label: 'Pos', type: 'number' },
    { code: 'puntos', label: 'Ptos', type: 'number' },
    { code: 'name', label: 'Piloto', type: 'string' },
    { code: 'equipo', label: 'Equipo', type: 'string' },
    { code: 'gap', label: 'Gap', type: 'string' },
    { code: 'mejorCircuito', label: 'Mejor Circuito', type: 'string' },
  ],
  isClassification: true,
};
