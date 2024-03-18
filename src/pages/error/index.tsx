import { LockClosedIcon } from '@heroicons/react/20/solid';
import { Card } from 'flowbite-react';
import { useFade } from 'hooks/useFade';
import type { NextPage } from 'next';

const ErroPage: NextPage = () => {
  const [fadeProps] = useFade(true);
  return (
    <div className="flex flex-col justify-center background-color: bg-gray-100 items-center h-screen w-screen">
      <Card>
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-2xl font-bold mt-4">Acceso no autorizado</h1>
          <p className="text-gray-500 text-center mt-2">No tienes permisos para acceder a esta página</p>
        </div>
      </Card>
      <button
        className={'flex rounded-md p-2 mt-4 cursor-pointer hover:bg-dark-color text-dark-color hover:text-light-blue-color font-bold items-center gap-x-4'}
        onClick={() => {
          window.location.href = 'https://intranet.ufro.cl/portada.php';
        }}
        onKeyDown={(event) => {
          if (event.key === 'Enter') {
            window.location.href = 'https://intranet.ufro.cl/portada.php';
          }
        }}
      >
        <LockClosedIcon className="h-5 w-5" />
        <span className="">Ir a Portada Intranet</span>
      </button>
    </div>
  );
};

export default ErroPage;
