import { Disclosure } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/20/solid';

interface CollapseProps {
  title: string;
  children: any;
}

export const Collapse = ({ title, children }: CollapseProps) => {
  return (
    <div className="w-full rounded-md bg-red">
      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button
              className={`${
                open ? 'rounded-t-md border-t' : 'rounded-md border-y'
              } border-x border-blue-color flex w-full justify-between bg-light-blue-color p-4 text-left font-bold text-dark-color hover:bg-blue-tags-color uppercase`}
            >
              <span>{title}</span>
              <ChevronUpIcon className={`${open ? 'rotate-90 transform' : 'rotate-180'} h-5 w-5 text-dark-color`} />
            </Disclosure.Button>
            <Disclosure.Panel className="rounded-b-md border-x border-b border-blue-color p-4 text-sm text-gray-500 bg-light-blue-color">{children}</Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  );
};
