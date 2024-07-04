<template>
  <div class="solutions">
    <div class="solutions__wrapper">
      <span class="solutions-title">{{ t('solutions.title') }}</span>
      <div class="solutions__list">
        <AppCard class="solutions__item" v-for="item in solutions" :key="item.title">
          <template v-slot:body>
            <div class="solutions__item-header">
              <span class="solutions__item-title">{{ t(`solution.card.${item.title}.title`) }}</span>
            </div>
            <div class="solutions__item-details">
              <span class="solutions__item-details-text" v-for="detail in item.details" :key="detail">{{ t(`solution.card.${item.title}.${detail}`) }}</span>
            </div>
            <router-link :to="item.link" class="solutions__item-more">
              <span>{{ t('portfolio.card.more') }}</span>
              <SvgIcon :icon="'arrow-right'"/>
            </router-link>
          </template>
        </AppCard>
        <AppCard class="solutions__item" v-for="item in solutions" :key="item.title">
          <template v-slot:body>
            <div class="solutions__item-header">
              <span class="solutions__item-title">{{ t(`solution.card.${item.title}.title`) }}</span>
            </div>
            <div class="solutions__item-details">
              <span class="solutions__item-details-text" v-for="detail in item.details" :key="detail">{{ t(`solution.card.${item.title}.${detail}`) }}</span>
            </div>
            <router-link :to="item.link" class="solutions__item-more">
              <span>{{ t('portfolio.card.more') }}</span>
              <SvgIcon :icon="'arrow-right'"/>
            </router-link>
          </template>
        </AppCard>
      </div>
    </div>
  </div>
</template>
<script lang="ts" src="./SolutionsPage.ts"></script>
<style lang="scss" src="./SolutionsPage.scss"></style>