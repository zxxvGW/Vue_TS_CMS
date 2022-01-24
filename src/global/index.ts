import 'element-plus/dist/index.css'
import { App } from 'vue'
import regsiterElement from './regsiter-element'
import regsiterProperties from './regsiter-properies'
export function registerApp(app: App): void {
  app.use(regsiterElement)
  app.use(regsiterProperties)
}
