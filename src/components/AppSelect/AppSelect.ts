import { computed, defineComponent, h } from 'vue'
import vSelect from 'vue-select'
import SvgIcon from '@/components/SvgIcon/SvgIcon.vue'
import { useI18n } from 'vue-i18n'

export default defineComponent({
  name: 'AppSelect',
  components: {
    vSelect,
  },
  props: {
    title: {
      type: String,
      required: false,
    },
    required: {
      type: Boolean,
      required: false,
      default: false,
    },
    formError: {
      type: Boolean,
      required: false,
    },
    fill: {
      type: Boolean,
      required: false
    }
  },

  setup(props) {
    const { t } = useI18n()
    const placeholderText = computed(() => {
      switch (props.title) {
        case 'example':
          return 'select.placeholder'
        default:
          return t('select.placeholder')
      }
    })
    const OpenIndicator = () => h(SvgIcon, { icon: 'arrow-down' })
    return { t, OpenIndicator, placeholderText }
  },
})
