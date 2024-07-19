import { defineComponent, onMounted, onUnmounted } from 'vue'
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
    const mainStore = useMainStore();
    const titles = ['web', 'crm', 'erp', 'web'];
    let currentIndex = 0;
    let timeoutFunction:null | ReturnType<typeof setTimeout> = null
    let createInterval:null | ReturnType<typeof setInterval> = null;
    let removeInterval:null | ReturnType<typeof setInterval> = null;
    onMounted(() => {
      timeoutFunction = setTimeout(() => {
        const titleElement = document.querySelector('.typingEffect__line2');
        if (!titleElement) return
        titleElement.textContent = t(`home.title.${titles[currentIndex]}`)
        titleElement?.classList.add('typingEffect__line2_started');
        createInterval = setInterval(() => {
          titleElement?.classList.add('typingEffect__line2_cancel');
        }, 3200)
        removeInterval = setInterval(() => {
          if (titles[currentIndex + 1]) {
            currentIndex += 1
          } else currentIndex = 0
          titleElement.textContent = t(`home.title.${titles[currentIndex]}`);
          titleElement?.classList.remove('typingEffect__line2_cancel')
        }, 6400)
      }, 2500);
    })
    onUnmounted(() => {
      clearTimeout(Number(timeoutFunction))
      clearInterval(Number(createInterval));
      clearInterval(Number(removeInterval))
    })
    return {
      t,
      services,
      vacancies,
      mainStore
    }
  },
})
