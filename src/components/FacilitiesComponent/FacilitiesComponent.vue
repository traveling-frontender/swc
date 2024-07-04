<template>
  <div class="facilities">
    <span class="facilities__title">{{ t('facilities.title') }}</span>
    <div class="facilities__carousel">
      <swiper
      :style="{
        '--swiper-pagination-color': '#fff',
        '--swiper-pagination-bullet-size': '10px',
        '--swiper-pagination-bullet-inactive-opacity': '50%',
        '--swiper-pagination-bullet-inactive-color': '#fff'
      }" 
        :slidesPerView="1"
        :centeredSlides="false"
        :pagination="{
         el: '.' + 'facilities' + '__pagination',
         clickable: true
        }"
        :loop="true"
        :spaceBetween="50"
        :modules="modules"
        class="mySwiper"
      >
        <swiper-slide v-for="i in 4" :key="i">
          <div class="facilities__carousel-item">
            <div class="facilities__carousel-images">
              <img src="@/assets/img/facilities-1.png" alt="" />
              <img src="@/assets/img/facilities-2.png" alt="" />
              <img src="@/assets/img/facilities-3.png" alt="" />
            </div>
            <div class="facilities__carousel-info">
              <div class="facilities__carousel-title">
                <span>{{ t('facilities.card.inlow.title') }}</span>
                <SvgIcon icon="arrow-right_medium" />
              </div>
              <span class="facilities__carousel-discription">
                {{ t('facilities.card.inlow.description') }}
              </span>
              <div class="facilities__carousel-list">
                <span class="facilities__carousel-list-item">{{ t('facilities.card.inlow.list.first') }}</span>
                <span class="facilities__carousel-list-item">{{ t('facilities.card.inlow.list.second') }}</span>
                <span class="facilities__carousel-list-item">{{ t('facilities.card.inlow.list.third') }} </span>
                <span class="facilities__carousel-list-item">{{ t('facilities.card.inlow.list.fourth') }}</span>
              </div>
              <div class="facilities__carousel-achievements facilities__achievements">
                  <AppCard
                    class="facilities__achievements-item"
                  >
                  <template v-slot:body>
                    <span class="facilities__achievements-item-title">2.5+ {{ t('facilities.card.inlow.million') }}</span>
                    <span class="facilities__achievements-item-discription">{{ t('facilities.card.inlow.downloads') }}</span>
                  </template>
                </AppCard>
                <AppCard
                    class="facilities__achievements-item"
                  >
                  <template v-slot:body>
                    <span class="facilities__achievements-item-title">2.5+ {{ t('facilities.card.inlow.million') }}</span>
                    <span class="facilities__achievements-item-discription">{{ t('facilities.card.inlow.downloads') }}</span>
                  </template>
                </AppCard>
                <AppCard
                    class="facilities__achievements-item"
                  >
                  <template v-slot:body>
                    <span class="facilities__achievements-item-title">2.5+ {{ t('facilities.card.inlow.million') }}</span>
                    <span class="facilities__achievements-item-discription">{{ t('facilities.card.inlow.downloads') }}</span>
                  </template>
                </AppCard>
              </div>
            </div>
          </div>
        </swiper-slide>
        <div class="swiper-pagination" :class="'facilities__pagination'"></div>
      </swiper>
    </div>
  </div>
</template>

<script lang="ts" src="./FacilitiesComponent.ts"></script>
<style lang="scss" scoped src="./FacilitiesComponent.scss"></style>
