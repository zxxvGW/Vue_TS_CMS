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
        <el-button v-if="isCreate" type="primary" size="medium"
          >新建用户</el-button
        >
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

      <template #handler="scope">
        <div class="handle-btns">
          <el-button size="mini" :icon="Edit" v-if="isUpdate">编辑</el-button>
          <el-button
            size="mini"
            type="danger"
            plain
            :icon="Delete"
            v-if="isDelete"
            @click="handleDeleteClick(scope.row)"
            >删除</el-button
          >
        </div>
      </template>

      <!-- 在page-content中动态插入剩余插槽 -->
      <template
        v-for="item in otherPropSlots"
        :key="item.prop"
        #[item.slotName]="scope"
      >
        <template v-if="item.slotName">
          <slot :name="item.slotName" :row="scope.row"></slot>
        </template>
      </template>
    </g-table>
  </div>
</template>

<script lang="ts">
import GTable from '@/base-ui/table'
import { computed, defineComponent, ref, watch } from 'vue'
import { useStore } from '@/store'
import { Delete, Edit } from '@element-plus/icons-vue'
import { usePermission } from '@/hooks/use-permission'

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
    // 获取用户权限
    const isCreate = usePermission(props.pageName, 'create')
    const isUpdate = usePermission(props.pageName, 'update')
    const isDelete = usePermission(props.pageName, 'delete')
    const isQuery = usePermission(props.pageName, 'query')

    // 1.双向数据绑定pageInfo
    const pageInfo = ref({ currentPage: 1, pageSize: 10 })
    watch(pageInfo, () => getPageData())
    // 2.发送网络请求
    const getPageData = (queryInfo: any = {}) => {
      if (!isQuery) return
      store.dispatch('system/getPageListAction', {
        pageName: props.pageName,
        queryInfo: {
          offset: (pageInfo.value.currentPage - 1) * pageInfo.value.pageSize,
          size: pageInfo.value.pageSize,
          ...queryInfo
        }
      })
    }

    getPageData()
    // 3.从store里取数据列表
    const dateList = computed(() =>
      store.getters[`system/pageListData`](props.pageName)
    )
    // 3.从store里取数据计数
    const dataCount = computed(() =>
      store.getters[`system/pageListCount`](props.pageName)
    )

    // 4.获取其他动态插槽名称
    const otherPropSlots = props.contentTableConfig?.propList.filter(
      (item: any) => {
        return !['status', 'createAt', 'updateAt', 'handler'].includes(
          item.slotName
        )
      }
    )
    // 5.删除，编辑，新建
    const handleDeleteClick = (item: any) => {
      // console.log(item)
      store.dispatch('system/deletePageDataAction', {
        pageName: props.pageName,
        id: item.id
      })
      console.log(item)
    }

    return {
      Delete,
      Edit,
      dateList,
      dataCount,
      pageInfo,
      otherPropSlots,
      getPageData,
      isCreate,
      isUpdate,
      isDelete,
      isQuery,
      handleDeleteClick
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
