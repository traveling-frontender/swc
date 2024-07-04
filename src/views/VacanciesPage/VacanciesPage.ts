import { defineComponent } from 'vue'
import { useI18n } from 'vue-i18n'
import AppCard from '@/components/AppCard/AppCard.vue';
import { vacancies } from '@/config/mocks'
import VacancyComponent from '@/components/VacancyComponent/VacancyComponent.vue';

export default defineComponent({
  name: 'VacanciesPage',
  components: {
    AppCard,
    VacancyComponent
  },
  setup() {
    const { t } = useI18n()
    return {
      t,
      vacancies
    }
  },
})
