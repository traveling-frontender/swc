import { defineComponent, ref } from 'vue'
import { useI18n } from 'vue-i18n'



export default defineComponent({
  name: 'AppCheckbox',
  props: {
    label: String
  },
  setup() {
    const { t } = useI18n();
    const isCheck = ref(false);
    const changeState = () => {
      isCheck.value = !isCheck.value
    }
    return {
      t,
      isCheck,
      changeState
    }
  },
})
