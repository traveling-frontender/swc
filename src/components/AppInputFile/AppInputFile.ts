import { defineComponent, ref } from 'vue'
import { useI18n } from 'vue-i18n'

export default defineComponent({
  name: 'AppInputFile',
  setup() {
    const { t } = useI18n();
    const file = ref([])
    const uploadFile = (event: Event) => {
      file.value = (event.target).files
    }
    const removeFile = () => {
      file.value = []
    }
    return {
      t,
      uploadFile,
      file,
      removeFile
    }
  },
})
