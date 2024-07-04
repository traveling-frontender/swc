import { defineComponent } from 'vue'
import { useI18n } from 'vue-i18n'
import { Swiper, SwiperSlide } from 'swiper/vue'

import 'swiper/css'
import 'swiper/css/pagination'

export default defineComponent({
  name: 'ClientsComponent',
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const { t } = useI18n()
    return {
      t,
    }
  },
})
