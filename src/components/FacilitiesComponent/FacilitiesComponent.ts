import {defineComponent } from 'vue'
import { useI18n } from 'vue-i18n'
import { Swiper, SwiperSlide } from 'swiper/vue'
import {Pagination } from 'swiper/modules'
import AppCard from '@/components/AppCard/AppCard.vue'

import 'swiper/css'
import 'swiper/css/pagination'

export default defineComponent({
  name: 'FacilitiesComponent',
  components: {
    Swiper,
    SwiperSlide,
    AppCard
  },
  setup() {
    const { t } = useI18n();
    return {
      t,
      modules: [Pagination],
    }
  },
})
