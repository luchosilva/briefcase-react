import { useEffect, useRef, useState } from 'react';

interface AutocompleteProps {
  value: any;
  onChange: any;
  items: any;
  onClick?: any;
}

interface TagT {
  corr_etiq: number;
  nom_etiq: string;
}

export const Autocomplete = ({ value, onChange, items, onClick }: AutocompleteProps) => {
  const [showItems, setShowItems] = useState(false);
  const ref: any = useRef(null);

  const selectItem = (item: TagT) => {
    onClick(item);
    onChange('');
    setShowItems(false);
  };

  let filteredItems = items?.filter((item: TagT) => item.nom_etiq?.includes(value));

  useEffect(() => {
    const listener = (e: { target: any }) => {
      if (ref.current != null && !ref.current.contains(e.target)) {
        setShowItems(false);
      }
    };
    document.addEventListener('click', listener);
    return () => {
      document.removeEventListener('click', listener);
    };
  }, []);
  return (
    <div className="inline relative w-full md:w-64" ref={ref}>
      <input
        className="placeholder-slate-400 rounded-md text-sm border-gray-color h-9 w-full md:w-64"
        type="text"
        placeholder="Nombre de etiqueta"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => setShowItems(true)}
      />
      {showItems && (
        <ul className="absolute max-h-[152px] overflow-x-hidden z-10 mt-2 w-52 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-md ring-1 ring-black ring-opacity-5` ">
          {filteredItems?.map((item: TagT) => (
            <li className="hover:bg-light-blue-color group flex w-full items-center rounded-md px-2 py-2 text-sm text-left" key={item.corr_etiq} onClick={() => selectItem(item)}>
              {item.nom_etiq}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
