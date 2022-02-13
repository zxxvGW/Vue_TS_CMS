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
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import PageSearch from '@/components/page-search'
import { searchFormConfig } from './config/seach.config'

import PageContent from '@/components/page-content/src/page-content.vue'
import { contentTableConfig } from './config/content.config'
import { usePageSearch } from '@/hooks/use-page-search'

export default defineComponent({
  components: { PageSearch, PageContent },
  setup() {
    const [pageContentRef, handleResetClick, handleQueryClick] = usePageSearch()

    return {
      searchFormConfig,
      contentTableConfig,
      pageContentRef,
      handleResetClick,
      handleQueryClick
    }
  }
})
</script>
