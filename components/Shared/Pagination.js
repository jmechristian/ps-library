import {
  ArrowLongLeftIcon,
  ArrowLongRightIcon,
} from '@heroicons/react/20/solid';

const Pagination = ({ hasNext, hasPrev, next, prev }) => {
  const disabledPrev = !hasPrev;
  const disabledNext = !hasNext;

  return (
    <nav className='flex items-center justify-between border-t border-gray-200 px-4 sm:px-0 py-4'>
      <button
        className='flex justify-center bg-black text-white rounded-lg p-3'
        onClick={prev}
        disabled={disabledPrev}
      >
        Prev
      </button>

      <button
        className='flex justify-center bg-black text-white rounded-lg p-3'
        onClick={next}
        disabled={disabledNext}
      >
        Next
      </button>
    </nav>
  );
};

export default Pagination;
