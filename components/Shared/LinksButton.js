import React from 'react';
import { Popover } from '@headlessui/react';
import { LinkIcon } from '@heroicons/react/24/outline';

const LinksButton = () => {
  return (
    <Popover className='fixed bottom-0 right-8 drop-shadow-xl '>
      <Popover.Button className='w-16 md:w-80'>
        <div className='bg-slate-900 text-white font-medium text-lg flex items-center py-3 px-6 gap-2 rounded-t-lg'>
          <div>
            <LinkIcon className='w-5 h-5 stroke-white' />
          </div>
          <div className='hidden md:block'>Lesson Links</div>
        </div>
      </Popover.Button>
      <Popover.Panel className='bg-slate-700 w-80'>
        <div className='px-6 pb-8 pt-6 flex-col gap-4'>
          <div className='flex flex-col text-white gap-2'>
            <div className='text-medium'>
              <a
                href='https://apsmedia.s3.amazonaws.com/documents/Part+1+Resources+Carbon+Neutrality.pdf'
                target='_blank'
                rel='noreferrer'
              >
                Sustainability Resources Part 1
              </a>
            </div>
            <div className='text-medium'>
              <a
                href='https://packagingschool.com/get-to-know-cps/'
                target='_blank'
                rel='noreferrer'
              >
                Certificate of Packaging Science
              </a>
            </div>
            <div className='text-medium'>
              <a
                href='https://packagingschool.com/get-to-know-cmpm/'
                target='_blank'
                rel='noreferrer'
              >
                Certificate of Mastery in Packaging Management
              </a>
            </div>
            <div className='text-medium'>
              <a
                href='https://packagingschool.com/sustainable-packaging/'
                target='_blank'
                rel='noreferrer'
              >
                Sustainable Packaging Course
              </a>
            </div>
          </div>
        </div>
      </Popover.Panel>
    </Popover>
  );
};

export default LinksButton;
