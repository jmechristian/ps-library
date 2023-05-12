import React from 'react';
import { Disclosure } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/20/solid';

const SpaSyllabusItem = ({ item }) => {
  return (
    <div className='w-full'>
      <div className='mx-auto w-full lg:max-w-md rounded-2xl bg-base-mid backdrop-blur-sm p-2'>
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className='flex w-full justify-between rounded-lg px-4 py-2 text-left font-medium'>
                <div className='flex gap-2 font-greycliff items-center'>
                  <div className='text-medium text-white font-bold'>
                    {item.section}
                  </div>
                  <div className='text-md font-semibold text-white'>
                    {item.title}
                  </div>
                </div>
                <ChevronUpIcon
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  } h-5 w-5 text-base-light`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className='px-4 pt-4 pb-2 text-white/90'>
                <ol className='pl-6'>
                  {item.modules.map((mo) => (
                    <li key={mo.title} className='tracking-normal list-disc'>
                      {mo.title}
                    </li>
                  ))}
                </ol>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </div>
  );
};

export default SpaSyllabusItem;
