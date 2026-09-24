
const feedmock:MockMethod = {
 
    url:'/api/feed/:id',
    method:'get', 
  response:()=>{
    return{
 
    code:200,
    body:{
        name:"wiwi.blog",
        author:"wiwi",
        type:2,
        count:500,
    }
  }
}
}
const feeditemsmock: MockMethod = {
  url: '/api/feeditems/:id',
  method: 'get',
  response: (options) => {
    // 1. 获取前端传过来的 page 参数（如果没有传，默认第 1 页）
    const page = Number(options.query?.page) || 1
    const size = Number(options.query?.size) || 10

    // 2. 超过 10 页，直接返回空数组，触发前端的 finished 停止加载
    if (page > 10) {
      return {
        code: 200,
        body: []
      }
    }

    // 3. 前 10 页：根据当前的 page 动态生成 6 条模拟数据
    const mockList = Array.from({ length: 6 }).map((_, index) => {
      // 算出全局唯一的 id
      const id = (page - 1) * size + (index + 1)
      
      return {
        id,
        title: `第 ${page} 页 - 示例文章标题 ${id}`,
        PublishTime: 1788169742 - id * 1000, // 模拟递减的时间戳
        link: `https://example.com/article/${id}`,
        // 模拟奇数有音频，偶数无音频（用来测试 v-if="data.audiolink"）
        audiolink:"https://traffic.megaphone.fm/SCIM2290485637.mp3"
      }
    })

    return {
      code: 200,
      body: mockList
    }
  }
}
export default [feedmock,feeditemsmock] as MockMethod[]