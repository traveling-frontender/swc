import { defineComponent, reactive } from 'vue'
import { useI18n } from 'vue-i18n'
import AppCard from '@/components/AppCard/AppCard.vue';
import AppInput from "@/components/AppInput/AppInput.vue"
import AppTextarea from '../AppTextarea/AppTextarea.vue';
import { useFeedbackStore } from '@/store/feedback';
import { useVuelidate } from '@vuelidate/core'
import { required, email } from '@vuelidate/validators'
export default defineComponent({
  name: 'FeedbackComponent',
  components: {
    AppCard,
    AppInput,
    AppTextarea
  },
  props: {
    fill: Boolean
  },
  setup() {
    const { t } = useI18n();
    const feedBackStore = useFeedbackStore();
    const formData = reactive({
      name: '',
      phone: '',
      email: '',
      subject: '',
      message: ''
    })
    const requestResult = reactive({
      isLoading: false,
      data: {},
      error: {}
    })
    const rules = {
      name: {required}, 
      phone: {required}, 
      email: {required, email}, 
      subject: {required}, 
      message: {required}
    }
    const v$ = useVuelidate(rules, formData);
    
    const sendForm = async () => {
      const result = await v$.value.$validate();
      if (result) {
        feedBackStore.sendForm()
        .then((res) => {
          Object.assign(requestResult, res)
        })
      } else {
        console.log(result);
        
      }
    }
    return {
      t,
      sendForm,
      requestResult,
      formData,
      v$,
    }
  },
})
