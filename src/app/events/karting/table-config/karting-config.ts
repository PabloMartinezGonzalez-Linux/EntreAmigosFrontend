import { TableConfig } from '../../../shared/interfaces/table-config';

export const KartingConfig: TableConfig = {
  columns: [
    { code: 'position', label: 'Pos', type: 'number' },
    { code: 'name', label: 'Piloto', type: 'string' },
    { code: 'quickLap', label: 'Vuelta Rápida', type: 'string' },
    { code: 'averageTime', label: 'Tiempo Medio', type: 'string' },
  ],
  isClassification: true
};

export const KartingConfigClassification: TableConfig = {
  columns: [
    { code: 'position', label: 'Pos', type: 'number' },
    { code: 'points', label: 'Ptos', type: 'number' },
    { code: 'user_name', label: 'Piloto', type: 'string' },
    { code: 'team', label: 'Equipo', type: 'string' },
    { code: 'gap', label: 'Gap', type: 'string' },
    { code: 'best_circuit', label: 'Mejor Circuito', type: 'string' },
  ],
  isClassification: true,
};
