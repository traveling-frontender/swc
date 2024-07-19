import { defineComponent } from 'vue'
import { useI18n } from 'vue-i18n'



export default defineComponent({
  name: 'AppCheckbox',
  props: {
    label: String,
    modelValue: Boolean,
    error: Boolean
  },
  setup(props, ctx) {
    const { t } = useI18n();
    const changeState = () => {
      ctx.emit('update:modelValue', !props.modelValue);
    }
    return {
      t,
      changeState,
    }
  },
})
