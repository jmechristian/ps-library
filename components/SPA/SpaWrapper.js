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
      <main>{children}</main>
      <div className='fixed bottom-0 left-0 right-0 h-20 w-full rounded-t-xl bg-white/60 backdrop-blur shadow-lg z-10'>
        <div className='flex justify-between items-center h-full max-w-xs mx-auto'>
          {links.map((l, i) => (
            <div
              className={`cursor-pointer font-greycliff font-semibold text-sm capitalize last:bg-clemson last:text-white last:p-1.5 last:rounded-lg ${
                l.value === activeTab ? 'text-base-dark font-bold' : ''
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
  );
};

export default SpaWrapper;
