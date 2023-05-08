import React, { useState, useContext } from 'react';
import { SpaContext } from '../../pages/bootcamp-102';

const SpaWrapper = ({ children }) => {
  //   const [isActive, setIsActive] = useState(0);
  //   const [activeTab, setActiveTab] = useState('OBJECTIVES');

  const { activeTab, setActiveTab } = useContext(SpaContext);

  const links = [
    {
      title: 'objectives',
      value: 'OBJECTIVES',
    },
    {
      title: 'audience',
      value: 'AUDIENCE',
    },
    {
      title: 'syllabus',
      value: 'SYLLABUS',
    },
    {
      title: 'sign up',
      value: 'SIGNUP',
    },
  ];
  return (
    <div className='relative'>
      <main className='bg-slate-200'>{children}</main>
      <div className='fixed bottom-0 left-0 right-0 h-20 md:h-28 w-full rounded-t-xl bg-white/20 backdrop-blur-sm shadow-lg z-10'>
        <div className='flex items-center h-full px-3'>
          <div className='w-full md:max-w-3xl md:mx-auto py-4 md:py-6 rounded-lg flex justify-evenly items-center bg-black/70 backdrop-blur-ms px-3'>
            {links.map((l, i) => (
              <div
                className={`cursor-pointer font-greycliff text-white font-semibold text-sm md:text-lg capitalize last:bg-clemson last:text-white last:px-2 last:md:px-4 last:py-1 last:rounded-lg ${
                  l.value === activeTab ? 'text-clemson font-bold' : ''
                }`}
                key={l.value}
                onClick={() => setActiveTab(l.value)}
              >
                {l.title}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpaWrapper;
