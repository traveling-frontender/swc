import { defineComponent, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import AppInputFile from '../AppInputFile/AppInputFile.vue'
import AppInput from '../AppInput/AppInput.vue'
import AppTextarea from '../AppTextarea/AppTextarea.vue'
import AppSelect from '../AppSelect/AppSelect.vue'
import AppCheckbox from '../AppCheckbox/AppCheckbox.vue'

export default defineComponent({
  name: 'AppModal',
  components: {AppInputFile, AppInput, AppTextarea, AppSelect, AppCheckbox},
  emits: ['closeModal'],
  setup(props, ctx) {
    const { t } = useI18n()

    const times = ref([
      { name: t('modal.select.month'), value: 'month' },
      { name: t('modal.select.week'), value: 'week' },
      { name: t('modal.select.day'), value: 'day' },
      { name: t('modal.select.hour'), value: 'hour' },
    ])
    const currentTime = ref(t('modal.select.day'))
    const closeModal = () => {
      ctx.emit('closeModal')
    }
    return {
      t,
      times,
      currentTime,
      closeModal
    }
  },
})
