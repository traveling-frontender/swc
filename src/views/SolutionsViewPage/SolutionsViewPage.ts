import { defineComponent } from 'vue'
import { useI18n } from 'vue-i18n'
import { useMainStore } from '@/store/main'
import AppCard from '@/components/AppCard/AppCard.vue'
import { solutions, stages } from '@/config/mocks'
import StagesComponent from '@/components/StagesComponent/StagesComponent.vue'
import TechnologiesComponent from '@/components/TechnologiesComponent/TechnologiesComponent.vue'
import PortfolioComponent from '@/components/PortfolioComponent/PortfolioComponent.vue'
import FeedbackComponent from '@/components/FeedbackComponent/FeedbackComponent.vue';
export default defineComponent({
  name: 'ServicesPage',
  components: {
    AppCard,
    StagesComponent,
    TechnologiesComponent,
    PortfolioComponent,
    FeedbackComponent,
  },
  setup() {
    const mainStore = useMainStore();
    const { t } = useI18n()
    return {
      t,
      solutions,
      stages,
      mainStore
    }
  },
})
