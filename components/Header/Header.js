import { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartBarIcon,
  CursorArrowRaysIcon,
  DocumentChartBarIcon,
  ShieldCheckIcon,
  Squares2X2Icon,
  XMarkIcon,
  AcademicCapIcon,
  LightBulbIcon,
  InformationCircleIcon,
  ShoppingCartIcon,
  ChatBubbleLeftEllipsisIcon,
} from '@heroicons/react/24/outline';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

const solutions = [
  {
    name: 'Certificates',
    description:
      'Get a better understanding of where your traffic is coming from.',
    href: 'https://packagingschool.com/certificates',
    icon: AcademicCapIcon,
  },
  {
    name: 'Courses',
    description: 'Speak directly to your customers in a more meaningful way.',
    href: 'https://packagingschool.com/all_courses/',
    icon: LightBulbIcon,
  },
  {
    name: 'About',
    description: "Your customers' data will be safe and secure.",
    href: 'https://packagingschool.com/about-packaging-school/',
    icon: InformationCircleIcon,
  },
  {
    name: 'Campus Store',
    description: "Connect with third-party tools that you're already using.",
    href: 'https://packagingschool.com/store/',
    icon: ShoppingCartIcon,
  },
];
const resources = [
  {
    name: 'Business',
    description:
      'Get all of your questions answered in our forums or contact support.',
    href: '#',
  },
  {
    name: 'Design',
    description:
      'Learn how to maximize our platform to get the most out of it.',
    href: '#',
  },
  {
    name: 'Materials',
    description:
      'See what meet-ups and other events we might be planning near you.',
    href: '#',
  },
  {
    name: 'Food & Beverage',
    description: 'Understand how we take your privacy seriously.',
    href: '#',
  },
  {
    name: 'Supply Chain & Logistics',
    description: 'Understand how we take your privacy seriously.',
    href: '#',
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Header() {
  return (
    <Popover className='relative bg-slate-900'>
      <div className='flex items-center justify-between p-6 md:justify-start md:space-x-10 lg:max-w-7xl lg:mx-auto lg:p-0 lg:py-6 lg:px-6'>
        <div className='flex justify-start lg:w-0 lg:flex-1'>
          <a href='https://packagingschool.com'>
            <span className='sr-only'>Packaging School</span>
            <img
              className='h-8 w-auto sm:h-10'
              src='https://res.cloudinary.com/dno7xxmmy/image/upload/v1664295580/pschool/logo_white_krqpbc.svg'
              alt=''
            />
          </a>
        </div>
        <div className='hidden lg:flex mx-auto justify-between items-center gap-5 text-white font-medium'>
          {solutions.map((item, i) => (
            <a
              href={item.href}
              target='_blank'
              rel='noreferrer'
              key={item.name}
            >
              <div key={item.name}>{item.name}</div>
            </a>
          ))}
        </div>
        <div className='-my-2 -mr-2 md:hidden'>
          <Popover.Button className='inline-flex items-center justify-center rounded-md bg-slate-900 p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-slate-500'>
            <span className='sr-only'>Open menu</span>
            <Bars3Icon className='h-6 w-6' aria-hidden='true' />
          </Popover.Button>
        </div>
        <div className='hidden items-center justify-end md:flex md:flex-1 lg:w-0'>
          <a
            href='#'
            className='ml-8 inline-flex items-center gap-3 justify-center whitespace-nowrap rounded-md border border-transparent bg-base-mid px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-slate-700'
          >
            <ChatBubbleLeftEllipsisIcon className='w-6 h-6' />
            Join The Discussion
          </a>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter='duration-200 ease-out'
        enterFrom='opacity-0 scale-95'
        enterTo='opacity-100 scale-100'
        leave='duration-100 ease-in'
        leaveFrom='opacity-100 scale-100'
        leaveTo='opacity-0 scale-95'
      >
        <Popover.Panel
          focus
          className='absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden z-50'
        >
          <div className='divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5'>
            <div className='px-5 pt-5 pb-6'>
              <div className='flex items-center justify-between'>
                <div>
                  <img
                    className='h-8 w-auto'
                    src='https://res.cloudinary.com/dno7xxmmy/image/upload/v1664298048/pschool/logo_blue_yuapvl.svg'
                    alt='Packaging School'
                  />
                </div>
                <div className='-mr-2'>
                  <Popover.Button className='inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-slate-500'>
                    <span className='sr-only'>Close menu</span>
                    <XMarkIcon className='h-6 w-6' aria-hidden='true' />
                  </Popover.Button>
                </div>
              </div>
              <div className='mt-6'>
                <nav className='grid grid-cols-1 gap-7'>
                  {solutions.map((solution) => (
                    <a
                      key={solution.name}
                      href={solution.href}
                      className='-m-3 flex items-center rounded-lg p-3 hover:bg-gray-50'
                    >
                      <div className='flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md bg-slate-500 text-white'>
                        <solution.icon className='h-6 w-6' aria-hidden='true' />
                      </div>
                      <div className='ml-4 text-base font-medium text-gray-900'>
                        {solution.name}
                      </div>
                    </a>
                  ))}
                </nav>
              </div>
            </div>
            <div className='py-6 px-5'>
              <div className='grid grid-cols-2 gap-4'>
                {resources.map((resource) => (
                  <a
                    key={resource.name}
                    href={resource.href}
                    className='text-base font-medium text-gray-900 hover:text-gray-700'
                  >
                    {resource.name}
                  </a>
                ))}
              </div>{' '}
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
