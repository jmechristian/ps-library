import React, { useEffect } from 'react';
import Head from 'next/head';

import { Amplify, API, graphqlOperation } from 'aws-amplify';

import awsExports from '../../src/aws-exports';
Amplify.configure(awsExports);

const GRAPHQL_ENDPOINT = process.env.GRAPHQL_ENDPOINT;
const GRAPHQL_API_KEY = process.env.GRAPHQL_API_KEY;

import LessonActivity from '../../components/Lessons/LessonActivity';
import LessonsBottomContent from '../../components/Lessons/LessonsBottomContent';
import LessonsContent from '../../components/Lessons/LessonsContent';
import LessonsHeader from '../../components/Lessons/LessonsHeader';
import LessonsMedia from '../../components/Lessons/LessonsMedia';
import LinksButton from '../../components/Shared/LinksButton';
import SocialShare from '../../components/Shared/SocialShare';

const Index = ({ lesson }) => {
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
        <title>{lesson.title}</title>
        <meta name='description' content={lesson.subhead} key='desc' />
        <meta property='og:image' content={lesson.seoImage} />
        <meta property='og:title' content={lesson.title} />
        <meta property='og:description' content={lesson.subhead} />
      </Head>
      <div className='flex flex-col gap-12 pt-12 dark:bg-real-dark'>
        <LessonsHeader title={lesson.title} subhead={lesson.subhead} />
        <div>
          <LessonsMedia videoUrl={lesson.media} />
          <LessonActivity
            actionCTA={lesson.actionCTA}
            actionSubhead={lesson.actionSubhead}
            actionLink={lesson.actionLink}
            name={lesson.name}
            actionTitle={lesson.actionLinkTitle}
            actionExample={lesson.actionExample}
            lessonTitle={lesson.title}
          />
        </div>
        <LessonsContent
          content={lesson.content}
          objectives={lesson.objectives}
        />
        {/* <LessonsBottomContent /> */}
        <SocialShare
          title={lesson.title}
          slug={lesson.slug}
          subhead={lesson.subhead}
        />
        <LinksButton sources={lesson.sources.items} />
      </div>
    </>
  );
};

export async function getStaticPaths() {
  const query = /* GraphQL */ `
    query LIST_LESSONS {
      listLessons {
        items {
          slug
        }
      }
    }
  `;

  const GRAPHQL_ENDPOINT = process.env.GRAPHQL_ENDPOINT;
  const GRAPHQL_API_KEY = process.env.GRAPHQL_API_KEY;

  try {
    const res = await API.graphql(graphqlOperation(query));
    const lessons = await res.data.listLessons.items;
    const paths = lessons.map((less) => ({
      params: { id: `${less.slug}` },
    }));

    return { paths, fallback: false };
  } catch (error) {
    console.log(error);
  }
}

export async function getStaticProps({ params }) {
  const { id } = params;

  const getLesson = /* GraphQL */ `
    query MyQuery($slug: String!) {
      lessonsBySlug(slug: $slug) {
        items {
          id
          links {
            items {
              name
              link
              lessonLinksId
            }
          }
          media
          content
          objectives
          seoImage
          slug
          actionCTA
          actionLink
          actionSubhead
          actionExample
          actionLinkTitle
          sources {
            items {
              name
              link
              lessonSourcesId
              position
            }
          }
          subhead
          tags {
            items {
              lessonTagsId
              tag
            }
          }
          title
          type
        }
      }
    }
  `;

  const GRAPHQL_ENDPOINT = process.env.GRAPHQL_ENDPOINT;
  const GRAPHQL_API_KEY = process.env.GRAPHQL_API_KEY;

  const variables = {
    slug: id, // key is "input" based on the mutation above
  };

  const res = await API.graphql(graphqlOperation(getLesson, variables));
  const lesson = await res.data.lessonsBySlug.items[0];

  return { props: { lesson }, revalidate: 10 };
}

export default Index;
