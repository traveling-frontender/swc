import { defineComponent } from 'vue'
import { useI18n } from 'vue-i18n'
import { services } from '@/config/mocks'
export default defineComponent({
  name: 'AppFooter',
  setup() {
    const { t } = useI18n()
    return {
      t,
      services,
    }
  },
})
