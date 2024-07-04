import { defineComponent, ref } from 'vue'
import { useI18n } from 'vue-i18n';
import AppCard from '../AppCard/AppCard';

export default defineComponent({
  name: 'AppTextarea',
  components: {
    AppCard
  },
  props: {
    placeholder: String,
    modelValue: String,
    whitePlaceholder: Boolean,
    coloredBorder: Boolean,
    backgroundColor: String
  },
  emits: ['update:modelValue'],
  setup(props, ctx) {
    const { t } = useI18n();
    const isFocus = ref(false);
    const update = (e: Event) => {
      ctx.emit('update:modelValue', (e.target as HTMLInputElement).value)
    }
    return {
      t,
      isFocus,
      update
    }
  },
})
