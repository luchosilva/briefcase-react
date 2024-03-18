import { XCircleIcon } from '@heroicons/react/20/solid';
import { useState } from 'react';

interface TagPropsEditable {
  title: string;
  onClick: any;
  color: string;
}

interface TagProps {
  title: string;
}

interface TagColorProps extends TagProps {
  color: string;
}

export const Tag = ({ title }: TagProps) => {
  return <div className={'flex justify-center py-1 px-4 w-fit rounded-full capitalize font-bold text-center bg-blue-tags-color text-blue-color'}>{title}</div>;
};

export const TagColor = ({ title, color }: TagColorProps) => {
  return <div className={'flex justify-center py-1 px-4 m-auto w-fit rounded-full capitalize font-semibold text-center text-white ' + color}>{title}</div>;
};

export const TagEditable = ({ title, onClick, color }: TagPropsEditable) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className={'flex justify-center py-1 px-4 w-fit rounded-full capitalize font-bold text-center ' + color}>
      {title}
      <button
        className={'inline ml-2 rounded-full center'}
        onClick={() => {
          onClick();
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {isHovered ? <XCircleIcon className="flex relative rounded-full fill-red-500 h-4 w-4" /> : <XCircleIcon className="flex relative center rounded-full fill-gray-300 h-4 w-4" />}
      </button>
    </div>
  );
};
