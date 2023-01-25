import React from 'react';
import Head from 'next/head';
import LessonActivity from '../../components/Lessons/LessonActivity';
import LessonsBottomContent from '../../components/Lessons/LessonsBottomContent';
import LessonsContent from '../../components/Lessons/LessonsContent';
import LessonsHeader from '../../components/Lessons/LessonsHeader';
import LessonsMedia from '../../components/Lessons/LessonsMedia';
import LinksButton from '../../components/Shared/LinksButton';
import SocialShare from '../../components/Shared/SocialShare';

const Index = () => {
  const style = {
    root: {
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      border: 0,
      color: 'white',
    },
    copyContainer: {
      background: 'rgb(0,0,0,0.7)',
    },
    title: {
      color: 'aquamarine',
      fontStyle: 'italic',
    },
  };

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

export default Index;
