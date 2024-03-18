import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { Fragment } from 'react';

interface DropMenuProps {
  title: string | null;
  items: any;
  style: string;
  reverse?: boolean;
  onclick?: any;
}

export const DropMenu = ({ title, items, style, reverse, onclick }: DropMenuProps) => {
  return (
    <Menu as="div" className={style + ' relative inline-block text-left'}>
      <Menu.Button className={style + ' inline-flex justify-center rounded-md ring-1 ring-gray-color bg-white px-4 py-2 text-sm font-medium text-dark-color hover:bg-opacity-90'}>
        {title}
        <ChevronDownIcon className="ml-2 -mr-1 h-5 w-5" aria-hidden="true" />
      </Menu.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items
          className={`${
            reverse ? 'right-0' : 'left-0'
          } absolute max-h-[152px] overflow-x-hidden z-10 mt-2 w-52 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-md ring-1 ring-black ring-opacity-5`}
        >
          <div className="p-1 ">
            {items?.map((item: any, index: number) => (
              <Menu.Item key={index}>
                {({ active }) => (
                  <button onClick={() => onclick(item.name)} className={`${active ? 'bg-light-blue-color' : ''} group flex w-full items-center rounded-md px-2 py-2 text-dark-color text-sm text-left`}>
                    {item.name}
                  </button>
                )}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};
