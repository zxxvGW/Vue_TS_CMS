<template>
  <div class="page-search">
    <div class="search">
      <g-form v-bind="searchFormConfig" v-model="formData">
        <template #header> 高级检索 </template>
        <template #footer>
          <div class="handle-btns">
            <el-button :icon="Refresh" @click="handleResetClick"
              >重置</el-button
            >
            <el-button type="primary" :icon="Search" @click="handleQueryClick"
              >查找</el-button
            >
          </div>
        </template>
      </g-form>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import GForm from '@/base-ui/form'
import { Search, Refresh } from '@element-plus/icons-vue'

export default defineComponent({
  name: 'page-search',
  props: {
    searchFormConfig: {
      type: Object,
      required: true
    }
  },
  components: { GForm },
  emits: ['resetBtnClick', 'queryBtnClick'],
  setup(props, { emit }) {
    // 1.formData中的属性应该动态决定
    const formItems = props.searchFormConfig?.formItems ?? []
    const formOriginData: any = {}
    for (const item of formItems) {
      formOriginData[item.field] = ''
    }
    const formData = ref(formOriginData)

    // 2.reset
    const handleResetClick = () => {
      // for (const key in formOriginData) {
      //   formData.value[`${key}`] = formOriginData[key]
      // }
      formData.value = formOriginData
      emit('resetBtnClick')
    }
    const handleQueryClick = () => {
      emit('queryBtnClick', formData.value)
    }
    return {
      formData,
      Search,
      Refresh,
      handleResetClick,
      handleQueryClick
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
