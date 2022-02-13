<template>
  <div class="page-content">
    <g-table
      :list-data="dateList"
      :list-count="dataCount"
      v-bind="contentTableConfig"
      v-model:page="pageInfo"
    >
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
import { computed, defineComponent, ref, watch } from 'vue'
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
    // store
    const store = useStore()
    // 双向数据绑定pageInfo
    const pageInfo = ref({ currentPage: 0, pageSize: 10 })
    watch(pageInfo, () => getPageData())
    // 发送网络请求
    const getPageData = (queryInfo: any = {}) => {
      store.dispatch('system/getPageListAction', {
        pageName: props.pageName,
        queryInfo: {
          offset: pageInfo.value.currentPage * pageInfo.value.pageSize,
          size: pageInfo.value.pageSize,
          ...queryInfo
        }
      })
    }

    getPageData()
    // 从store里取数据列表
    const dateList = computed(() =>
      store.getters[`system/pageListData`](props.pageName)
    )
    // 从store里取数据计数
    const dataCount = computed(() =>
      store.getters[`system/pageListCount`](props.pageName)
    )

    return {
      Delete,
      Edit,
      dateList,
      dataCount,
      pageInfo,
      getPageData
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
