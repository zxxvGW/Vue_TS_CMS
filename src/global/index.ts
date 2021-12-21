import 'element-plus/dist/index.css'
import { App } from 'vue'
import registerElement from './resiter-element'

export function registerApp(app: App): void {
  registerElement(app)
}
