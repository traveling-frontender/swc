<template>
  <div class="home">
    <div class="home__greetings">
      <span class="home__greetings-title">{{ t('home.title') }}</span>
      <span class="home__greetings-description">{{
        t('mock.description')
      }}</span>
      <div class="home__greetings-actions">
        <button class="home__greetings-order open-modal" @click="mainStore.changeStateModal">{{ t('home.order') }}</button>
        <button class="home__greetings-generate">
          {{ t('home.generate') }}
        </button>
      </div>
      <div class="home__greetings-advantages">
        <div class="home__greetings-advantage">
          <span class="home__greetings-advantage-value">10</span>
          <span class="home__greetings-advantage-text">{{
            t('home.years')
          }}</span>
        </div>
        <div class="home__greetings-advantage">
          <span class="home__greetings-advantage-value">100+</span>
          <span class="home__greetings-advantage-text">{{
            t('home.completed')
          }}</span>
        </div>
        <div class="home__greetings-advantage">
          <span class="home__greetings-advantage-value">50+</span>
          <span class="home__greetings-advantage-text">{{
            t('home.customers')
          }}</span>
        </div>
        <div class="home__greetings-advantage">
          <span class="home__greetings-advantage-value">30</span>
          <span class="home__greetings-advantage-text">{{
            t('home.team')
          }}</span>
        </div>
      </div>
    </div>
    <div class="home__services">
      <span class="home__services-title">{{ t('home.servicesList') }}</span>
      <div class="home__services-list">
        <AppCard
          v-for="service in services"
          :key="service.title"
          class="home__services-item"
        >
          <template v-slot:body>
            <span class="home__services-item-title">{{
              t(`footer.mock.${service.title}`)
            }}</span>
            <router-link :to="service.link" class="home__services-item-link">
              <span>{{ t('home.card.more') }}</span>
              <SvgIcon icon="arrow-right" />
            </router-link>
          </template>
        </AppCard>
      </div>
    </div>
    <TechnologiesComponent type="competencies" class="home__technologies" />
    <ClientsComponent class="home__clients" />
    <PortfolioComponent class="home__portfolio" />
    <FacilitiesComponent class="home__facilities" />
    <div class="home__vacancies">
      <span class="home__vacancies-title">{{ t('vacancies.title') }}</span>
      <div class="home__vacancies-list">
        <VacancyComponent />
      </div>
      <router-link :to="'/vacancies'" class="home__vacancies-all">
        {{ t('vacancies.all') }}
      </router-link>
    </div>
    <FeedbackComponent class="home__feedback" />
  </div>
</template>

<script lang="ts" src="./HomePage.ts"></script>
<style lang="scss" src="./HomePage.scss"></style>
