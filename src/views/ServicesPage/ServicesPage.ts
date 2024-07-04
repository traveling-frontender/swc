import { defineComponent } from 'vue'
import { useI18n } from 'vue-i18n'
import AppCard from '@/components/AppCard/AppCard.vue'
import { services } from '@/config/mocks'

export default defineComponent({
  name: 'ServicesPage',
  components: {
    AppCard,
  },
  setup() {
    const { t } = useI18n()
    return {
      t,
      services
    }
  },
})
