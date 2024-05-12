import { useTranslation } from 'react-i18next';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';
import avatar from '../../assets/luis-silva.jpeg';
import Image from 'next/image';

const Profile = () => {
  const { t } = useTranslation('common');

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-3">
      <Image src={avatar} alt="avatar" className="rounded-full w-[30dvh] h-[30dvh] md:w-[50dvh] md:h-[50dvh] mx-auto" priority={false} />
      <div className="flex flex-col">
        <h1 className="text-xl md:text-5xl font-bold">{t('title')}</h1>
        <p className="py-6">{t('description')}</p>
        <div className="flex items-center justify-around p-5 gap-5">
          <a href="https://github.com/luchosilva" target="_blank">
            <FaGithub size={50} />
          </a>
          <a href="https://www.linkedin.com/in/luis-silva-ufro-carahue/" target="_blank">
            <FaLinkedin size={50} />
          </a>
          <a href="mailto:luishernansilvaq@gmail.cl?subject=Contacto&body=Hola Luis, ..." target="_blank">
            <HiMail size={50} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Profile;
