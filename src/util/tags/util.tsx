export const getDateTags = () => {
  const dates = [];
  const date = new Date();
  const year = date.getFullYear();
  for (let i = 2020; i <= year; i++) {
    dates.push({ id: i, name: i });
  }
  return dates.reverse();
};

export const initialMeta = {
  limit: 10,
  totalItems: 0,
  currentPage: 1,
  totalPages: 1,
};

export const initialTag = {
  nom_etiq: '',
  corr_etiq: 0,
  f_creacion: '',
  rut_usua: '',
  f_actualiz: '',
};

export const navigatorPage = (selected: string, isPage: boolean, setIsPage: any, onTags: any, onFilter: any, onSearch: any) => {
  if (selected === 'page' && isPage) {
    setIsPage(false);
    onTags();
  }
  if (selected === 'filter' && isPage) {
    setIsPage(false);
    onFilter();
  }
  if (selected === 'search' && isPage) {
    setIsPage(false);
    onSearch(null);
  }
};

export const validatePage = (first: any, page: any) => (first == 0 ? page : first);
