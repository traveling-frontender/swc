import { defineComponent } from 'vue'
import { useI18n } from 'vue-i18n'

export default defineComponent({
  name: 'AppCard',
  setup() {
    const { t } = useI18n()
    return {
      t,
    }
  },
})
