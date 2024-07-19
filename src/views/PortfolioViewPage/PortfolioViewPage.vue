<template>
  <div class="portfolio-view">
    <div class="portfolio-view__greetings">
      <span class="portfolio-view__greetings-title">{{ t('portfolio.view.smartHome.title') }}</span>
      <img src="@/assets/img/portfolio-1_big.png" alt="" class="portfolio-view__greetings-images">
      <span class="portfolio-view__greetings-description">Lorem ipsum dolor sit amet consectetur. Senectus elit facilisi velit et est et gravida massa vitae. Nunc odio arcu volutpat nibh volutpat. Vitae maecenas enim ut enim dictum quam vel bibendum. Nec diam fermentum amet massa fames tempus ultrices. Non id est sed in amet orci nibh. Facilisis non facilisis in sapien purus vel egestas dictum ullamcorper. Iaculis ornare enim euismod iaculis bibendum feugiat. A odio lectus gravida mauris habitasse elementum neque elit eget. Aliquet leo netus purus urna ultrices. Proin feugiat ut morbi posuere nulla.</span>
  </div>
  <StagesComponent class="portfolio-view__goals" :title="t('stage.goals.title')" :stages="stages" />
  <div class="portfolio-view__stages">
    <div class="portfolio-view__stages-header">
      <span class="portfolio-view__stages-title">{{ t('stage.work.title') }}</span>
      <span class="portfolio-view__stages-subtitle">{{ t('stage.develop.subtitle') }}</span>
    </div>
    <div class="portfolio-view__stages-item">
      <span class="portfolio-view__stages-item-title">{{ t('stage.develop.item.first') }}</span>
      <span class="portfolio-view__stages-item-description">Lorem ipsum dolor sit amet consectetur. Urna et bibendum dignissim sociis sodales. Tincidunt ac ultricies dui odio quam augue massa integer. Consequat diam malesuada lorem in ornare adipiscing sit. At quam mauris nibh sagittis sem congue elementum tempor. Lorem mi ipsum non dui. Pellentesque etiam sit proin orci duis lectus blandit</span>
      <div class="portfolio-view__stages-item-images">
        <img src="@/assets/img/portfolio-stage-1.png" alt="">
      </div>
    </div>
    <div class="portfolio-view__stages-item">
      <span class="portfolio-view__stages-item-title">{{ t('stage.develop.item.second') }}</span>
      <span class="portfolio-view__stages-item-description">
        Lorem ipsum dolor sit amet consectetur. Nec augue orci magna volutpat varius tincidunt congue turpis. Luctus donec habitasse ultricies nam. Adipiscing aenean turpis eu porttitor quam est. Semper ullamcorper posuere aliquet facilisis orci. Purus lacus malesuada sit et proin fringilla urna arcu porttitor. Feugiat nec quis in elit pharetra. Felis consequat non tempus volutpat libero. Pellentesque nisi nisl id ut porttitor tristique amet senectus
        <br>
        Ante ac eget mi rhoncus nunc eu lobortis. Cras pretium duis volutpat ante. Tortor egestas odio tempor ante elementum mauris. Magna egestas in cras elit nulla tempor. Sed id massa vel fermentum ultrices orci non. Lorem nulla at arcu eget sed a facilisi condimentum amet. Elementum id amet in eros sit in elementum sit. Urna nibh sed donec blandit. Feugiat et volutpat viverra massa orci diam nibh diam. Id quis libero egestas nisi. Dignissim tortor quisque ultrices quam rhoncus elit massa laoreet felis.
      </span>
    </div>
    <div class="portfolio-view__stages-item">
      <span class="portfolio-view__stages-item-title">{{ t('stage.develop.item.third') }}</span>
      <span class="portfolio-view__stages-item-description">Lorem ipsum dolor sit amet consectetur. Urna et bibendum dignissim sociis sodales. Tincidunt ac ultricies dui odio quam augue massa integer. Consequat diam malesuada lorem in ornare adipiscing sit. At quam mauris nibh sagittis sem congue elementum tempor. Lorem mi ipsum non dui. Pellentesque etiam sit proin orci duis lectus blandit</span>
      <div class="portfolio-view__stages-item-images portfolio-view__stages-item-images_multi">
        <img src="@/assets/img/portfolio-stage-2.png" alt="">
        <img src="@/assets/img/portfolio-stage-3.png" alt="">
      </div>
    </div>
    <div class="portfolio-view__stages-item">
      <span class="portfolio-view__stages-item-title">{{ t('stage.develop.item.fourth') }}</span>
      <span class="portfolio-view__stages-item-description">Lorem ipsum dolor sit amet consectetur. Urna et bibendum dignissim sociis sodales. Tincidunt ac ultricies dui odio quam augue massa integer. Consequat diam malesuada lorem in ornare adipiscing sit. At quam mauris nibh sagittis sem congue elementum tempor. Lorem mi ipsum non dui. Pellentesque etiam sit proin orci duis lectus blandit</span>
      <div class="portfolio-view__stages-item-images">
        <img src="@/assets/img/portfolio-stage-4.png" alt="">
      </div>
    </div>
  </div>
  <div class="portfolio-view__result">
    <span class="portfolio-view__result-title">{{ t('result.title') }}</span>
    <div class="portfolio-view__result-list">
      <div class="portfolio-view__result-list-column">
        <div class="portfolio-view__result-item" v-for="item in servicesDescription" :key="item.title">
        <div class="portfolio-view__result-item-icon">
          <SvgIcon :icon="'checkmark_circle'" />
        </div>
        <span class="portfolio-view__result-item-title">
          {{ t(`services.list.${item.title}`) }}
        </span>
      </div>
      </div>
      <div class="portfolio-view__result-list-column">
        <div class="portfolio-view__result-item" v-for="item in anotherServicesDescription" :key="item.title">
        <div class="portfolio-view__result-item-icon">
          <SvgIcon :icon="'checkmark_circle'" />
        </div>
        <span class="portfolio-view__result-item-title">
          {{ t(`services.list.${item.title}`) }}
        </span>
      </div>
      </div>

  </div>
  </div>
  <div class="portfolio-view__presentation">
    <AppCard class="portfolio-view__presentation-wrapper">
      <template v-slot:body>
        <span class="portfolio-view__presentation-placeholder">
          Презентация выполненной работы
          (высота неограниченна)
        </span>
      </template>
    </AppCard>
  </div>
  <div class="portfolio-view__review">
    <span class="portfolio-view__review-title">{{ t('review.customer') }}</span>
    <AppCard class="portfolio-view__review-item">
      <template v-slot:body>
        <div class="portfolio-view__review-author">
          <img src="@/assets/img/avatar.png" alt="">
          <span>Иванов И. И.</span>
        </div>
        <span class="portfolio-view__review-text">
          Lorem ipsum dolor sit amet consectetur. Turpis est sed scelerisque platea ornare risus auctor sed. Lorem placerat pulvinar sit proin nisi elit. Sapien sem odio aliquet turpis enim. Bibendum dignissim purus at tellus velit. Est purus aliquet adipiscing neque. Placerat ut sit vestibulum laoreet quis. Purus sit velit scelerisque nam consequat velit velit. Sapien quam a pretium pharetra arcu enim. Arcu quam nibh amet viverra netus varius faucibus mi faucibus.
        </span>
      </template>
    </AppCard>
  </div>
  <div class="portfolio-view__similar">
    <span class="portfolio-view__similar-title">{{ t('projects.similar.title') }}</span>
    <div class="portfolio-view__similar__list">
      <div class="portfolio-view__similar-item" v-for="item in 3" :key="item">
        <img src="@/assets/img/portfolio-similar-1.png" alt="" class="portfolio-view__similar-item-image">
        <span class="portfolio-view__similar-item-title">{{ t('portfolio.card.vpn.title') }}</span>
      </div>
    </div>
  </div>
  <FeedbackComponent :stages="stages" :showButton="true" :title="'Этапы разработки и создания'" class="portfolio-view__feedback" />
</div>
</template>
<script lang="ts" src="./PortfolioViewPage.ts"></script>
<style lang="scss" src="./PortfolioViewPage.scss"></style>
