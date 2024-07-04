import { defineComponent } from 'vue'
import { useI18n } from 'vue-i18n'
import AppCard from '@/components/AppCard/AppCard.vue';
import { portfolio } from '@/config/mocks'

export default defineComponent({
  name: 'PortfolioPage',
  components: {
    AppCard,
  },
  setup() {
    const { t } = useI18n()
    return {
      t,
      portfolio
    }
  },
})
