import React from 'react';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { Popover } from '@headlessui/react';
import clsx from 'clsx';

const sections = [
  {
    id: 'about',
    title: 'About',
  },
  { id: 'audience', title: 'Audience' },
  { id: 'objectives', title: 'Objectives' },
  { id: 'syllabus', title: 'Syllabus' },
];

function MenuIcon({ open, ...props }) {
  return (
    <svg
      aria-hidden='true'
      fill='none'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
      viewBox='0 0 24 24'
      {...props}
    >
      <path
        d={open ? 'M17 7 7 17M7 7l10 10' : 'm15 16-3 3-3-3M15 8l-3-3-3 3'}
      />
    </svg>
  );
}

const SpaNav = () => {
  let navBarRef = useRef();
  let [activeIndex, setActiveIndex] = useState(null);
  let mobileActiveIndex = activeIndex === null ? 0 : activeIndex;
  return (
    <div ref={navBarRef} className='sticky top-0 z-50'>
      <Popover className='sm:hidden'>
        {({ open }) => (
          <>
            <div
              className={clsx(
                'relative flex items-center px-4 py-3',
                !open &&
                  'bg-white/25 shadow-sm [@supports(backdrop-filter:blur(0))]:bg-white/60  [@supports(backdrop-filter:blur(0))]:backdrop-blur'
              )}
            >
              {!open && (
                <>
                  <span
                    aria-hidden='true'
                    className='font-mono text-sm text-blue-800'
                  >
                    {(mobileActiveIndex + 1).toString().padStart(2, '0')}
                  </span>
                  <span className='ml-4 text-base font-medium text-slate-900 '>
                    {sections[mobileActiveIndex].title}
                  </span>
                </>
              )}
              <Popover.Button
                className={clsx(
                  '-mr-1 ml-auto flex h-8 w-8 items-center justify-center',
                  open && 'relative z-10'
                )}
                aria-label='Toggle navigation menu'
              >
                {!open && (
                  <>
                    {/* Increase hit area */}
                    <span className='absolute inset-0' />
                  </>
                )}
                <MenuIcon open={open} className='h-6 w-6 stroke-slate-700' />
              </Popover.Button>
            </div>
            <Popover.Panel className='absolute inset-x-0 top-0 bg-white/45 py-3.5 shadow-sm [@supports(backdrop-filter:blur(0))]:bg-white/30  [@supports(backdrop-filter:blur(0))]:backdrop-blur'>
              {sections.map((section, sectionIndex) => (
                <Popover.Button
                  as={Link}
                  key={section.id}
                  href={`#${section.id}`}
                  scroll={false}
                  className='flex items-center px-4 py-1.5'
                >
                  <div className='flex items-center px-4 py-3'>
                    <span
                      aria-hidden='true'
                      className='font-mono text-sm text-white'
                    >
                      {(sectionIndex + 1).toString().padStart(2, '0')}
                    </span>
                    <span className='ml-4 text-base font-medium text-slate-900'>
                      {section.title}
                    </span>
                  </div>
                </Popover.Button>
              ))}
              <Popover.Button
                as={Link}
                key={'enroll'}
                href={
                  'https://learn.packagingschool.com/courses/pack-design-workshop'
                }
                scroll={false}
                className='flex items-center px-4 py-1.5'
              >
                <div className='flex items-center px-4 py-3'>
                  <span
                    aria-hidden='true'
                    className='font-mono text-sm text-white'
                  >
                    05
                  </span>
                  <span className='ml-4 text-base font-medium text-slate-900 '>
                    Enroll Now
                  </span>
                </div>
              </Popover.Button>
            </Popover.Panel>
          </>
        )}
      </Popover>
      <div className='hidden sm:flex sm:h-32 sm:justify-center sm:border-b border-slate-300  sm:bg-black/15  sm:[@supports(backdrop-filter:blur(0))]:bg-white/30  sm:[@supports(backdrop-filter:blur(0))]:backdrop-blur'>
        <ol
          role='list'
          className='mb-[-2px] container-7xl md:max-w-3xl grid auto-cols-[minmax(0,15rem)] grid-flow-col xl:text-lg font-medium text-slate-900 [counter-reset:section]'
        >
          {sections.map((section, sectionIndex) => (
            <li key={section.id} className='flex [counter-increment:section]'>
              <a
                href={`#${section.id}`}
                className={clsx(
                  'flex w-full flex-col items-center justify-center border-b-2 before:mb-2 font-sans font-semibold before:font-mono before:text-sm before:content-[counter(section,decimal-leading-zero)]',
                  sectionIndex === activeIndex
                    ? 'border-blue-600 bg-blue-50 text-White before:text-blue-600'
                    : 'border-transparent before:text-slate-500 hover:bg-blue-50/40 hover:before:text-slate-900 '
                )}
              >
                {section.title}
              </a>
            </li>
          ))}
          <li
            key='apply'
            className='flex [counter-increment:section] cursor-pointer'
          >
            <div
              onClick={() =>
                window.open(
                  '/certificate-of-packaging-science-application',
                  '_blank'
                )
              }
              className={clsx(
                'flex w-full flex-col items-center justify-center border-b-2 before:mb-2 font-sans font-semibold before:font-mono before:text-sm before:content-[counter(section,decimal-leading-zero)]',
                activeIndex === 4
                  ? 'border-blue-600 bg-blue-50 text-blue-600 before:text-blue-600'
                  : 'border-transparent before:text-slate-500 hover:bg-blue-50/40 hover:before:text-slate-900 '
              )}
            >
              Apply Now
            </div>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default SpaNav;
