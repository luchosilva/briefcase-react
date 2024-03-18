import { useTranslation } from 'react-i18next';
import avatar from '../../assets/luis-silva.jpeg';
import Image from 'next/image';

const Profile = () => {
  const { t } = useTranslation('common');

  const redirectToEmail = () => {
    const url = new URL('mailto:luishernansilvaq@gmail.cl?subject=Contacto&body=Hola Luis, ...');
    window.open(url.href, '_blank');
  };

  return (
    <>
      <Image src={avatar} alt="avatar" className="rounded-full w-[30dvh] h-[30dvh] mx-auto" priority={false} />
      <h1 className="text-5xl font-bold">{t('title')}</h1>
      <p className="py-6">{t('description')}</p>
      <button className="btn btn-primary btn-xs sm:btn-sm md:btn-md lg:btn-lg" onClick={() => redirectToEmail()}>
        {t('contact-by-email')}
      </button>
    </>
  );
};

export default Profile;
