import { defineStore } from 'pinia'
import { NavigationState } from '@/store/navigation/types'

export const useNavigationStore = defineStore<string, NavigationState>(
  'navigation',
  {
    state: () => ({
      navigationStatus: false,
    }),
  },
)
