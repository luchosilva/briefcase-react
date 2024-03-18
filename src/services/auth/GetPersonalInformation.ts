import { getApiUrl } from 'config';

export interface PersonalInformation {
  cod_ficha: number;
  foto: string;
  cta_email: string;
  nombre: string;
}

const getPersonalInformation = async (rut_usua: string) => {
  if (rut_usua === '') {
    return {
      cod_ficha: 0,
      foto: '',
      cta_email: '',
      nombre: '',
    };
  }
  try {
    const options: RequestInit = {
      method: 'POST',
      headers: {
        Accept: '*/*',
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify({ rut: rut_usua }),
    };
    return await fetch(getApiUrl('/auth/getUser'), options).then((res) => res.json() as Promise<PersonalInformation>);
  } catch (error) {
    return {
      cod_ficha: 0,
      foto: '',
      cta_email: '',
      nombre: '',
    };
  }
};

export default getPersonalInformation;
