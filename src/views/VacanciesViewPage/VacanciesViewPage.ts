import { defineComponent } from 'vue'
import { useI18n } from 'vue-i18n'
import AppCard from '@/components/AppCard/AppCard.vue'
import FeedbackComponent from '@/components/FeedbackComponent/FeedbackComponent.vue'

export default defineComponent({
  name: 'ServicesPage',
  components: {
    AppCard,
    FeedbackComponent
  },
  setup() {
    const { t } = useI18n()
    return {
      t,
    }
  },
})
