import { defineComponent } from 'vue'
import { useI18n } from 'vue-i18n'
import { useMainStore } from '@/store/main'
import AppCard from '@/components/AppCard/AppCard.vue'
import { services, servicesDescription, stages } from '@/config/mocks'
import StagesComponent from '@/components/StagesComponent/StagesComponent.vue'
import TechnologiesComponent from '@/components/TechnologiesComponent/TechnologiesComponent.vue'
import PortfolioComponent from '@/components/PortfolioComponent/PortfolioComponent.vue'
import ReviewsComponent from '@/components/ReviewsComponent/ReviewsComponent.vue'
import FeedbackComponent from '@/components/FeedbackComponent/FeedbackComponent.vue'
import AdvantagesComponent from '@/components/AdvantagesComponent/AdvantagesComponent.vue'

export default defineComponent({
  name: 'ServiceView',
  components: {
    AppCard,
    StagesComponent,
    TechnologiesComponent,
    PortfolioComponent,
    ReviewsComponent,
    FeedbackComponent,
    AdvantagesComponent
  },
  setup() {
    const mainStore = useMainStore()
    const { t } = useI18n()
    return {
      t,
      services,
      servicesDescription,
      stages,
      mainStore
    }
  },
})
