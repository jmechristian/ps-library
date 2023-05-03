import React, { useState, createContext } from 'react';

export const SpaContext = createContext({ isActive: 0 });

const SpaWrapper = ({ children }) => {
  const [isActive, setIsActive] = useState(0);
  const [activeTab, setActiveTab] = useState('OBJECTIVES');

  const links = [
    {
      title: 'audience',
      value: 'AUDIENCE',
    },
    {
      title: 'objectives',
      value: 'OBJECTIVES',
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
    <SpaContext.Provider value={{ isActive: isActive, activeTab: activeTab }}>
      <div className='relative'>
        <main>{children}</main>
        <div className='absolute bottom-9 w-full rounded-lg bg-white shadow-xl z-10 max-w-xs left-1/2 -translate-x-1/2'>
          <div className='flex justify-between items-center px-3 py-4'>
            {links.map((l, i) => (
              <div
                className='font-greycliff font-semibold text-sm capitalize last:bg-clemson last:text-white last:p-1.5 last:rounded-lg'
                key={l.value}
              >
                {l.title}
              </div>
            ))}

            {/* <div className='font-greycliff font-semibold text-sm'>
              Objectives
            </div>
            <div className='font-greycliff font-semibold text-sm'>Syllabus</div>
            <div className='font-greycliff font-semibold text-sm bg-clemson text-white p-1.5 rounded-lg'>
              Sign Up
            </div> */}
          </div>
        </div>
      </div>
    </SpaContext.Provider>
  );
};

export default SpaWrapper;
