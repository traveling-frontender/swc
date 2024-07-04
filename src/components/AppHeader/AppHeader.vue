<template>
  <header class="header">
    <div class="header__navigations">
      <router-link :to="'/'" class="header__navigations-logo">
        <SvgIcon icon="logo" />
      </router-link>
      <div class="header__navigations-list" :class="{'header__navigations-list_open': navigationStore.navigationStatus}">
        <div class="header__navigations-list-content">
          <router-link
          v-for="link in menuLinks"
          :key="link.name"
          :to="{ name: link.name }"
          class="header__navigations-item"
          >{{ t(link.tKey) }}</router-link
        >
          <a class="header__navigations-phone" href="tel:81234567890"
            >+7 123 456 78 90</a
          >
          <AppSelect
            v-model="currenLocale"
            :options="languages"
            :searchable="false"
            label="name"
            :reduce="reduceLanguages"
            class="filter__field --select"
          />
          </div>
        </div>
        <SvgIcon
          v-if="mainStore.isMobile"
          @click="toggleNavigation"
          :icon="!navigationStore.navigationStatus ? 'burger' : 'close_white'"
          class="header__navigations-burger"
        />
    </div>
  </header>
</template>

<script lang="ts" src="./AppHeader.ts"></script>
<style lang="scss" scoped src="./AppHeader.scss"></style>
