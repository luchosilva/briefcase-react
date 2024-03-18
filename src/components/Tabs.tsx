import { useEffect, useState } from 'react';
import { Tab } from '@headlessui/react';

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ');
}

interface TabsProps {
  children: any;
  headerList: any;
  setActiveList: any;
}

interface HeaderT {
  nom_lista: string;
  corr_list: number;
  cant_convs: number;
}

const Tabs = ({ children, headerList, setActiveList }: TabsProps) => {
  const [items, setItems] = useState(children);
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    setItems(children);
  }, [children]);

  const onChange = (index: number) => {
    setSelectedIndex(index);
    setActiveList(headerList.at(index).corr_list);
  };

  return (
    <div className="w-full">
      <Tab.Group selectedIndex={selectedIndex} onChange={onChange}>
        <Tab.List className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2">
          {headerList.map((item: HeaderT, index: number) => (
            <Tab
              key={index}
              className={({ selected }) =>
                classNames(' flex flex-row items-center gap-3 px-4 py-2 h-full rounded-md shadow-md ', selected ? 'bg-blue-color text-white font-bold' : 'bg-light-blue-color text-black')
              }
            >
              <div className="flex items-center justify-center ">{item.nom_lista}</div>
              <div className="flex items-center justify-center h-9 w-9 min-w-[2.25rem] bg-white text-blue-color font-bold rounded-full shadow-md">{item.cant_convs}</div>
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-3">
          {items.map((item: any, index: number) => (
            <Tab.Panel key={index} className={classNames('rounded-md bg-white p-1 ring-white ring-offset-1 ring-offset-blue-color focus:ring-1')}>
              {item.child}
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};
export default Tabs;
