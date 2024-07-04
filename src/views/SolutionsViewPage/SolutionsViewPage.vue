<template>
  <div class="solution-view">
    <div class="solution-view__greetings">
      <span class="solution-view__greetings-title">{{ t('solution.mobile.title') }}</span>
      <span class="solution-view__greetings-description">{{ t('solution.mobile.subtitle') }}</span>
      <button class="solution-view__greetings-order" @click="mainStore.changeStateModal">{{ t('home.order') }}</button>
    </div>
    <div class="solution-view__includes">
      <div class="solution-view__includes-actions">
        <span class="solution-view__includes-title">{{ t('solution.mobile.include.title') }}</span>
      </div>
      <div class="solution-view__includes-list">
        <span class="solution-view__includes-item">{{ t('solution.card.mobile.develop') }}</span>
        <span class="solution-view__includes-item">{{ t('solution.card.mobile.optimization') }}</span>
        <span class="solution-view__includes-item">{{ t('solution.card.mobile.integration') }}</span>
        <span class="solution-view__includes-item">{{ t('solution.card.mobile.cross') }}</span>
      </div>
    </div>
    <div class="solution-view__result">
      <div class="solution-view__result-actions">
        <span class="solution-view__result-title">{{ t('solution.mobile.result.title') }}</span>
        <button class="solution-view__result-order" @click="mainStore.changeStateModal">{{ t('home.order') }}</button>
      </div>
      <div class="solution-view__result-list">
        <div class="solution-view__result-item">
          <div class="solution-view__result-item-icon">
            <SvgIcon :icon="'checkmark_circle'" />
          </div>
          <span class="solution-view__result-item-text">{{ t('solution.mobile.result.app') }}</span>
        </div>
        <div class="solution-view__result-item">
          <div class="solution-view__result-item-icon">
            <SvgIcon :icon="'checkmark_circle'" />
          </div>
          <span class="solution-view__result-item-text">{{ t('solution.mobile.result.brand') }}</span>
        </div>
        <div class="solution-view__result-item">
          <div class="solution-view__result-item-icon">
            <SvgIcon :icon="'checkmark_circle'" />
          </div>
          <span class="solution-view__result-item-text">{{ t('solution.mobile.result.optimized') }}</span>
        </div>
        <div class="solution-view__result-item">
          <div class="solution-view__result-item-icon">
            <SvgIcon :icon="'checkmark_circle'" />
          </div>
          <span class="solution-view__result-item-text">{{ t('solution.mobile.result.interaction') }}</span>
        </div>
        <div class="solution-view__result-item">
          <div class="solution-view__result-item-icon">
            <SvgIcon :icon="'checkmark_circle'" />
          </div>
          <span class="solution-view__result-item-text">{{ t('solution.mobile.result.additional') }}</span>
        </div>
      </div>
    </div>
    <StagesComponent class="solution-view__stages" :title="t('stage.develop.title')" :stages="stages" />
    <TechnologiesComponent class="solution-view__technologies" :type="'technologies'" />
    <PortfolioComponent class="solution-view__portfolio" />
    <FeedbackComponent class="solution-view__feedback" />
  </div>
</template>
<script lang="ts" src="./SolutionsViewPage.js"></script>
<style lang="scss" src="./SolutionsViewPage.scss"></style>