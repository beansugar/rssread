
import { MockMethod } from 'vite-plugin-mock';
import Mock from 'mockjs';

// This mock is for the `GetSubApi` endpoint.
const getSubCountMock: MockMethod = {
  url: '/api/sub/count',
  method: 'get',
  response: () => {
    return {
      code:200,
      message:"success",
      body:{
      Count: Mock.Random.integer(5, 100),
      }
    };
  },
};

// This mock is for the `SubFeed` endpoint.
const subFeedMock: MockMethod = {
  // The URL should be `/api/sub/detail` to match your SubFeed function
  url: '/api/sub/detail',
  method: 'get',
  response: (config) => {
    const page = Number(config.query.page) || 1;
    const size = Number(config.query.size) || 10;
    // Generate a list of items that match the `subfeed` interface { name: string }
    const feedList = Mock.mock(
      {
       [`Feed|${size}`]:[{
        'id':'@integer(1,100)',
        'name':'@cname',
       }]
     })

  
    return {
      code:200,
      message:"success",
      body: feedList,
    };
  },
};

export default [getSubCountMock, subFeedMock] as MockMethod[];
