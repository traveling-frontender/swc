<template>
  <div class="portfolio-slider">
    <span class="portfolio-slider__title">{{ t('portfolio.title') }}</span>
    <div class="portfolio-slider__carousel">
      <swiper
        :effect="'coverflow'"
        :centeredSlides="false"
        :loop="true"
        :breakpoints="{
          '1024': {
            slidesPerView: 3,
            spaceBetween: 40
          },
          '768': {
            slidesPerView: 3
          },
          '320': {
            spaceBetween: 5
          }
        }"
        :coverflowEffect="{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }"
        :pagination="false"
        :navigation="{
          nextEl: next,
          prevEl: prev
        }"
        :modules="modules"
        @slideChange="onSlideChange"
        class="mySwiper"
      >       
      <!-- <div class="portfolio-slider__carousel-wave">
        <svg data-v-334aa232="" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 804 45.167" enable-background="new 0 0 804 50.167" xml:space="preserve"><path data-v-334aa232="" fill="#000" d="M804,0v16.671c0,0-204.974,33.496-401.995,33.496C204.974,50.167,0,16.671,0,16.671V0H804z"></path></svg>
      </div>  -->
       <swiper-slide v-for="(item, index) in projects" :key="index">
          <div class="portfolio-slider__carousel-item" style="position: relative">
            <img src="@/assets/img/portfolio-1.png" alt="" />
          </div>
        </swiper-slide>
      <!-- <div class="portfolio-slider__carousel-wave portfolio-slider__carousel-wave_bottom">
        <svg data-v-334aa232="" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 804 45.167" enable-background="new 0 0 804 50.167" xml:space="preserve"><path data-v-334aa232="" fill="#000" d="M804,0v16.671c0,0-204.974,33.496-401.995,33.496C204.974,50.167,0,16.671,0,16.671V0H804z"></path></svg>
      </div>  -->
      </swiper>
      <div class="portfolio-slider__carousel-info">
        <span class="portfolio-slider__carousel-title">{{ t(`portfolio.card.${currentSlide.title}.title`)}}</span>
        <span class="portfolio-slider__carousel-description">{{ currentSlide.description }} </span>
        <router-link :to="currentSlide.link" class="portfolio-slider__carousel-more">
          <span>{{ t('portfolio.card.more') }}</span>
          <SvgIcon icon="arrow-right_medium" />
        </router-link>
        <div ref="next" class="swiper-button-next"><SvgIcon icon="arrow-right_circle" /></div>
        <div ref="prev" class="swiper-button-prev"><SvgIcon icon="arrow-left_circle" /></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./PortfolioComponent.ts"></script>
<style lang="scss" scoped src="./PortfolioComponent.scss"></style>
