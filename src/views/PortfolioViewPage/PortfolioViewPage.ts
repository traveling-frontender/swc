import { defineComponent } from 'vue'
import { useI18n } from 'vue-i18n'
import AppCard from '@/components/AppCard/AppCard.vue';
import { portfolio } from '@/config/mocks'
import FeedbackComponent from '@/components/FeedbackComponent/FeedbackComponent.vue';
import StagesComponent from '@/components/StagesComponent/StagesComponent.vue';
import { stages, servicesDescription, anotherServicesDescription } from '@/config/mocks'

export default defineComponent({
  name: 'PortfolioPage',
  components: {
    AppCard,
    FeedbackComponent,
    StagesComponent
  },
  setup() {
    const { t } = useI18n()
    return {
      t,
      portfolio,
      stages,
      servicesDescription,
      anotherServicesDescription
    }
  },
})
