<template>
  <div class="vacancies">
    <span class="vacancies-title">{{ t('vacancies.title') }}</span>
    <div class="vacancies__list">
      <VacancyComponent class="vacancies-item" />
    </div>
  </div>
</template>

<script lang="ts" src="./VacanciesPage.ts"></script>
<style lang="scss" src="./VacanciesPage.scss"></style>
