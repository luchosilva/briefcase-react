import { Tag, TagColor } from '@components/Tag';
import { getColorForStatus } from '@containers/Color';
import { formatDate } from 'util/util';

export const orderTotalStatus = (data: any) => {
  return data?.sort((a: any, b: any) => {
    if (a.des_esconv === 'Total') return -1;
    if (b.des_esconv === 'Total') return 1;
    if (a.des_esconv === 'Nuevo') return -1;
    if (b.des_esconv === 'Nuevo') return 1;
    if (a.des_esconv === 'Activo') return -1;
    if (b.des_esconv === 'Activo') return 1;
    if (a.des_esconv === 'Caducado') return -1;
    if (b.des_esconv === 'Caducado') return 1;
  });
};

export const DroptypeAgreements = (data: any) => {
  return data?.map((item: any) => {
    return {
      id: item.cod_tipcnv,
      name: item.des_tipcnv,
    };
  });
};

export const DropStatusAgreements = (data: any) => {
  return data?.map((item: any, index: number) => {
    return {
      id: index,
      name: item.name,
    };
  });
};

export const DropTags = (data: any) => {
  return data?.map((item: any) => {
    return {
      id: item.corr_etiq,
      name: item.nom_etiq,
    };
  });
};

export const viewTags = (tags: any) => {
  if (tags.length == 1) {
    if (tags[0][0].length === 1) {
      return tagsOne(tags);
    } else {
      if (tags[0].length >= 2) {
        return tagsMoreTwo(tags[0]);
      } else {
        return tagsOne(tags[0]);
      }
    }
  }
  if (tags.length >= 2) {
    return tagsMoreTwo(tags);
  }
  return <div className="flex flex-wrap  gap-2 justify-center">{<Tag title={'Sin etiqueta'} />}</div>;
};

const tagsOne = (tags: any) => {
  return (
    <div className="flex flex-wrap  gap-2 justify-center">
      <Tag title={tags} />
    </div>
  );
};

const tagsMoreTwo = (tags: any) => {
  if (tags.length >= 2) {
    return (
      <div className="flex flex-wrap  gap-2 justify-center">
        <Tag title={tags[0]} />
        <Tag title={tags[1]} />
        {tags.length > 2 && <Tag title={`+${tags.length - 2}`} />}
      </div>
    );
  }
};

export const validData = (data: any, message: any, component?: any) => {
  if (data) {
    if (component) {
      return component;
    }
    return data;
  } else {
    return message;
  }
};

export const parseResolution = (nro_docum: any, ano_docum: any, cod_tipdoc: any) => {
  if (!nro_docum || !ano_docum || !cod_tipdoc) return 'Sin resolución';
  if (cod_tipdoc == 1) return `DE${nro_docum}/${ano_docum}`;
  if (cod_tipdoc == 2) return `RI${nro_docum}/${ano_docum}`;
  if (cod_tipdoc == 3) return `RE${nro_docum}/${ano_docum}`;
};

export const filterByCorrEtiqCallback = (array: any, otherArray: any) => {
  return array.filter(function (array_el: { corr_etiq: any }) {
    return (
      otherArray.filter(function (other_el: { corr_etiq: any }) {
        return other_el.corr_etiq === array_el.corr_etiq;
      }).length == 0
    );
  });
};

export const initialDetails = {
  corr_conv: 0,
  des_alconv: '',
  des_esconv: '',
  des_tipcnv: '',
  des_unidad: '',
  det_conve: '',
  fec_inicio: '',
  fec_ingreso: '',
  fec_termino: '',
  nom_apmate: '',
  nom_appate: '',
  nom_conve: '',
  nom_nombre: '',
  nom_orga: '',
  nro_docum: 0,
  para_acad: '',
  para_alum: '',
  para_noac: '',
  por_area: '',
  por_carrer: '',
  por_unidad: '',
  renov_auto: '',
  rut_respon: '',
  uni_extern: '',
  tags: [],
  participants: [],
  appliesTo: { units: [], programs: [], careers: [] },
};

export const information = (data: any) => {
  return [
    { title: 'Id', name: data.corr_conv ?? '' },
    { title: 'Fecha de Creación', name: formatDate(data.fec_inicio) },
  ];
};

export const summaryAgreements = (data: any) => {
  const nameTo = (data.nom_nombre ?? '') + ' ' + (data.nom_appate ?? '') + ' ' + (data.nom_apmate ?? '');
  return [
    { title: 'Nombre del Convenio', name: data.nom_conve ?? 'Sin información' },
    { title: 'Unidad que lo gestiona', name: data.des_unidad ?? 'Sin información' },
    { title: 'Fecha de inicio', name: formatDate(data.fec_inicio) ?? 'Sin información' },
    { title: 'Fecha de término', name: formatDate(data.fec_termino) ?? 'Sin información' },
    { title: 'Alcance del Convenio', name: data.des_alconv ?? 'Sin información' },
    { title: 'Estado del Convenio', name: data.des_esconv ? <TagColor title={data.des_esconv.toString()} color={getColorForStatus(data.des_esconv.toString())} /> : 'Sin información' },
    { title: 'Tipo del Convenio', name: data.des_tipcnv ?? 'Sin información' },
    { title: 'Dirigido a', name: nameTo ?? 'Sin información' },
    {
      title: 'Descripción',
      name: data.det_conve ?? 'Sin información',
      style: 'xl:col-span-2',
    },
  ];
};

export const externalOrg = (data: any) => {
  let renov_auto = '';
  if (data.renov_auto) renov_auto = data.renov_auto == 'S' ? 'Si' : 'No';

  return [
    { title: 'Nombre del organismo externo', name: data.nom_orga ?? 'Sin información' },
    { title: 'Unidad del organismo', name: data.uni_extern ?? 'Sin información' },
    { title: 'Renovación automática', name: renov_auto ?? 'Sin información' },
  ];
};

export const associatedDoc = (data: any) => {
  return [
    { title: 'Nombre del documento', name: data.nom_conve ?? 'Sin información' },
    { title: 'Año del documento', name: formatDate(data.fec_termino) ?? 'Sin información' },
    { title: 'Tipo de documento', name: data.des_tipcnv ?? 'Sin información' },
    { title: 'Unidad emisora', name: data.des_unidad ?? 'Sin información' },
  ];
};

export const responsible = (data: any) => {
  return [
    { title: 'Nombre', name: data.nom_nombre ?? 'Sin información' },
    { title: 'Primer Apellido', name: data.nom_appate ?? 'Sin información' },
    { title: 'Segundo Apellido', name: data.nom_apmate ?? 'Sin información' },
  ];
};

export const participants = (data: any) => {
  let current: any = [];
  if (data.participants?.length == 0) return [{ name: 'No hay participantes' }];
  data.participants?.map((item: any) => {
    let { rut_part, appate_part, apmate_part } = item;
    current.push({ rut_part, appate_part, apmate_part });
  });
  return current;
};

export const appliesTo = (data: any) => {
  let current: any = [];
  if (data.appliesTo?.programs.length == 0) return [{ name: 'No hay unidades aplicados' }];
  data.appliesTo?.programs?.map((item: any) => {
    let { cod_tippro, des_tippro } = item;
    current.push({ cod_tippro, des_tippro });
  });
  return current;
};

export const units = (data: any) => {
  let current: any = [];
  if (data.appliesTo?.units) return [{ name: 'No hay unidades asignadas' }];
  data.appliesTo?.units?.map((item: any) => {
    let { cod_unidad, des_unidad } = item;
    current.push({ cod_unidad, des_unidad });
  });
  return current;
};

export const tableGeneric = (item: any) =>
  Object.entries(item)?.map(([key, value]: any) =>
    key == 'id' ? (
      ''
    ) : (
      <td className="px-6 py-4" key={key}>
        {value}
      </td>
    )
  );
