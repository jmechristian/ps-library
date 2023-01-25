import React from 'react';
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
    <div className='flex flex-col gap-12 pt-12'>
      <LessonsHeader />
      <LessonsMedia />
      <LessonsContent />
      <LessonActivity />
      <LessonsBottomContent />
      <SocialShare />
      <LinksButton />
    </div>
  );
};

export default Index;
