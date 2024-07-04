import { computed, defineComponent } from 'vue'
import { useI18n } from 'vue-i18n'
import AppCard from '@/components/AppCard/AppCard.vue'
import { technologies } from '@/config/mocks'
export default defineComponent({
  name: 'TechnologiesComponent',
  components: {
    AppCard,
  },
  props: {
    type: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const { t } = useI18n()
    const technologiesList = computed(() =>
      props.type === 'technologies'
        ? technologies.filter(
            (item) => item.title !== 'AI' && item.title !== '1C + Битрикс',
          )
        : technologies,
    )
    return {
      t,
      technologiesList,
    }
  },
})
