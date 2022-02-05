<template>
  <div class="user">
    <page-search :search-form-config="searchFormConfig" />
    <page-content
      :content-table-config="contentTableConfig"
      :page-name="'users'"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import PageSearch from '@/components/page-search'
import { searchFormConfig } from './config/seach.config'

import PageContent from '@/components/page-content/src/page-content.vue'
import { contentTableConfig } from './config/content.config'

export default defineComponent({
  components: { PageSearch, PageContent },
  setup() {
    return {
      searchFormConfig,
      contentTableConfig
    }
  }
})
</script>
