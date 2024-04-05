import { FaVuejs } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-center p-4 md:container md:mx-auto">
      <span className="text-2xl">¿Te gustaría ver mi portafolio en Vue.js?</span>
      <a href="https://luchosilva.github.io/briefcase-vue/" target="_blank">
        <FaVuejs size={50} />
      </a>
    </footer>
  );
};

export default Footer;
