import { defineComponent, ref, reactive } from 'vue'
import { useI18n } from 'vue-i18n'
import AppInputFile from '../AppInputFile/AppInputFile.vue'
import AppInput from '../AppInput/AppInput.vue'
import AppTextarea from '../AppTextarea/AppTextarea.vue'
import AppSelect from '../AppSelect/AppSelect.vue'
import AppCheckbox from '../AppCheckbox/AppCheckbox.vue'
import { useFeedbackStore } from '@/store/feedback';
import { useVuelidate } from '@vuelidate/core'
import { minLength, required } from '@vuelidate/validators'
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
    const feedBackStore = useFeedbackStore();
    const formData = reactive({
      name: '',
      about: '',
      phone: '',
      file: [],
      time: '',
      agree: false

    })
    const requestResult = reactive({
      isLoading: false,
      data: {},
      error: {}
    })
    const rules = {
      name: {required, minLength: minLength(2)}, 
      phone: {required, minLength: minLength(16)}, 
      about: {required},
      file: {required},
      time: {required},
      agree: {checked: () => formData.agree}
    }
    const v$ = useVuelidate(rules, formData);
    
    const sendForm = async () => {
      const result = await v$.value.$validate();
      console.log(v$);
      if (result) {
        feedBackStore.sendForm()
        .then((res) => {
          Object.assign(requestResult, res)
        })
      } else {
        console.log();
        
      }
    }

    const closeModal = () => {
      ctx.emit('closeModal')
    }
    return {
      t,
      times,
      currentTime,
      closeModal,
      sendForm,
      requestResult,
      formData,
      v$,
    }
  },
})
