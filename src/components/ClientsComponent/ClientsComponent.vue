<template>
  <div class="clients">
    <span class="clients__title">{{ t('clients.title') }}</span>
    <div class="clients__carousel">
      <swiper
        :slidesPerView="6"
        :breakpoints="{
        '320': {
          slidesPerView: 1,
          spaceBetween: 30,
        },
        '578': {
          slidesPerView: 3,
          spaceBetween: 60,
        },

        '1024': {
          slidesPerView: 6,
          spaceBetween: 180
        }
    }"
        :centeredSlides="false"
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
