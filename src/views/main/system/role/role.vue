<template>
  <div class="role">
    <page-search :search-form-config="searchFormConfig" />
    <page-content
      :content-table-config="contentTableConfig"
      :page-name="'role'"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import PageSearch from '@/components/page-search'
import { searchFormConfig } from './config/seach.config'

import pageContent from '@/components/page-content/src/page-content.vue'
import { contentTableConfig } from './config/content.config'
export default defineComponent({
  name: 'role',
  components: { pageContent, PageSearch },
  setup() {
    return {
      contentTableConfig,
      searchFormConfig
    }
  }
})
</script>

<style scoped></style>
