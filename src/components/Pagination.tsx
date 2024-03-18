import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid';
import { duplicate } from 'util/util';

interface PaginationProps {
  numPages: number;
  page: number;
  setPage: any;
  setIsPage?: any;
}

const btnDefault = 'select-none flex items-center justify-center h-9 w-8 cursor-pointer rounded-md disabled:opacity-75';
const btnWhite = btnDefault + ' bg-white text-dark-color hover:bg-blue-400-color hover:text-white border-blue-color';
const btnCurrent = btnDefault + ' bg-blue-400-color text-white';

export const Pagination = ({ numPages = 1, page, setPage, setIsPage }: PaginationProps) => {
  const start = 1;
  const actual = page;
  const end = numPages;

  const leftActual = Math.max(actual - 2, start);
  const rightActual = Math.min(actual + 2, end);

  const showLeft = leftActual > 2;
  const showRight = rightActual < end - 1;

  const prevPage = () => {
    setIsPage(true);
    setPage(Math.max(actual - 1, start));
  };

  const nextPage = () => {
    setIsPage(true);
    setPage(Math.min(actual + 1, end));
  };

  const selectPage = async (num: number) => {
    setIsPage(true);
    setPage(num);
  };

  const buttonsPage = () => {
    // Caso 1 -> false false
    if (!showLeft && !showRight) return duplicate([start, leftActual, leftActual + 1, actual, rightActual - 1, rightActual, end]);

    // Caso 2 -> true false
    if (showLeft && !showRight) return duplicate([start, '...', leftActual, leftActual + 1, actual, rightActual - 1, rightActual, end]);

    // Caso 3 -> false true
    if (!showLeft && showRight) return duplicate([start, leftActual, leftActual + 1, actual, rightActual - 1, rightActual, '...', end]);

    // Caso 4 -> true true
    return [start, '...', leftActual, leftActual + 1, actual, rightActual - 1, rightActual, '...', end];
  };

  const btnFilter = (item: any, index: number) => {
    if (item == '...')
      return (
        <div className="px-3" key={index}>
          {item}
        </div>
      );

    if (page == item)
      return (
        <button onClick={() => selectPage(item)} className={btnCurrent} key={index}>
          {item}
        </button>
      );

    return (
      <button onClick={() => selectPage(item)} className={btnWhite} key={index}>
        {item}
      </button>
    );
  };

  if (numPages < 2) {
    return null;
  }

  return (
    <div className="flex justify-center p-2 mt-3">
      <div className="flex shadow-md rounded-md bg-white ">
        <button onClick={() => prevPage()} className="text-blue-400-color">
          <ChevronLeftIcon className="h-9 w-9" />
        </button>
        <div className="flex flex-wrap justify-center items-center px-1 select-none">{buttonsPage()?.map((item: any, index: number) => btnFilter(item, index))}</div>
        <button onClick={() => nextPage()} className="text-blue-400-color">
          <ChevronRightIcon className="h-9 w-9" />
        </button>
      </div>
    </div>
  );
};
