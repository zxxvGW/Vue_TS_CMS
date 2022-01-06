<template>
  <div class="page-search">
    <div class="search">
      <v-form v-bind="searchFormConfig" v-model="formData">
        <template #header> 高级检索 </template>
        <template #footer>
          <div class="handle-btns">
            <el-button :icon="Refresh">重置</el-button>
            <el-button type="primary" :icon="Search">查找</el-button>
          </div>
        </template>
      </v-form>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import VForm from '@/base-ui/form'
import { Search, Refresh } from '@element-plus/icons-vue'

export default defineComponent({
  name: 'page-search',
  props: {
    searchFormConfig: {
      type: Object,
      required: true
    }
  },
  components: { VForm },
  setup() {
    const formData = ref({
      id: '',
      name: ''
    })
    return {
      formData,
      Search,
      Refresh
    }
  }
})
</script>

<style lang="less" scoped>
.handle-btns {
  text-align: right;
  padding: 0 50px 20px 0;
}
</style>
