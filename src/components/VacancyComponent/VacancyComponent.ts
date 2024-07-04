import { defineComponent } from 'vue'
import { useI18n } from 'vue-i18n'
import AppCard from '@/components/AppCard/AppCard.vue'
import { vacancies } from '@/config/mocks'

export default defineComponent({
  name: 'HomePage',
  components: {
    AppCard,
  },
  setup() {
    const { t } = useI18n()
    return {
      t,
      vacancies,
    }
  },
})
