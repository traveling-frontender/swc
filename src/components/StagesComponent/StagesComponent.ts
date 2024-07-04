import { defineComponent } from 'vue'
import { useI18n } from 'vue-i18n'
import { useMainStore } from '@/store/main'
import AppCard from '../AppCard/AppCard.vue'

export default defineComponent({
  name: 'StagesComponent',
  components: {AppCard},
  props: {
    title: String,
    stages: Object,
    showButton: Boolean
  },
  setup() {
    const mainStore = useMainStore()
    const { t } = useI18n()
    return {
      t,
      mainStore
    }
  },
})
