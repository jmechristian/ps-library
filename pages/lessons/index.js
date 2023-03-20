import React from 'react';

import { Amplify, API, graphqlOperation } from 'aws-amplify';

const Index = ({ lessons }) => {
  return (
    <div className='max-w-7xl mx-auto px-6 md:px-0'>
      <div className='px-4 sm:px-6 lg:px-8 py-16'>
        <div className='sm:flex sm:items-center'>
          <div className='sm:flex-auto'>
            <h1 className='text-base font-semibold leading-6 text-gray-900'>
              Lessons
            </h1>
          </div>
        </div>
        <div className='mt-8 flow-root'>
          <div className='-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8'>
            <div className='inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8'>
              <table className='min-w-full divide-y divide-gray-300'>
                <thead>
                  <tr>
                    <th
                      scope='col'
                      className='py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0'
                    >
                      Title
                    </th>
                    <th
                      scope='col'
                      className='py-3.5 px-3 text-left text-sm font-semibold text-gray-900'
                    >
                      Slug
                    </th>
                  </tr>
                </thead>
                <tbody className='divide-y divide-gray-200'>
                  {lessons.map((article) => (
                    <tr key={article.id}>
                      <td className='whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0'>
                        {article.title}
                      </td>
                      <td className='whitespace-nowrap py-4 px-3 text-sm text-gray-500'>
                        <a href={`/lessons/${article.slug}`}>{article.slug}</a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export async function getServerSideProps() {
  const query = /* GraphQL */ `
    query ListLessons {
      listLessons {
        items {
          title
          id
          slug
        }
      }
    }
  `;

  // Fetch data from external API
  try {
    const res = await API.graphql(graphqlOperation(query));
    const lessons = await res.data.listLessons.items;
    return { props: { lessons } };
  } catch (error) {
    console.log(error);
  }
}

export default Index;
