import type { App } from 'vue'
import {
  ElButton,
  ElForm,
  ElFormItem,
  ElIcon,
  ElTabPane,
  ElTabs,
  ElInput,
  ElCheckbox,
  ElLink
} from 'element-plus'
// import * as ElIconModules from '@element-plus/icons-vue'

const components = [
  ElButton,
  ElTabs,
  ElTabPane,
  ElIcon,
  ElForm,
  ElFormItem,
  ElInput,
  ElCheckbox,
  ElLink
]

export default function (app: App): void {
  for (const component of components) {
    app.component(component.name, component)
  }
  // for (const iconName in ElIconModules) {
  //   if (Reflect.has(ElIconModules, iconName)) {
  //     const item: DefineComponent = ElIconModules[iconName]
  //     app.component(iconName, item)
  //   }
  // }
}
