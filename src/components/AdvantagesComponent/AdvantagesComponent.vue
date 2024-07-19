<template>
<div class="advantages">
  <span class="advantages-title">{{ t('services.advantages.title') }}</span>
    <div class="advantages__carousel">
      <swiper
        :slidesPerView="'auto'"
        :centeredSlides="false"
        :loop="false"
        :spaceBetween="0"
        :freeMode="true"
        :modules="modules"
        :breakpoints="{
          '320': {
            slidesPerView: 1
          },
          '768': {
            slidesPerView: 'auto'
          }
        }"
        :pagination="{
          clickable: true,
        }"
        class="mySwiper"
      >
        <swiper-slide>
          <div class="advantages__carousel-item">
          <div class="advantages__carousel-item-progress">
            <span class="advantages__carousel-item-order">1</span>
            <span class="advantages__carousel-item-line"></span>
          </div>
          <span class="advantages__carousel-item-title">
            {{ t('services.advantages.automation') }}
          </span>
          <span class="advantages__carousel-item-description">Lorem ipsum dolor sit amet consectetur. Elit sit amet aliquam mi convallis sed vitae pellentesque.</span>
        </div>
        </swiper-slide>
        <swiper-slide>
          <div class="advantages__carousel-item">
            <div class="advantages__carousel-item-progress">
              <span class="advantages__carousel-item-order">2</span>
              <span class="advantages__carousel-item-line"></span>
            </div>
            <span class="advantages__carousel-item-title">
              {{ t('services.advantages.conversion') }}
            </span>
            <span class="advantages__carousel-item-description">Lorem ipsum dolor sit amet consectetur. Elit sit amet aliquam mi convallis sed vitae pellentesque.</span>
        </div>
        </swiper-slide>
        <swiper-slide>
          <div class="advantages__carousel-item">
          <div class="advantages__carousel-item-progress">
            <span class="advantages__carousel-item-order">3</span>
            <span class="advantages__carousel-item-line"></span>
          </div>
          <span class="advantages__carousel-item-title">
            {{ t('services.advantages.trust') }}
          </span>
          <span class="advantages__carousel-item-description">Lorem ipsum dolor sit amet consectetur. Elit sit amet aliquam mi convallis sed vitae pellentesque.</span>
        </div>
        </swiper-slide>
      </swiper>
  </div>
</div>
</template>
<script lang="ts" src="./AdvantagesComponent.ts"></script>
<style lang="scss" src="./AdvantagesComponent.scss"></style>