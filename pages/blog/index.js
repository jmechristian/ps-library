import React, { useState, useEffect } from 'react';
import { Amplify, API, graphqlOperation } from 'aws-amplify';
import Pagination from '../../components/Shared/Pagination';

const Index = () => {
  const [nextToken, setNextToken] = useState(undefined);
  const [nextNextToken, setNextNextToken] = useState();
  const [previousTokens, setPreviousTokens] = useState([]);
  const [items, setItems] = useState([]);

  const hasNext = !!nextNextToken;
  const hasPrev = previousTokens.length;
  const limit = 10;

  useEffect(() => {
    const fetch = async () => {
      const query = /* GraphQL */ `
        query ListBlogs($limit: Int, $nextToken: String) {
          listBlogs(limit: $limit, nextToken: $nextToken) {
            items {
              id
              slug
              title
            }
            nextToken
          }
        }
      `;

      const variables = {
        nextToken,
        limit: limit,
      };

      const result = await API.graphql(graphqlOperation(query, variables));
      console.log(result.data);
      setNextNextToken(result.data.listBlogs.nextToken);
      setItems(result.data.listBlogs.items);
    };

    fetch();
  }, [nextToken]);

  const next = () => {
    setPreviousTokens((prev) => [...prev, nextToken]);
    setNextToken(nextNextToken);
    setNextNextToken(null);
  };

  const prev = () => {
    setNextToken(previousTokens.pop());
    setPreviousTokens([...previousTokens]);
    setNextNextToken(null);
  };

  const reset = () => {
    setNextToken(undefined);
    setPreviousTokens([]);
    setNextNextToken(null);
  };

  return (
    <div className='max-w-7xl mx-auto px-6 md:px-0'>
      <div className='px-4 sm:px-6 lg:px-8'>
        <div className='sm:flex sm:items-center'>
          <div className='sm:flex-auto'>
            <h1 className='text-base font-semibold leading-6 text-gray-900'>
              Articles
            </h1>
          </div>
        </div>
        <div className='mt-8 flow-root w-4/5 max-w-[850px] mx-auto'>
          <div className='-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8'>
            <div className='block py-2 align-middle sm:px-6 lg:px-8'>
              <table className='divide-y divide-gray-300 w-full'>
                <thead>
                  <tr>
                    <th
                      scope='col'
                      className='py-3.5 text-left text-sm font-semibold text-gray-900 sm:pl-0'
                    >
                      Title
                    </th>
                    <th
                      scope='col'
                      className='py-3.5 text-left text-sm font-semibold text-gray-900'
                    >
                      Slug
                    </th>
                  </tr>
                </thead>
                <tbody className='divide-y divide-gray-200 min-w-full'>
                  {items.map((article) => (
                    <tr key={article.id} className='w-full'>
                      <td className='py-4 pr-3 font-medium text-gray-900 sm:pl-0'>
                        {article.title && article.title}
                      </td>
                      <td className='py-4 text-gray-500'>
                        <a href={`/blog/${article.slug && article.slug}`}>
                          {article.slug && article.slug}
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <Pagination {...{ hasNext, hasPrev, next, prev }} />
    </div>
  );
};

// export async function getServerSideProps() {
//   const query = /* GraphQL */ `
//     query ListArticles($limit: Int, $nextToken: String) {
//       listArticles(limit: $limit, nextToken: $nextToken) {
//         items {
//           id
//           slug
//           title
//         }
//         nextToken
//       }
//     }
//   `;

//   // Fetch data from external API
//   try {
//     const res = await API.graphql(graphqlOperation(query, { limit: 2 }));
//     const articles = await res.data.listArticles;
//     return { props: { articles } };
//   } catch (error) {
//     console.log(error);
//   }
// }

export default Index;
