import { defineStore } from 'pinia'
// import { ref } from 'vue';
// import { Breakpoints } from '@/enum/Breakpoints'
// import { getStorageItemWithExpiry } from '@/helpers/localStorageHelpers'
// import { Locale } from '@/types/locale'
import axios from 'axios';
import { useApiCall } from '@/composables/useApiCall';
import { ResultActions } from './types';
export const useFeedbackStore = defineStore(
  'feedback',
  {
    state: () => {
      return {
        api: 'https://jsonplaceholder.typicode.com/todos/1',
        loading: null,
      }
    },
    actions: {
      async sendForm() {
        const apiCallFunc = async (controller: AbortController) => {
          return await axios.get(this.api, {
            signal: controller.signal
          })
            .then((response) => {
              return response.data
            })
            .catch((error) => {
              return error.data
            })
        }
        return useApiCall(apiCallFunc) as ResultActions
      }
    }
  },
)
