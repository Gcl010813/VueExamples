<template>
  <div class="user">
    <div class="header">
      <div class="userImgOrName">
        <div class="userImg">
          <img src="@/assets/logo.png" alt="userImg">
        </div>
        <div class="userName">
          <p>用户名</p>
          <span>申请认证</span>
        </div>
      </div>
      <div class="userData">
        <div class="num">
          <span>0</span>
          <span>0</span>
          <span>0</span>
        </div>
        <div class="status">
          <span>动态</span>
          <span>关注</span>
          <span>粉丝</span>
        </div>
      </div>
    </div>
    <div class="middle">
      <van-cell-group class="action-card">
      <van-cell icon="edit" title="编辑资料" is-link />
      <van-cell icon="chat-o" title="小郭同学" is-link />
      <van-cell icon="warning-o" title="退出登录" is-link />
    </van-cell-group>
    </div>
  </div>
</template>

<script>
export default {
  name: 'myUser'
}
</script>

<style lang="less" scoped>
.user{
  width: 100%;
  .header{
    height: 200px;
    background-color: lightblue;
    .userImgOrName{
      height: 50%;
      display: flex;
      justify-self: start;
      align-items: center;

      .userImg{
        width: 80px;
        height: 80px;
        line-height: 80px;
        text-align: center;
        background-color: white;
        border-radius: 50%;
        margin: 0 20px;
        overflow: hidden;

        img{
          width: 100%;
        }
      }

      .userName{
        width: 60%;
        height: 80px;
        color: white;
        font-weight: 800;
        display: flex;
        flex-direction: column;
        justify-content: space-around;

        p{
          height: 30px;
          line-height: 30px;
        }
        span{
          width: 80px;
          height: 30px;
          line-height: 30px;
          text-align: center;
          border-radius: 10px;
          color: black;
          background-color:white;
        }
      }
    }
    .userData{
      height: 50%;
      font-size: 18px;
      color: white;
      text-align: center;
      display: flex;
      flex-wrap: wrap;
      align-content: center;

      .num{
        width: 100%;
        height: 20px;
        line-height: 20px;
        display: flex;
        span{
          flex: 1;
        }
      }

      .status{
        width: 100%;
        height: 30px;
        line-height: 30px;
        display: flex;
        span{
          flex: 1;
        }
      }
    }
  }

  .middle{
    height: 200px;
  }
}
</style>
