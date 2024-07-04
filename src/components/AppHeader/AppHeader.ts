import { defineComponent, computed, ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import mainMenu from '@/config/mainMenuLinks'
import { useMainStore } from '@/store/main'
import { useNavigationStore } from '@/store/navigation'
import { useRoute } from 'vue-router'
import { setStorageItemWithExpiry } from '@/helpers/localStorageHelpers'
import { Locale } from '@/types/locale'

export default defineComponent({
  name: 'AppHeader',
  setup() {
    const { t, locale } = useI18n()
    const mainStore = useMainStore()
    const navigationStore = useNavigationStore()
    const route = useRoute()
    const activeLocale = computed(() => locale.value)
    const menuLinks = computed(() => mainMenu)
    const currenLocale = ref(mainStore.appLocale)
    const languages = [
      { name: 'Ru', value: 'ru' },
      { name: 'En', value: 'en' },
    ]

    const reduceLanguages = (lang: { name: string; value: string }) =>
      lang.value

    const changeLocale = (localeToSet: Locale) => {
      locale.value = localeToSet
      const HTML = document.querySelector('html')
      HTML?.setAttribute('lang', localeToSet)
      setStorageItemWithExpiry('locale', localeToSet)
      mainStore.$patch({
        appLocale: localeToSet,
      })
    }
    const toggleNavigation = () => {
      navigationStore.$patch({
        navigationStatus: !navigationStore.navigationStatus,
      })
    }
    watch(
      () => currenLocale.value,
      () => {
        changeLocale(currenLocale.value)
      },
    )

    return {
      t,
      menuLinks,
      activeLocale,
      mainStore,
      navigationStore,
      changeLocale,
      toggleNavigation,
      route,
      languages,
      reduceLanguages,
      currenLocale,
    }
  },
})
