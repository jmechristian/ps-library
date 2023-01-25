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
      <div className='flex items-center justify-between p-6 md:justify-start md:space-x-10'>
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
        <div className='-my-2 -mr-2 md:hidden'>
          <Popover.Button className='inline-flex items-center justify-center rounded-md bg-slate-900 p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-slate-500'>
            <span className='sr-only'>Open menu</span>
            <Bars3Icon className='h-6 w-6' aria-hidden='true' />
          </Popover.Button>
        </div>
        <Popover.Group as='nav' className='hidden space-x-10 md:flex'>
          <Popover className='relative'>
            {({ open }) => (
              <>
                <Popover.Button
                  className={classNames(
                    open ? 'text-gray-900' : 'text-gray-500',
                    'group inline-flex items-center rounded-md bg-white text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2'
                  )}
                >
                  <span>Solutions</span>
                  <ChevronDownIcon
                    className={classNames(
                      open ? 'text-gray-600' : 'text-gray-400',
                      'ml-2 h-5 w-5 group-hover:text-gray-500'
                    )}
                    aria-hidden='true'
                  />
                </Popover.Button>

                <Transition
                  as={Fragment}
                  enter='transition ease-out duration-200'
                  enterFrom='opacity-0 translate-y-1'
                  enterTo='opacity-100 translate-y-0'
                  leave='transition ease-in duration-150'
                  leaveFrom='opacity-100 translate-y-0'
                  leaveTo='opacity-0 translate-y-1'
                >
                  <Popover.Panel className='absolute z-10 -ml-4 mt-3 w-screen max-w-md transform lg:left-1/2 lg:ml-0 lg:max-w-2xl lg:-translate-x-1/2'>
                    <div className='overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5'>
                      <div className='relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8 lg:grid-cols-2'>
                        {solutions.map((solution) => (
                          <a
                            key={solution.name}
                            href={solution.href}
                            className='-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50'
                          >
                            <div className='flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md bg-slate-500 text-white sm:h-12 sm:w-12'>
                              <solution.icon
                                className='h-6 w-6'
                                aria-hidden='true'
                              />
                            </div>
                            <div className='ml-4'>
                              <p className='text-base font-medium text-gray-900'>
                                {solution.name}
                              </p>
                              <p className='mt-1 text-sm text-gray-500'>
                                {solution.description}
                              </p>
                            </div>
                          </a>
                        ))}
                      </div>
                      <div className='bg-gray-50 p-5 sm:p-8'>
                        <a
                          href='#'
                          className='-m-3 flow-root rounded-md p-3 hover:bg-gray-100'
                        >
                          <div className='flex items-center'>
                            <div className='text-base font-medium text-gray-900'>
                              Enterprise
                            </div>
                            <span className='ml-3 inline-flex items-center rounded-full bg-slate-100 px-3 py-0.5 text-xs font-medium leading-5 text-slate-800'>
                              New
                            </span>
                          </div>
                          <p className='mt-1 text-sm text-gray-500'>
                            Empower your entire team with even more advanced
                            tools.
                          </p>
                        </a>
                      </div>
                    </div>
                  </Popover.Panel>
                </Transition>
              </>
            )}
          </Popover>

          <Popover className='relative'>
            {({ open }) => (
              <>
                <Popover.Button
                  className={classNames(
                    open ? 'text-gray-900' : 'text-gray-500',
                    'group inline-flex items-center rounded-md bg-white text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2'
                  )}
                >
                  <span>More</span>
                  <ChevronDownIcon
                    className={classNames(
                      open ? 'text-gray-600' : 'text-gray-400',
                      'ml-2 h-5 w-5 group-hover:text-gray-500'
                    )}
                    aria-hidden='true'
                  />
                </Popover.Button>

                <Transition
                  as={Fragment}
                  enter='transition ease-out duration-200'
                  enterFrom='opacity-0 translate-y-1'
                  enterTo='opacity-100 translate-y-0'
                  leave='transition ease-in duration-150'
                  leaveFrom='opacity-100 translate-y-0'
                  leaveTo='opacity-0 translate-y-1'
                >
                  <Popover.Panel className='absolute left-1/2 z-10 mt-3 w-screen max-w-xs -translate-x-1/2 transform px-2 sm:px-0'>
                    <div className='overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5'>
                      <div className='relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8'>
                        {resources.map((resource) => (
                          <a
                            key={resource.name}
                            href={resource.href}
                            className='-m-3 block rounded-md p-3 hover:bg-gray-50'
                          >
                            <p className='text-base font-medium text-gray-900'>
                              {resource.name}
                            </p>
                            <p className='mt-1 text-sm text-gray-500'>
                              {resource.description}
                            </p>
                          </a>
                        ))}
                      </div>
                    </div>
                  </Popover.Panel>
                </Transition>
              </>
            )}
          </Popover>
        </Popover.Group>
        <div className='hidden items-center justify-end md:flex md:flex-1 lg:w-0'>
          <a
            href='#'
            className='whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900'
          >
            Sign in
          </a>
          <a
            href='#'
            className='ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-slate-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-slate-700'
          >
            Sign up
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
