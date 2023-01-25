import React from 'react';

const LessonsMedia = ({ videoUrl }) => {
  return (
    <div>
      <div>
        <video
          className='w-full h-full'
          controls
          controlsList='nodownload'
          autoPlay
          playsInline
        >
          <source src={videoUrl} type='video/mp4'></source>
        </video>
      </div>
    </div>
  );
};

export default LessonsMedia;
