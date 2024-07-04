<template>
  <div class="portfolio">
    <span class="portfolio__title">{{ t('header.portfolio') }}</span>
    <div class="portfolio__list">
      <div class="portfolio__item" v-for="item in portfolio" :key=item.title>
        <div class="portfolio__item-image">
          <img src="@/assets/img/portfolio-1.png" alt="portfolio">
        </div>
        <div class="portfolio__item-info">
          <span class="portfolio__item-title">{{ t(`portfolio.card.${item.title}.title`) }}</span>
          <span class="portfolio__item-description">{{ item.description }}</span>
          <router-link :to="item.link">
            <SvgIcon class="portfolio__item-button" :icon="'arrow-right_long-circle'" />
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./PortfolioPage.ts"></script>
<style lang="scss" src="./PortfolioPage.scss"></style>
