import React from 'react';
import SlidesPlayer from './SlidesPlayer';
import SlideBar from '../Shared/SlideBar';

const LessonSlides = ({ slides }) => {
  return (
    <div className='mx-auto max-w-7xl aspect-square md:aspect-video w-full'>
      <div className='w-full h-full bg-dark'>
        <SlidesPlayer images={slides} />
        <SlideBar slides={slides} />
      </div>
    </div>
  );
};

export default LessonSlides;
