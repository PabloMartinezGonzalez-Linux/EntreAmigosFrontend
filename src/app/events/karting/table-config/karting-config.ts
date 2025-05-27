import { TableConfig } from '../../../shared/interfaces/table-config';

export const KartingConfig: TableConfig = {
  columns: [
    { code: 'position', label: 'Pos', type: 'number' },
    { code: 'user_name', label: 'Piloto', type: 'string' },
    { code: 'quick_lap', label: 'Vuelta Rápida', type: 'string' },
    { code: 'average_time', label: 'Tiempo Medio', type: 'string' },
    { code: 'points', label: 'Pts', type: 'number' },
  ],
  isClassification: true
};

export const KartingConfigClassification: TableConfig = {
  columns: [
    { code: 'position', label: 'Pos', type: 'number' },
    { code: 'points', label: 'Ptos', type: 'number' },
    { code: 'user_name', label: 'Piloto', type: 'string' },
    { code: 'gap', label: 'Gap', type: 'string' },
  ],
  isClassification: true,
};
