<template>
  <div class="page-content">
    <g-table :list-data="dateList" v-bind="contentTableConfig">
      <!-- 1.header的插槽 -->
      <template #headerHandler>
        <el-button type="primary" size="medium">新建用户</el-button>
      </template>

      <!-- 2.列表插槽 -->
      <template #status="scope">
        <el-button
          plain
          size="mini"
          :type="scope.row.enable ? 'success' : 'danger'"
        >
          {{ scope.row.enable ? '启用' : '禁用' }}
        </el-button>
      </template>

      <template #createAt="scope">
        <strong>{{ $filter.formatTime(scope.row.createAt) }}</strong>
      </template>

      <template #updateAt="scope">
        <strong>{{ $filter.formatTime(scope.row.updateAt) }}</strong>
      </template>

      <template #handler>
        <div class="handle-btns">
          <el-button size="mini" :icon="Edit">编辑</el-button>
          <el-button size="mini" type="danger" plain :icon="Delete"
            >删除</el-button
          >
        </div>
      </template>
    </g-table>
  </div>
</template>

<script lang="ts">
import GTable from '@/base-ui/table'
import { computed, defineComponent } from 'vue'
import { useStore } from '@/store'
import { Delete, Edit } from '@element-plus/icons-vue'

export default defineComponent({
  components: { GTable },
  props: {
    contentTableConfig: {
      type: Object,
      required: true
    },
    pageName: {
      type: String,
      required: true
    }
  },
  setup(props) {
    const store = useStore()
    store.dispatch('system/getPageListAction', {
      pageName: props.pageName,
      queryInfo: {
        offset: 0,
        size: 10
      }
    })
    const dateList = computed(() =>
      store.getters[`system/pageListData`](props.pageName)
    )

    return {
      Delete,
      Edit,
      dateList
    }
  }
})
</script>

<style lang="less" scoped>
.page-content {
  padding: 20px;
  border-top: 20px solid #f5f5f5;
}
</style>
