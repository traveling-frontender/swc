import { defineComponent, ref } from 'vue'
import { useI18n } from 'vue-i18n';
import AppCard from '../AppCard/AppCard';
import { mask } from 'vue-the-mask';

export default defineComponent({
  name: 'AppField',
  components: {
    AppCard
  },
  props: {
    placeholder: String,
    modelValue: String,
    error: String,
    whitePlaceholder: Boolean,
    coloredBorder: Boolean,
    backgroundColor: String,
    mask: {
      type: String,
      default: ''
    }
  },
  emits: ['update:modelValue'],
  directives: {
    mask: (el, binding: any, vNode: any, oldVnode) => {
      if(!binding.value) return
      mask(el, binding, vNode, oldVnode)
    }
  },
  setup(props, ctx) {
    const { t } = useI18n();
    const isFocus = ref(false);
    const update = (e: Event) => {
      const currentValue = (e.target as HTMLInputElement).value
      ctx.emit('update:modelValue', currentValue)
    }
    return {
      t,
      isFocus,
      update
    }
  },
})
