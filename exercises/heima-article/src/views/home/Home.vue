<template>
  <div class="home">
    <!-- 下拉刷新 -->
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh" :disabled="finished">
      <van-nav-bar title="小郭头条" fixed placeholder />
      <!-- 上拉加载  immediate-check->是否在初始化时立即执行滚动位置检查 -->
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="已经到底啦"
        @load="onLoad"
        :immediate-check="false"
      >
        <!-- 文章组件 -->
        <ArticlesInfoVue
          v-for="(item, index) in articleList"
          :key="index"
          :title="item.title"
          :author="item.aut_name"
          :cmt-count="item.comm_count"
          :time="item.pubdate"
          :cover="item.cover"
        ></ArticlesInfoVue>
      </van-list>
    </van-pull-refresh>
  </div>
</template>

<script>
import { getArticlesAPI } from '@/api/articlesAPI.js'
import ArticlesInfoVue from '@/components/article/ArticleInfo.vue'
export default {
  name: 'myHome',
  data () {
    return {
      page: 1,
      limit: 10,
      articleList: [],
      /* 下拉刷新 */
      isLoading: false,
      /* 上拉加载 上拉加载只有在 loading=false 时触发 */
      loading: false,
      /* 禁用组件(下拉刷新可以:bind绑定  上拉加载自带) */
      finished: false
    }
  },
  components: {
    ArticlesInfoVue
  },
  methods: {
    async initArticleList (isRefresh) {
      const { data: res } = await getArticlesAPI(this.page, this.limit)
      if (isRefresh) {
        this.articleList = [...res, ...this.articleList]
      } else {
      /* es6语法 列表展开再合并 */
        this.articleList = [...this.articleList, ...res]
      }
      // 加载数据 若res数据为空(当前页为空) 加载完成 页码减 1 不再触发加载事件
      if (res.length === 0) {
        this.page--
        this.finished = true
        // 加载数据 若res数据不为每页的限制数量(当前页不满 后续无数据) 不再触发加载事件
      } else if (res.length !== this.limit) {
        this.finished = true
      }
    },
    /* 下拉刷新 */
    onRefresh () {
      /* 加个定时器 展示过程 */
      setTimeout(() => {
        this.page++
        this.initArticleList(this.isLoading)
        this.isLoading = false
      }, 1000)
    },
    /* 上拉加载 */
    onLoad () {
      this.page++
      this.initArticleList()
      // 防抖就相当于一直按回城,每次都会被打断,停下了才不会被打断      节流就相当于技能cd没好,点了没用
      // 防抖是又触发取消上一次的请求    节流是请求未完成不能进行下一次请求
      // 加载完 改会fasle
      this.loading = false
    }
  },
  created () {
    this.initArticleList()
  }
}
</script>

<style lang="less" scoped>
.home {
  /deep/ .van-nav-bar {
    border-radius:20px;
    .van-ellipsis{
      font-weight: 800;
    }
  }
}
</style>
