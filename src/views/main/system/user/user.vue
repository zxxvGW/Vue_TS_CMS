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
      ref="pageContentRef"
      @new-btn-click="handleNewData as ()=> void"
      @edit-btn-click="handleEditData as ()=> void"
    />
    <page-modal
      ref="pageModalRef"
      :modal-config="modalConfig"
      :default-info="defaultInfo"
    ></page-modal>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import PageSearch from '@/components/page-search'
import PageContent from '@/components/page-content/src/page-content.vue'
import PageModal from '@/components/page-modal'

import { searchFormConfig } from './config/seach.config'
import { contentTableConfig } from './config/content.config'
import { modalConfig } from './config/modal.config'

import { usePageSearch } from '@/hooks/use-page-search'
import { usePageModal } from '@/hooks/use-page-modal'

export default defineComponent({
  components: { PageSearch, PageContent, PageModal },
  setup() {
    const [pageContentRef, handleResetClick, handleQueryClick] = usePageSearch()

    const [pageModalRef, defaultInfo, handleEditData, handleNewData] =
      usePageModal()

    return {
      searchFormConfig,
      contentTableConfig,
      modalConfig,
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

<style scoped>
.dialog-footer button:first-child {
  margin-right: 10px;
}
</style>
