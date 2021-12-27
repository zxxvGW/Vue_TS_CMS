<template>
  <div class="not-found">
    <div class="not-found-icon"><Icon /></div>
    <h1>404 资源不存在</h1>
    <p>生活总归带点荒谬</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Icon from './icon.vue'

export default defineComponent({
  components: { Icon }
})
</script>

<style lang="less" scoped>
.not-found {
  text-align: center;
  svg {
    margin-top: 20px;
    width: 8rem;
  }
}
</style>
