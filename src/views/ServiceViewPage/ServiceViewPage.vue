<template>
  <div class="service-view">
    <div class="service-view__greetings">
      <span class="service-view__greetings-title">{{ t('services.mobile.title') }}</span>
      <span class="service-view__greetings-subtitle">{{ t('services.mobile.subtitle') }}</span>
      <button class="service-view__greetings-order" @click="mainStore.changeStateModal">{{ t('home.order') }}</button>  
    </div>
    <AdvantagesComponent class="service-view__advantages" />
    <StagesComponent :title="t('stage.develop.title')" :stages="stages" class="service-view__stages" />
    <TechnologiesComponent type="technologies" class="service-view__technologies" />
    <div class="service-view__cost">
      <AppCard class="service-view__cost-wrapper">
        <template v-slot:body>
          <div class="service-view__cost-info">
            <span class="service-view__cost-title">{{ t('services.cost.from') }} 10 {{ t('services.cost.millions') }} ₽</span>
            <span class="service-view__cost-subtitle">{{ t('services.cost.title') }}</span>
            <button class="service-view__cost-button" @click="mainStore.changeStateModal">{{ t('home.order') }}</button>
          </div>
          <div class="service-view__cost-list">
            <div class="service-view__cost-item" v-for="item in servicesDescription" :key="item.title">
              <div class="service-view__cost-icon">
                <SvgIcon :icon="'checkmark_circle'" />
              </div>
              <span class="service-view__cost-description">{{ t(`services.list.${item.title}`) }}</span>
            </div>
          </div>
        </template>
      </AppCard>
    </div>
    <PortfolioComponent class="service-view__portfolio"  />
    <ReviewsComponent class="service-view__reviews" />
    <FeedbackComponent class="service-view__feedback" />
  </div>
</template>

<script lang="ts" src="./ServiceViewPage.js"></script>
<style lang="scss" src="./ServiceViewPage.scss"></style>
