<template>
  <div class="clients">
    <span class="clients__title">{{ t('clients.title') }}</span>
    <div class="clients__carousel">
      <swiper
        :slidesPerView="'auto'"
        :speed="5000"
        :autoplay="{
          delay: 0,
          disableOnInteraction: false,
        }"
        :breakpoints="{
        '320': {
          spaceBetween: 30,
        },
        '578': {
          spaceBetween: 60,
        },

        '1024': {
          spaceBetween: 180
        }
    }"
        :modules="modules"
        :centeredSlides="true"
        :loop="true"
        :spaceBetween="180"
        :pagination="{
          clickable: true,
        }"
        class="mySwiper"
      >
        <swiper-slide>
          <img src="@/assets/img/client-1.png" />
        </swiper-slide>
        <swiper-slide>
          <img src="@/assets/img/client-2.png" />
        </swiper-slide>
        <swiper-slide>
          <img src="@/assets/img/client-3.png" />
        </swiper-slide>
        <swiper-slide>
          <img src="@/assets/img/client-4.png" />
        </swiper-slide>
        <swiper-slide>
          <img src="@/assets/img/client-1.png" />
        </swiper-slide>
        <swiper-slide>
          <img src="@/assets/img/client-2.png" />
        </swiper-slide>
        <swiper-slide>
          <img src="@/assets/img/client-3.png" />
        </swiper-slide>
        <swiper-slide>
          <img src="@/assets/img/client-4.png" />
        </swiper-slide>
        <swiper-slide>
          <img src="@/assets/img/client-1.png" />
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script lang="ts" src="./ClientsComponent.ts"></script>
<style lang="scss" scoped src="./ClientsComponent.scss"></style>
