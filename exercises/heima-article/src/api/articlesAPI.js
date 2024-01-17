import request from '@/utils/request.js'
/* 获取文章的API接口 */
export const getArticlesAPI = function (page, limit) {
  return request.get('/articles', {
    params: {
      _page: page,
      _limit: limit
    }
  })
}
