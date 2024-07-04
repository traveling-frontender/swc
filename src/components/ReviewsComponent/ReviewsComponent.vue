<template>
  <div class="reviews">
    <span class="reviews__title">{{ t('reviews.title') }}</span>
    <div class="reviews__carousel">
      <swiper
        :loopFillGroupWithBlank="true"
        :centeredSlides="false"
        :loop="true"
        :spaceBetween="20"
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
        :modules="modules"
        class="mySwiper"
      >
          <swiper-slide>
            <AppCard class="reviews__item">
              <template v-slot:body>
                <div class="reviews__item-author">
                  <img src="@/assets/img/avatar.png" alt="avatar">
                  <span>Иванова И. И.</span>
                </div>
                <span class="reviews__item-text">
                  Lorem ipsum dolor sit amet consectetur. Vestibulum porttitor tortor ut semper cras elementum odio. Tellus tincidunt semper nunc felis dignissim malesuada purus. Scelerisque vestibulum magnis porttitor tortor ut semper cras
                </span>
                <router-link to="/" class="reviews__item-more">
                  Подробнее
                </router-link>
              </template>
            </AppCard>
          </swiper-slide>
          <swiper-slide>
            <AppCard class="reviews__item">
              <template v-slot:body>
                <div class="reviews__item-author">
                  <img src="@/assets/img/avatar.png" alt="avatar">
                  <span>Иванова И. И.</span>
                </div>
                <span class="reviews__item-text">
                  Lorem ipsum dolor sit amet consectetur. Vestibulum porttitor tortor ut semper cras elementum odio. Tellus tincidunt semper nunc felis dignissim malesuada purus. Scelerisque vestibulum magnis porttitor tortor ut semper cras
                </span>
                <router-link to="/" class="reviews__item-more">
                  Подробнее
                </router-link>
              </template>
            </AppCard>
          </swiper-slide>
          <swiper-slide>
            <AppCard class="reviews__item">
              <template v-slot:body>
                <div class="reviews__item-author">
                  <img src="@/assets/img/avatar.png" alt="avatar">
                  <span>Иванова И. И.</span>
                </div>
                <span class="reviews__item-text">
                  Lorem ipsum dolor sit amet consectetur. Vestibulum porttitor tortor ut semper cras elementum odio. Tellus tincidunt semper nunc felis dignissim malesuada purus. Scelerisque vestibulum magnis porttitor tortor ut semper cras
                </span>
                <router-link to="/" class="reviews__item-more">
                  Подробнее
                </router-link>
              </template>
            </AppCard>
          </swiper-slide>
          <swiper-slide>
            <AppCard class="reviews__item">
              <template v-slot:body>
                <div class="reviews__item-author">
                  <img src="@/assets/img/avatar.png" alt="avatar">
                  <span>Иванова И. И.</span>
                </div>
                <span class="reviews__item-text">
                  Lorem ipsum dolor sit amet consectetur. Vestibulum porttitor tortor ut semper cras elementum odio. Tellus tincidunt semper nunc felis dignissim malesuada purus. Scelerisque vestibulum magnis porttitor tortor ut semper cras
                </span>
                <router-link to="/" class="reviews__item-more">
                  Подробнее
                </router-link>
              </template>
            </AppCard>
          </swiper-slide>
          <swiper-slide>
            <AppCard class="reviews__item">
              <template v-slot:body>
                <div class="reviews__item-author">
                  <img src="@/assets/img/avatar.png" alt="avatar">
                  <span>Иванова И. И.</span>
                </div>
                <span class="reviews__item-text">
                  Lorem ipsum dolor sit amet consectetur. Vestibulum porttitor tortor ut semper cras elementum odio. Tellus tincidunt semper nunc felis dignissim malesuada purus. Scelerisque vestibulum magnis porttitor tortor ut semper cras
                </span>
                <router-link to="/" class="reviews__item-more">
                  Подробнее
                </router-link>
              </template>
            </AppCard>
          </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script lang="ts" src="./ReviewsComponent.ts"></script>
<style lang="scss" scoped src="./ReviewsComponent.scss"></style>
