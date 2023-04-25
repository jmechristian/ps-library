import { useState } from 'react';
import ModalWrapper from '../Shared/ModalWrapper';

/* This example requires Tailwind CSS v3.0+ */
export default function LessonActivity({
  actionCTA,
  actionSubhead,
  actionLink,
  actionExample,
  actionTitle,
  lessonTitle,
  name,
}) {
  const [isOpen, setIsOpen] = useState(false);

  const actionClickHandler = (e) => {
    e.preventDefault();
    // resourceRefHandler(e, lessonTitle);
    gtag('event', 'resource_click', {
      resource: 'action_button',
      lesson: lessonTitle,
    });
    setIsOpen(true);
  };

  const closeModal = () => setIsOpen(false);
  return (
    <>
      <ModalWrapper
        open={isOpen}
        close={closeModal}
        title={actionTitle}
        actionExample={actionExample}
        actionLink={actionLink}
        lessonTitle={lessonTitle}
      />
      <div className='bg-indigo-100 dark:bg-base-dark max-w-7xl mx-auto rounded-b-xl'>
        <div className='mx-auto max-w-prose lg:max-w-5xl px-8 py-20 lg:py-32 lg:flex lg:items-center lg:justify-between lg:px-8'>
          <div className='text-left  max-w-2xl '>
            <h2 className='text-lg font-semibold text-slate-600 dark:text-clemson  max-3-3xl'>
              Take Action
            </h2>
            <p className='mt-1 text-4xl font-greycliff font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl lg:text-6xl'>
              {actionCTA}
            </p>
            <p className='mt-5 text-lg md:text-xl text-gray-500 dark:text-white/70'>
              {actionSubhead}
            </p>
          </div>
          <div className='mt-8 flex items-center gap-x-6 lg:mt-0 lg:flex-shrink-0'>
            <button
              className='rounded-md cursor-pointer bg-clemson px-6 py-3 text-lg lg:text-2xl font-semibold leading-7 text-white shadow-sm hover:bg-slate-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-600'
              data-click-target='resource'
              data-click-name={name}
              onClick={(event) => actionClickHandler(event)}
              target='_blank'
              rel='noReferrer'
            >
              Download
            </button>
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
