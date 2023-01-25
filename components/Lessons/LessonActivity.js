/* This example requires Tailwind CSS v3.0+ */
export default function LessonActivity() {
  return (
    <div className='bg-indigo-100'>
      <div className='mx-auto max-w-prose px-6 py-20 lg:py-32 lg:flex lg:items-center lg:justify-between lg:px-8'>
        <div className='text-left'>
          <h2 className='text-lg font-semibold text-indigo-600'>Take Action</h2>
          <p className='mt-1 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl'>
            Want to learn more about the basics of carbon neutrality?
          </p>
          <p className='mx-auto mt-5 max-w-xl text-lg text-gray-500'>
            We’ve got you covered. Conduct your own research with this handy
            resource download.
          </p>
        </div>
        <div className='mt-8 flex items-center gap-x-6 lg:mt-0 lg:flex-shrink-0'>
          <a
            href='#'
            className='rounded-md bg-indigo-600 px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
          >
            Download
          </a>
          <a
            href='#'
            className='text-base font-semibold leading-7 text-gray-900'
          >
            Show & Tell <span aria-hidden='true'>→</span>
          </a>
        </div>
      </div>
    </div>
  );
}
