export const getColorForStatus = (cod_coltxt: string) => {
  if (cod_coltxt === 'Nuevo') return 'bg-green-color';
  if (cod_coltxt === 'Activo') return 'bg-blue-color';
  if (cod_coltxt === 'Por Caducar') return 'bg-yellow-color';
  if (cod_coltxt === 'Caducado') return 'bg-red-color';
  return 'bg-orange-color';
};

export const getColorForTotal = (cod_coltxt: string) => {
  if (cod_coltxt === 'Total') return 'bg-light-blue-color';
  if (cod_coltxt === 'Nuevo') return 'bg-light-green-color';
  if (cod_coltxt === 'Activo') return 'bg-light-purple-color';
  if (cod_coltxt === 'Por Caducar') return 'bg-light-yellow-color';
  if (cod_coltxt === 'Caducado') return 'bg-light-red-color';
  return 'bg-light-orange-color';
};

export const getColorForTotalActive = (cod_coltxt: string) => {
  if (cod_coltxt === 'Total') return 'text-blue-color';
  if (cod_coltxt === 'Nuevo') return 'text-green-color';
  if (cod_coltxt === 'Activo') return 'text-purple-color';
  if (cod_coltxt === 'Por Caducar') return 'text-yellow-color';
  if (cod_coltxt === 'Caducado') return 'text-red-color';
  return 'text-orange-color';
};

export const getColorForStatusTag = (cod_coltxt: string) => {
  if (cod_coltxt === 'Activo') return 'bg-green-color';
  if (cod_coltxt === 'Inactivo') return 'bg-yellow-color';
  return 'bg-gray-color';
};
