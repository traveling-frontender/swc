import { defineComponent, ref } from 'vue'
import { useI18n } from 'vue-i18n'

export default defineComponent({
  name: 'AppInputFile',
  setup() {
    const { t } = useI18n();
    const file = ref<FileList | null>(null)
    const uploadFile = (event: Event) => {
      file.value = (event.target as HTMLInputElement).files
    }
    const removeFile = () => {
      file.value = null
    }
    return {
      t,
      uploadFile,
      file,
      removeFile
    }
  },
})
