import React, { useState } from 'react';
import { CheckCircleIcon } from '@heroicons/react/20/solid';

const IconLabel = ({ name, isComplete }) => {
  return (
    <p className='flex items-center text-lg text-gray-500'>
      <CheckCircleIcon
        className={`mr-1.5 h-5 w-5 flex-shrink-0 ${
          isComplete ? 'text-green-400' : 'text-slate-300'
        } `}
        aria-hidden='true'
      />
      {name}
    </p>
  );
};

const items = [
  {
    name: 'Define carbon neutrality',
    isComplete: false,
  },
  {
    name: 'Examine carbon credits and offsets',
    isComplete: false,
  },
  {
    name: 'Summarize carbon trading',
    isComplete: false,
  },
  {
    name: 'Discuss examples of carbon offset in the industry',
    isComplete: false,
  },
];

const LearningObjectives = () => {
  return (
    <ul role='list' className='divide-y divide-gray-200 p-0'>
      {items.map((item) => (
        <li key={item.name} className='list-none p-0'>
          <IconLabel name={item.name} isComplete={item.isComplete} />
        </li>
      ))}
    </ul>
  );
};

export default LearningObjectives;
