import { Fragment, useRef, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import LessonActivityModal from '../Lessons/LessonActivityModal';
import LessonActivityIntake from '../Lessons/LessonActivityIntake';

export default function ModalWrapper({
  open,
  close,
  title,
  actionLink,
  actionExample,
}) {
  const cancelButtonRef = useRef(null);
  const [hasSubmitted, setHasSubmitted] = useState(false);

  const toggleSubmit = (value) => {
    setHasSubmitted(value);
  };

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as='div'
        className='relative z-10'
        initialFocus={cancelButtonRef}
        onClose={close}
      >
        <Transition.Child
          as={Fragment}
          enter='ease-out duration-300'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in duration-200'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <div className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity' />
        </Transition.Child>

        <div className='fixed inset-0 z-10 overflow-y-auto'>
          <div className='flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0'>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
              enterTo='opacity-100 translate-y-0 sm:scale-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100 translate-y-0 sm:scale-100'
              leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
            >
              <Dialog.Panel className='relative transform overflow-hidden rounded-lg bg-white md:px-4 md:pt-5 md:pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-2xl sm:p-8'>
                <div>
                  <div>
                    <Dialog.Title
                      as='h3'
                      className='text-lg font-medium leading-6 text-gray-900'
                    >
                      <LessonActivityModal
                        title={title}
                        hasSubmitted={hasSubmitted}
                        actionLink={actionLink}
                        actionExample={actionExample}
                      />
                    </Dialog.Title>
                  </div>
                </div>
                <div className='px-4'>
                  <LessonActivityIntake toggleSubmit={toggleSubmit} />

                  <div className='mt-4 max-w-xl mx-auto text-center'>
                    <p className='text-xs text-gray-500 pb-6'>
                      By signing up you indicate you have read and agree to our
                      <a
                        href='https://packagingschool.com/privacy-policy/'
                        target='_blank'
                        rel='noreferrer'
                      >
                        {' '}
                        Terms of Use
                      </a>
                      . Packaging School will always respect your privacy.
                    </p>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
