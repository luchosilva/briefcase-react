import Swal from 'sweetalert2';
import { removePermission } from './auth/auth';

export const duplicate = (data: any) => data.filter((item: any, index: number) => data.indexOf(item) === index);

export const fakeTable = (numCols: number, numRows: number) => {
  let table = [];
  let list = [];
  for (let i = 0; i < numCols; i++) {
    table.push(<td key={i} className="px-3 py-6 h-7"></td>);
  }
  for (let i = 0; i < numRows; i++) {
    list.push(
      <tr key={i} className="even:bg-light-color hover:bg-light-blue-color">
        {table}
      </tr>
    );
  }
  return list;
};

export const firstPage = (isPage: boolean, setPage: any) => {
  let current = 0;
  if (!isPage) {
    setPage(1);
    current = 1;
  }
  return current;
};

export const formatDate = (date: any) => {
  if (date) {
    let newDate = new Date(date);
    const [day, month, year] = [newDate.getDate(), newDate.getMonth() + 1, newDate.getFullYear()];
    return `${day}/${month}/${year}`;
  }
  return '';
};

export const responseStatus = (response: any, router: any, dispatch: any) => {
  if (response.status === 500) Swal.fire('Error', 'Error en el servidor', 'error');
  if (response.status === 401 || response.status === 403) removePermission(router, response.status, dispatch);
};

export const validateFilter = (url: string, body: any) => {
  if (body.category !== 'Categoría') url += `&category=${body.category}`;
  if (body.status !== 'Estado') url += `&state=${body.status}`;
  if (body.startDate.init !== '--/--/----' && body.startDate.end !== '--/--/----') {
    let encodeDate = encodeURIComponent(`{"init": "${body.startDate.init}", "end": "${body.startDate.end}"}`);
    url += `&start_date=${encodeDate}`;
  }
  if (body.endDate.init !== '--/--/----' && body.endDate.end !== '--/--/----') {
    let encodeDate = encodeURIComponent(`{"init": "${body.endDate.init}", "end": "${body.endDate.end}"}`);
    url += `&end_date=${encodeDate}`;
  }
  if (body.search !== '') url += `&search=${body.search}`;
  return url;
};
