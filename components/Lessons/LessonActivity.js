import { resourceRefHandler } from '../Util/ResourceClickGTAG';
import { useState } from 'react';
import { Dialog } from '@headlessui/react';
import ModalWrapper from '../Shared/ModalWrapper';

/* This example requires Tailwind CSS v3.0+ */
export default function LessonActivity({
  actionCTA,
  actionSubhead,
  ActionLink,
  ActionExample,
  name,
}) {
  const [isOpen, setIsOpen] = useState(false);

  const actionClickHandler = (e) => {
    e.preventDefault();
    resourceRefHandler(e);
    setIsOpen(true);
  };

  const closeModal = () => setIsOpen(false);
  return (
    <>
      <ModalWrapper open={isOpen} close={closeModal} />
      <div className='bg-indigo-100 max-w-7xl mx-auto rounded-b-xl'>
        <div className='mx-auto max-w-prose lg:max-w-5xl px-8 py-20 lg:py-32 lg:flex lg:items-center lg:justify-between lg:px-8'>
          <div className='text-left  max-w-2xl '>
            <h2 className='text-lg font-semibold text-indigo-600 max-3-3xl'>
              Take Action
            </h2>
            <p className='mt-1 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl'>
              {actionCTA}
            </p>
            <p className='mt-5 text-lg text-gray-500'>{actionSubhead}</p>
          </div>
          <div className='mt-8 flex items-center gap-x-6 lg:mt-0 lg:flex-shrink-0'>
            <a
              href={ActionLink}
              className='rounded-md cursor-pointer bg-indigo-600 px-4 py-2 text-lg lg:text-xl font-semibold leading-7 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
              data-click-target='resource'
              data-click-name={name}
              onClick={(event) => actionClickHandler(event)}
              target='_blank'
              rel='noReferrer'
            >
              Download
            </a>
            <a
              href='#'
              className='hidden text-base font-semibold leading-7 text-gray-900'
            >
              Show & Tell <span aria-hidden='true'>→</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
