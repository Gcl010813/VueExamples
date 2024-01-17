import axios from 'axios'
/* 获取文章的网址  后续需要其他网址时可导入 */
const request = axios.create({
  baseURL: 'https://applet-base-api-t.itheima.net'
})

export default request
