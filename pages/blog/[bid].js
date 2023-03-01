import React, { useEffect } from 'react';
import Head from 'next/head';

import { Amplify, API, graphqlOperation } from 'aws-amplify';

import awsExports from '../../src/aws-exports';
Amplify.configure(awsExports);

const GRAPHQL_ENDPOINT = process.env.GRAPHQL_ENDPOINT;
const GRAPHQL_API_KEY = process.env.GRAPHQL_API_KEY;

import LessonsHeader from '../../components/Lessons/LessonsHeader';
import SocialShare from '../../components/Shared/SocialShare';
import ArticleContent from '../../components/Articles/ArticleContent';
import ArticleMedia from '../../components/Articles/ArticleMedia';
import RelatedCourses from '../../components/Shared/RelatedCourses';

const Index = ({ article }) => {
  //   const query = /* GraphQL */ `
  //     query ListArticles {
  //       listArticles {
  //         items {
  //           id
  //           slug
  //         }
  //       }
  //     }
  //   `;
  //   useEffect(() => {
  //     const getArticles = async () => {
  //       try {
  //         const res = await API.graphql(graphqlOperation(query));
  //         console.log(res.data);
  //         const articles = await res.data.listArticles.items;
  //         const paths = articles.map((less) => ({
  //           params: { id: `${less.slug}` },
  //         }));

  //         return { paths, fallback: false };
  //       } catch (error) {
  //         console.log(error);
  //       }
  //     };

  //     getArticles();
  //   }, []);

  return (
    <>
      <Head>
        <title>{article.title}</title>
        <meta name='description' content={article.subhead} key='desc' />
        <meta property='og:image' content={article.seoImage} />
        <meta property='og:title' content={article.title} />
        <meta property='og:description' content={article.subhead} />
      </Head>
      <div className='flex flex-col gap-12 pt-12 dark:bg-real-dark'>
        <LessonsHeader
          title={article.title}
          subhead={article.subhead}
          date={article.date}
          author={article.author}
        />
        <div>
          <ArticleMedia media={article.media} title={article.title} />
        </div>
        <ArticleContent content={article.content} />
        <div>
          {article.relatedCourses && (
            <RelatedCourses relatedCourses={article.relatedCourses.items} />
          )}
          <SocialShare
            title={article.title}
            slug={article.slug}
            subhead={article.subhead}
          />
        </div>
      </div>
    </>
  );
};

export async function getStaticPaths() {
  const query = /* GraphQL */ `
    query ListBlogs {
      listBlogs {
        items {
          id
          slug
        }
      }
    }
  `;

  const GRAPHQL_ENDPOINT = process.env.GRAPHQL_ENDPOINT;
  const GRAPHQL_API_KEY = process.env.GRAPHQL_API_KEY;

  try {
    const res = await API.graphql(graphqlOperation(query));
    const articles = await res.data.listBlogs.items;
    const paths = articles.map((less) => ({
      params: { bid: `${less.slug}` },
    }));

    return { paths, fallback: false };
  } catch (error) {
    console.log(error);
  }
}

export async function getStaticProps({ params }) {
  const { bid } = params;

  const getBlog = /* GraphQL */ `
    query MyQuery($slug: String!) {
      blogsBySlug(slug: $slug) {
        items {
          author
          content
          date
          media
          slug
          title
        }
      }
    }
  `;

  const GRAPHQL_ENDPOINT = process.env.GRAPHQL_ENDPOINT;
  const GRAPHQL_API_KEY = process.env.GRAPHQL_API_KEY;

  const variables = {
    slug: bid, // key is "input" based on the mutation above
  };

  const res = await API.graphql(graphqlOperation(getBlog, variables));
  const article = await res.data.blogsBySlug.items[0];

  return { props: { article }, revalidate: 10 };
}

export default Index;
