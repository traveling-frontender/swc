<template>
  <footer class="footer">
    <div class="footer__wrapper">
      <div class="footer__top">
        <SvgIcon icon="logo" />
        <div class="footer__info">
          <div class="footer__info-wrapper">
            <div class="footer__info-address">
              <span class="footer__info-title">{{
                t('footer.mock.country')
              }}</span>
              <span class="footer__info-text">{{
                t('footer.mock.address')
              }}</span>
            </div>
            <div class="footer__info-contacts">
              <span class="footer__info-title">{{
                t('footer.mock.contacts')
              }}</span>
              <a href="tel:81234567890" class="footer__info-text"
                >+7 (123) 456 78 90</a
              >
              <a href="mailto:name@domain.ru" class="footer__info-text"
                >name@domain.ru</a
              >
            </div>
          </div>
          <div class="footer__info-services">
            <span class="footer__info-title">{{
              t('footer.mock.services')
            }}</span>
            <router-link
              to="/services/mobile"
              v-for="service in services"
              :key="service.title"
              class="footer__info-text"
              >{{ t(`footer.mock.${service.title}`) }}</router-link
            >
          </div>
          <div class="footer__info-projects">
            <span class="footer__info-title">{{
              t('footer.mock.projects')
            }}</span>
            <router-link
              v-for="number in 4"
              :key="number"
              to="/portfolio/smart-house"
              class="footer__info-text"
              >{{ t('footer.mock.project', number) }}</router-link
            >
            <router-link to="/" class="footer__info-title">
              <span>{{ t('footer.mock.allProject') }}</span>
              <SvgIcon icon="arrow-right" />
            </router-link>
          </div>
          <div class="footer__info-about">
            <span class="footer__info-title">{{
              t('footer.mock.company')
            }}</span>
            <router-link to="/about" class="footer__info-text">{{
              t('footer.mock.about')
            }}</router-link>
            <router-link to="/vacancies" class="footer__info-text">{{
              t('footer.mock.vacancies')
            }}</router-link>
            <router-link to="/contacts" class="footer__info-text">{{
              t('footer.mock.contacts')
            }}</router-link>
          </div>
        </div>
      </div>
      <div class="footer__copyright">
        <div class="footer__copyright-content">
          <span class="footer__copyright-text">{{ t('footer.rights') }}</span>
          <router-link :to="{ name: 'home' }" class="footer__copyright-link">{{
            t('footer.policy')
          }}</router-link>
        </div>
      </div>
    </div>
  </footer>
</template>
<script lang="ts" src="./AppFooter.ts"></script>
<style lang="scss" scoped src="./AppFooter.scss"></style>
