import { App } from 'vue'
import SvgIcon from '@/components/SvgIcon/SvgIcon.vue'
import AppSelect from '@/components/AppSelect/AppSelect.vue'

const globalComponents = (app: App) => {
  app.component('SvgIcon', SvgIcon)
  app.component('AppSelect', AppSelect)
}
export default globalComponents
