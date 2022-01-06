<template>
  <div class="user">
    <page-search :search-form-config="searchFormConfig" />

    <div class="content">
      <g-table :list-data="userList" :prop-list="propList" />
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import PageSearch from '@/components/page-search'
import { searchFormConfig } from './config/seach.config'
import { useStore } from '@/store'
import GTable from '@/base-ui/table'

export default defineComponent({
  components: { PageSearch, GTable },
  setup() {
    const store = useStore()
    store.dispatch('system/getPageListAction', {
      pageUrl: '/users/list',
      queryInfo: {
        offset: 0,
        size: 10
      }
    })
    const userList = computed(() => store.state.system.userList)
    const propList = [
      { prop: 'name', label: '用户名', minWidth: '100' },
      { prop: 'realname', label: '用户名', minWidth: '100' },
      { prop: 'cellphone', label: '手机号码', minWidth: '100' },
      { prop: 'enable', label: '状态', minWidth: '100' },
      // { prop: 'department', label: '部门', minWidth: '100' },
      { prop: 'createAt', label: '创建时间', minWidth: '250' },
      { prop: 'updateAt', label: '更新时间', minWidth: '250' }
    ]
    return {
      userList,
      propList,
      searchFormConfig
    }
  }
})
</script>

<style scoped>
.content {
  padding: 20px;
  border-top: 20px solid #f5f5f5;
}
</style>
