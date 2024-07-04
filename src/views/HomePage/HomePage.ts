import { defineComponent, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useMainStore } from '@/store/main'
import AppCard from '@/components/AppCard/AppCard.vue'
import TechnologiesComponent from '@/components/TechnologiesComponent/TechnologiesComponent.vue'
import ClientsComponent from '@/components/ClientsComponent/ClientsComponent.vue'
import PortfolioComponent from '@/components/PortfolioComponent/PortfolioComponent.vue'
import FacilitiesComponent from '@/components/FacilitiesComponent/FacilitiesComponent.vue'

import { services, vacancies } from '@/config/mocks'
import FeedbackComponent from '@/components/FeedbackComponent/FeedbackComponent.vue'
import VacancyComponent from '@/components/VacancyComponent/VacancyComponent.vue'

export default defineComponent({
  name: 'HomePage',
  components: {
    AppCard,
    TechnologiesComponent,
    ClientsComponent,
    PortfolioComponent,
    FacilitiesComponent,
    FeedbackComponent,
    VacancyComponent
  },
  setup() {
    const { t } = useI18n()
    const modalActive = ref(false);
    const mainStore = useMainStore()
    const toggleModal = () => {
      modalActive.value = !modalActive.value
      if (modalActive.value) {
        document.body.style.overflow = 'hidden'
      } else {
        document.body.style.overflow = 'auto'
      }
    }
    return {
      t,
      services,
      vacancies,
      modalActive,
      toggleModal,
      mainStore
    }
  },
})
