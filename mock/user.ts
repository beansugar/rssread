import { MockMethod } from 'vite-plugin-mock';


// This mock is for the `GetSubApi` endpoint.
const getloginmock: MockMethod = {
  url: '/api/login',
  method: 'post',
  response: ({body}) => {
    console.log(body)
    return {
      code:200,
      message:"success",
      body:{
        access: "ssdfsd5sd",
    refresh:"sdscvc22s",
    userinfo:{
    name:body.name,
    id:1,
    }
      }
    };
  },
};
export default [getloginmock] as MockMethod[];