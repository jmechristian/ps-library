import React from 'react';

const ArticleContent = ({ content }) => {
  return (
    <div className='relative overflow-hidden bg-white dark:bg-real-dark'>
      <div className='relative px-6 lg:px-8 lg:pb-16'>
        <div className='prose prose-lg md:prose-xl prose-orange dark:prose-orange mx-auto text-slate-500 dark:text-white/90'>
          <div
            dangerouslySetInnerHTML={{ __html: content }}
            className='bad-html'
          ></div>
        </div>
      </div>
    </div>
  );
};

export default ArticleContent;
