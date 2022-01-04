<template>
  <div class="user">
    <div class="search">
      <v-form v-bind="searchFormConfig" />
    </div>
    <div class="content"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import VForm from '@/base-ui/form'
import { searchFormConfig } from './config/seach.config'

export default defineComponent({
  components: { VForm },
  name: 'user',
  setup() {
    return {
      searchFormConfig
    }
  }
})
</script>

<style scoped></style>
