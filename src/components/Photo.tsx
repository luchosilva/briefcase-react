import Image from 'next/image';
import { useEffect, useState } from 'react';
import { UserIcon } from '@heroicons/react/20/solid';
import { useAppSelector } from '../redux/hooks/hooks';
import { selectAuth } from '../redux/auth/slices/authSlice';

const Photo = () => {
  const { user } = useAppSelector(selectAuth);
  const [photo, setPhoto] = useState<string>('');

  useEffect(() => {
    const { foto } = user;
    if (foto != '') {
      setPhoto(foto);
    }
  }, [user?.foto]);

  if (photo === '') return <UserIcon className="h-6" />;

  return <Image className="self-center justify-self-center object-contain" src={photo} alt="Foto" width={45} height={60} />;
};

export { Photo };
