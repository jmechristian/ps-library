import React, { createContext, useState, useCallback } from 'react';
import SpaWrapper from '../../components/SPA/SpaWrapper';

import SpaTitle from '../../components/SPA/SpaTitle';
import SpaObjectives from '../../components/SPA/SpaObjectives';
import SpaAudience from '../../components/SPA/SpaAudience';

const objectives = [
  {
    objective: 'Research competetive packaging within your market.',
    icon: 'magnifyingGlassIcon',
  },
  {
    objective: 'Develop a process for ideation and experimentation.',
    icon: 'beakerIcon',
  },
  {
    objective:
      'Understand and apply design best practices through prototyping.',
    icon: 'swatchIcon',
  },
  {
    objective: 'Digitally develop a final rendering of your prototype .',
    icon: 'cubeTransparentIcon',
  },
];

export const SpaContext = createContext();

const Page = () => {
  const [activeTab, setActiveTab] = useState('OBJECTIVES');

  const getPage = useCallback((activeTab) => {
    switch (activeTab) {
      case 'OBJECTIVES':
        return <SpaObjectives objectives={objectives} />;
      case 'AUDIENCE':
        return <SpaAudience />;
    }
  }, []);

  return (
    <SpaContext.Provider
      value={{ activeTab: activeTab, setActiveTab: (val) => setActiveTab(val) }}
    >
      <SpaWrapper>
        <div className='w-full bg-slate-100 full-height'>
          <div className='py-12 sm:py-32'>
            <div className='mx-auto max-w-7xl px-6 flex flex-col gap-12'>
              <SpaTitle />
              {/* <SpaObjectives objectives={objectives} /> */}
              {getPage(activeTab)}
            </div>
          </div>
        </div>
      </SpaWrapper>
    </SpaContext.Provider>
  );
};

export default Page;
