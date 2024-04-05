import { useTranslation } from 'react-i18next';

const Timeline = () => {
  const { t } = useTranslation('landing');

  const projects: any[] = t('projects', { returnObjects: true });

  const isParNumber = (num: number) => num % 2 === 0;

  return (
    <div>
      <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
        {projects.map((project: any, index: number) => (
          <li key={project.name}>
            <div className="timeline-middle">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            {isParNumber(index) ? (
              <div className="timeline-start md:text-end mb-10">
                <time className="font-mono italic">{project.range}</time>
                <div className="text-lg font-black">{project.name}</div>
                {project.description?.split('\n').map((item: string, index: number) => <p key={index + item.slice(0, 5)}>{item}</p>)}
              </div>
            ) : (
              <div className="timeline-end md:text-start mb-10">
                <time className="font-mono italic">{project.range}</time>
                <div className="text-lg font-black">{project.name}</div>
                {project.description?.split('\n').map((item: string, index: number) => <p key={index + item.slice(0, 5)}>{item}</p>)}
              </div>
            )}
            {index !== projects.length - 1 && <hr className="bg-primary" />}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Timeline;
