import React, { createContext, useState, useCallback } from 'react';
import SpaWrapper from '../../components/SPA/SpaWrapper';
import SpaTitle from '../../components/SPA/SpaTitle';
import SpaObjectives from '../../components/SPA/SpaObjectives';
import SpaAudience from '../../components/SPA/SpaAudience';
import SpaSyllabus from '../../components/SPA/SpaSyllabus';
import SpaIntake from '../../components/SPA/SpaIntake';
import SpaCanvas from '../../components/SPA/SpaCanvas';

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

const syllabus = [
  {
    title: 'Welcome',
    section: '01',
    modules: [
      {
        title: 'Navigating the Course',
      },
      {
        title: 'Course Introduction and the Design Process',
      },
      {
        title: 'Project and schedule review',
      },
      {
        title: 'Survey',
      },
    ],
  },
  {
    title: 'Market Research',
    section: '02',
    modules: [
      {
        title: 'Retail Audit',
      },
      {
        title: 'Elemental Analysis',
      },
      {
        title: 'Regulations',
      },
    ],
  },
  {
    title: 'Brainstorm and Ideation',
    section: '03',
    modules: [
      {
        title: '50 Ideas Ledger',
      },
      {
        title: 'Brainstorming Methods',
      },
      {
        title: 'Ideation',
      },
      {
        title: 'Prototyping',
      },
    ],
  },
  {
    title: 'Design Factors',
    section: '04',
    modules: [
      {
        title: 'Appearance',
      },
      {
        title: 'Visual',
      },
      {
        title: 'Placement',
      },
      {
        title: 'Connection',
      },
      {
        title: 'Simplicity',
      },
      {
        title: 'Ergonomics',
      },
    ],
  },
  {
    title: 'Digital Prototype',
    section: '05',
    modules: [
      {
        title: 'Box It Now Tutorial',
      },
      {
        title: 'Prototype Setup',
      },
      {
        title: 'Graphics and Text',
      },
      {
        title: 'Create and Save a Virtual Prototype',
      },
      {
        title: 'Resources for Printing',
      },
    ],
  },
  {
    title: 'Conclusion',
    section: '06',
    modules: [
      {
        title: 'Course Summary',
      },
      {
        title: 'Final Survey',
      },
      {
        title: 'Final Exam',
      },
      {
        title: 'How to Print Your Certificate of Completion',
      },
    ],
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
      case 'SYLLABUS':
        return <SpaSyllabus syllabus={syllabus} />;
      case 'SIGNUP':
        return <SpaIntake />;
    }
  }, []);

  return (
    <SpaContext.Provider
      value={{ activeTab: activeTab, setActiveTab: (val) => setActiveTab(val) }}
    >
      <SpaWrapper>
        <div className='w-full md:max-w-7xl md:mx-auto full-height md:flex'>
          <div className='pt-16 md:pt-20 h-full full-height'>
            <div className='flex flex-1 flex-col h-full justify-between md:justify-start md:gap-9 full-height'>
              <div className='mx-auto max-w-7xl px-6 mb-12 md:mb-0'>
                <SpaTitle />
              </div>
              <div className='w-full h-full rounded-t-3xl md:rounded-t-4xl bg-base-brand md:bg-transparent px-6 pt-8 pb-12'>
                <div className='mx-auto max-w-xl lg:mx-0 px-6 md:px-0 md:pb-32'>
                  {getPage(activeTab)}
                </div>
              </div>
            </div>
          </div>
          <SpaCanvas />
        </div>
      </SpaWrapper>
    </SpaContext.Provider>
  );
};

export default Page;
