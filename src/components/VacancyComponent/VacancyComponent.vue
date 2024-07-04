<template>
  <AppCard
    v-for="vacancy in vacancies"
    :key="vacancy.title"
    class="vacancy-item"
  >
    <template v-slot:body>
      <span class="vacancy-item-title">{{ t(`vacancies.card.${vacancy.title}.title`) }}</span>
      <span class="vacancy-item-description">{{
        t(`vacancies.card.${vacancy.title}.description`)
      }}</span>
      <router-link :to="vacancy.link" class="vacancy-item-link">
        <span>{{ t('vacancies.card.conditions') }}</span>
        <SvgIcon icon="arrow-right" />
      </router-link>
    </template>
  </AppCard>
</template>
<script lang="ts" src="./VacancyComponent.ts"></script>
<style lang="scss" src="./VacancyComponent.scss"></style>
