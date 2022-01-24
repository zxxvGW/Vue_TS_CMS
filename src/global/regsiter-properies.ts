import { formatUTCString } from '@/utils/date-format'
import { App } from 'vue'

export default function regsiterProperties(app: App) {
  app.config.globalProperties.$filter = {
    formatTime(value: string) {
      return formatUTCString(value)
    }
  }
}
