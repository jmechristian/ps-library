import React from 'react';
import Image from 'next/image';

const ArticleMedia = ({ media, title }) => {
  return (
    <div className='w-full h-full flex justify-center items-center relative aspect-video max-w-[1440px] mx-auto'>
      <Image src={media} alt={title} fill className='object-cover' />
    </div>
  );
};

export default ArticleMedia;
