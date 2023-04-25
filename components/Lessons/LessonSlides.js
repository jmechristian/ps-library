import React from 'react';
import SlidesPlayer from './SlidesPlayer';

const LessonSlides = ({ slides }) => {
  return (
    <div className='mx-auto max-w-7xl aspect-video w-full'>
      <div className='w-full h-full relative bg-dark'>
        <SlidesPlayer images={slides} />
      </div>
    </div>
  );
};

export default LessonSlides;
