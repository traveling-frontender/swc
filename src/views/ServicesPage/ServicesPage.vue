<template>
  <div class="services">
    <span class="services-title">{{ t('footer.mock.services') }}</span>
    <div class="services__list">
      <AppCard class="services__list-item" v-for="service in services" :key="service.title">
        <template v-slot:body>
          <div class="services__list-info">
            <span class="services__list-info-title">{{ t(`footer.mock.${service.title}`) }}</span>
            <span class="services__list-info-description">{{ service.description  }}</span>
          </div>
          <router-link :to="service.link" class="services__list-icon">
            <SvgIcon :icon="'arrow-right_long-circle'" />
          </router-link>
        </template>
      </AppCard>
    </div>
</div>
</template>

<script lang="ts" src="./ServicesPage.ts"></script>
<style lang="scss" src="./ServicesPage.scss"></style>
