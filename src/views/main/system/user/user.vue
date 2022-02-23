<template>
  <div class="user">
    <page-search
      :search-form-config="searchFormConfig"
      @reset-btn-click="handleResetClick as () => void"
      @query-btn-click="handleQueryClick as () => void"
    />
    <page-content
      :content-table-config="contentTableConfig"
      :page-name="'users'"
      :ref="pageContentRef"
      @new-btn-click="handleNewData as () => void"
      @edit-btn-click="handleEditData as () => void"
    />
    <page-modal
      ref="pageModalRef"
      :modal-config="modalConfigRef"
      :default-info="defaultInfo"
    ></page-modal>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'

import PageSearch from '@/components/page-search'
import PageContent from '@/components/page-content/src/page-content.vue'
import PageModal from '@/components/page-modal'

import { searchFormConfig } from './config/seach.config'
import { contentTableConfig } from './config/content.config'
import { modalConfig } from './config/modal.config'

import { usePageSearch } from '@/hooks/use-page-search'
import { usePageModal } from '@/hooks/use-page-modal'
import { useStore } from '@/store'

export default defineComponent({
  components: { PageSearch, PageContent, PageModal },
  setup() {
    const store = useStore()
    const [pageContentRef, handleResetClick, handleQueryClick] = usePageSearch()

    const newCallback = () => {
      const passwordItem = modalConfig.formItems.find(
        (item) => item.field === 'password'
      )
      if (!passwordItem) return
      passwordItem.isHidden = false
    }
    const editCallBack = () => {
      const passwordItem = modalConfig.formItems.find(
        (item) => item.field === 'password'
      )
      if (!passwordItem) return
      passwordItem.isHidden = true
    }

    const [pageModalRef, defaultInfo, handleEditData, handleNewData] =
      usePageModal(newCallback, editCallBack)
    // 动态添加部门和角色列表
    const modalConfigRef = computed(() => {
      const departmentItem = modalConfig.formItems.find(
        (item) => item.field === 'departmentId'
      )
      const roleItem = modalConfig.formItems.find(
        (item) => item.field === 'roleId'
      )

      departmentItem!.options = store.state.entireDepartment.map((item) => {
        return { title: item.name, value: item.id }
      })
      roleItem!.options = store.state.entireRole.map((item) => {
        return { title: item.name, value: item.id }
      })
      return modalConfig
    })

    return {
      searchFormConfig,
      contentTableConfig,
      modalConfigRef,
      pageContentRef,
      pageModalRef,
      handleResetClick,
      handleQueryClick,
      handleNewData,
      handleEditData,
      defaultInfo
    }
  }
})
</script>

<style lang="less" scoped>
.dialog-footer button:first-child {
  margin-right: 10px;
}
</style>
