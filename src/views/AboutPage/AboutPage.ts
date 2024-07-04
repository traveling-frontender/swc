import { defineComponent } from 'vue'
import { useI18n } from 'vue-i18n'
import AppCard from '@/components/AppCard/AppCard.vue'
import FeedbackComponent from '@/components/FeedbackComponent/FeedbackComponent.vue'
import ReviewsComponent from '@/components/ReviewsComponent/ReviewsComponent.vue'

export default defineComponent({
  name: 'HomePage',
  components: {
    AppCard,
    FeedbackComponent,
    ReviewsComponent
  },
  setup() {
    const { t } = useI18n()
    return {
      t,
    }
  },
})
