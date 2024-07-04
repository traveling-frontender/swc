<template>
  <div class="vacancy">
    <div class="vacancy__wrapper">
      <div class="vacancy__header">
        <span class="vacancy-title">Middle Backend Developer</span>
        <span class="vacancy-schedule">{{ t('time.full') }}</span>
      </div>
      <div class="vacancy__info">
        <div class="vacancy__info-item">
        <span class="vacancy__info-item-title">{{ t('duties.title') }}</span>
        <div class="vacancy__info-item-list vacancy__list">
          <div class="vacancy__list-item" v-for="(index, item) in 5" :key="item">
            <span class="vacancy__list-item-text">
              {{ t(`backend.duties.${index+1}`) }}
            </span>
          </div>
        </div>
        </div>
        <div class="vacancy__info-item">
        <span class="vacancy__info-item-title">{{ t('requirements.title') }}</span>
        <div class="vacancy__info-item-list vacancy__list">
          <div class="vacancy__list-item" v-for="(item, index) in 8" :key="item">
            <span class="vacancy__list-item-text">
              {{ t(`backend.requirements.${index+1}`) }}
            </span>
          </div>
        </div>
        </div>
        <div class="vacancy__info-item">
        <span class="vacancy__info-item-title">{{ t('offer.title') }}</span>
        <div class="vacancy__info-item-list vacancy__list">
          <div class="vacancy__list-item" v-for="(item, index) in 6" :key="item">
            <span class="vacancy__list-item-text">
              {{ t(`backend.offer.${index+1}`) }}
            </span>
          </div>
        </div>
        </div>
      </div>
    </div>
    <FeedbackComponent class="vacancy__feedback"/>
  </div>
</template>

<script lang="ts" src="./VacanciesViewPage.ts"></script>
<style lang="scss" src="./VacanciesViewPage.scss"></style>
