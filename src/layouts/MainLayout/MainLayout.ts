import { defineComponent } from 'vue'
import AppHeader from '@/components/AppHeader/AppHeader.vue'
import AppFooter from '@/components/AppFooter/AppFooter.vue'
import AppModal from '@/components/AppModal/AppModal.vue'

import { useMainStore } from '@/store/main'

export default defineComponent({
  name: 'MainLayout',
  components: {
    AppHeader,
    AppFooter,
    AppModal
  },
  setup() { 
    const mainStore = useMainStore()
    return {
      close,
      mainStore
    }
  }
})
