<template>
  <div class="g-table">
    <el-table :data="listData" style="width: 100%" border>
      <template v-for="propItem in propList" :key="propItem.prop">
        <el-table-column v-bind="propItem" align="center">
          <template #default="scope">
            <slot :name="propItem.slotName" :row="scope.row">
              {{ scope.row[propItem.prop] }}
            </slot>
          </template>
        </el-table-column>
      </template>
    </el-table>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'g-table',
  props: {
    listData: {
      type: Array as any,
      required: true
    },
    propList: {
      type: Array as any,
      required: true
    }
  },
  setup() {
    return {}
  }
})
</script>

<style lang="less" scoped></style>
