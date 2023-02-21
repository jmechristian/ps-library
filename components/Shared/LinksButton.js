import React from 'react';
import { Popover } from '@headlessui/react';
import { LinkIcon } from '@heroicons/react/24/outline';

const LinksButton = ({ sources }) => {
  const sortedSources = sources.sort(function (a, b) {
    return a.position - b.position;
  });
  return (
    <Popover className='fixed bottom-0 right-8 drop-shadow-xl '>
      <Popover.Button className='w-16 md:w-[400px]'>
        <div className='bg-slate-900 text-white font-medium text-lg flex items-center py-3 px-6 gap-2 rounded-t-lg'>
          <div>
            <LinkIcon className='w-5 h-5 stroke-white' />
          </div>
          <div className='hidden md:block'>Lesson Links</div>
        </div>
      </Popover.Button>
      <Popover.Panel
        className='bg-slate-700 w-[400px] max-h-[80vh] pb-24 overflow-y-scroll relative'
        id='scrollers'
      >
        <div className='px-6 pb-8 pt-6 flex-col gap-4'>
          <div className='flex flex-col text-white gap-3'>
            {sortedSources &&
              sortedSources.map((s, i) => (
                <div key={s.name} className='flex gap-1'>
                  <div className='text-sm'>
                    <sup>{s.position}</sup>
                  </div>
                  <div className='text-sm'>
                    <a href={s.link}>{s.name}</a>
                  </div>
                </div>
              ))}
          </div>
        </div>
        <div className='fixed left-0 right-0 bottom-0 h-1/2 bg-gradient-to-t from-slate-900'></div>
      </Popover.Panel>
    </Popover>
  );
};

export default LinksButton;
