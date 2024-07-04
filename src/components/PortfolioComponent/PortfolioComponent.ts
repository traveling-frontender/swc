import {computed, defineComponent, onMounted, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { Swiper, SwiperSlide } from 'swiper/vue'
import {Pagination, Navigation } from 'swiper/modules'
import { useMainStore } from '@/store/main'

import 'swiper/css'
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination'
import { portfolio } from '@/config/mocks'
export default defineComponent({
  name: 'ClientsComponent',
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const { t } = useI18n();
    const projects = computed(() => portfolio);
    const currentSlide = computed(() => (portfolio[currentIndex.value]));
    const mainStore = useMainStore();
    const next = ref(null)
    const prev = ref(null)
    const slideWidth = ref();
    const currentIndex = ref(0)
    const onSlideChange = (e: any) =>{
      currentIndex.value = e.realIndex
    }
    onMounted(() => {
      slideWidth.value = (document.querySelector('.portfolio__carousel-item') as HTMLElement).offsetWidth + 'px'
    })
    return {
      t,
      modules: [Pagination, Navigation],
      next,
      prev,
      projects,
      slideWidth,
      onSlideChange,
      currentSlide,
      mainStore
    }
  },
})
