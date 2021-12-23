<template>
  <div class="login-panel">
    <h1 class="title">后台管理系统</h1>
    <el-tabs type="border-card" stretch>
      <el-tab-pane>
        <template #label>
          <div class="tab-pane-item">
            <el-icon><user-filled /></el-icon>账号登录
          </div>
        </template>
        <login-account ref="accountRef" />
      </el-tab-pane>
      <el-tab-pane>
        <template #label>
          <div class="tab-pane-item">
            <el-icon><iphone /></el-icon>手机登录
          </div>
        </template>
        <login-phone />
      </el-tab-pane>
    </el-tabs>

    <div class="account-control">
      <el-checkbox v-model="isKeepPassword">记住密码</el-checkbox>
      <el-link type="primary">忘记密码</el-link>
    </div>
    <el-button type="primary" class="login-btn" @click="handleLoginClick"
      >立即登录</el-button
    >
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { Iphone, UserFilled } from '@element-plus/icons-vue'
import LoginAccount from './login-account.vue'
import LoginPhone from './login-phone.vue'

export default defineComponent({
  components: { Iphone, UserFilled, LoginAccount, LoginPhone },
  setup() {
    const isKeepPassword = ref(false)
    // 获取组件的类型
    const accountRef = ref<InstanceType<typeof LoginAccount>>()
    // 登录
    const handleLoginClick = () => {
      accountRef.value?.loginAction()
    }
    return {
      isKeepPassword,
      accountRef,
      handleLoginClick
    }
  }
})
</script>

<style lang="less" scoped>
.login-panel {
  margin-bottom: 150px;
  width: 320px;

  .title {
    text-align: center;
  }

  .tab-pane-item {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .account-control {
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
  }

  .login-btn {
    width: 100%;
    margin-top: 10px;
  }
}
</style>
