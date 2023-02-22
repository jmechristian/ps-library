import React from 'react';

const Index = () => {
  return (
    <>
      <Head>
        <title>Packaging School - Carbon Neutral Part 1</title>
        <meta
          name='description'
          content='This 2-part lesson will add context to carbon neutrality and explore how you can implement it into your packaging.'
          key='desc'
        />
        <meta
          property='og:image'
          content='https://apsmedia.s3.amazonaws.com/images/CN+pt+1+TN.png'
        />
        <meta
          property='og:title'
          content='Packaging School - Carbon Neutral Part 1'
        />
        <meta
          property='og:description'
          content='In part 1 we define “carbon neutral” and look at real-world examples of carbon offset in the industry.'
        />
        <meta
          property='og:image'
          content='https://example.com/images/cool-page.jpg'
        />
      </Head>
      <div className='flex flex-col gap-12 pt-12'>
        <LessonsHeader />
        <LessonsMedia />
        <LessonsContent />
        <LessonActivity />
        <LessonsBottomContent />
        <SocialShare />
        <LinksButton />
      </div>
    </>
  );
};
