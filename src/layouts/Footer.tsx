import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer items-center p-4 md:container md:mx-auto">
      <div className="items-center grid-flow-col">
        <a href="https://github.com/luchosilva" target="_blank">
          <FaGithub size={50} />
        </a>
      </div>
      <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
        <a href="https://www.linkedin.com/in/luis-silva-ufro-carahue/" target="_blank">
          <FaLinkedin size={50} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
