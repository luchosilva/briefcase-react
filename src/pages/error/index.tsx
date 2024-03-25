import { Card } from 'flowbite-react';
import type { NextPage } from 'next';

const ErrorPage: NextPage = () => {
  return (
    <div className="flex flex-col justify-center background-color: bg-gray-100 items-center h-screen w-screen">
      <Card>
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-2xl font-bold mt-4">Acceso no autorizado</h1>
          <p className="text-gray-500 text-center mt-2">No tienes permisos para acceder a esta página</p>
        </div>
      </Card>
    </div>
  );
};

export default ErrorPage;
