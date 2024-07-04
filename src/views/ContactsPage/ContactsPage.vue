<template>
  <div class="contacts">
    <div class="contacts__wrapper">
      <div class="contacts__header">
        <span class="contacts-title">{{ t('contacts.title') }}</span>
      </div>
      <div class="contacts__info">
        <div class="contacts__info-item">
          <span class="contacts__info-item-title">+7 (123) 456 78 90</span>
          <span class="contacts__info-item-description">{{ t('contacts.phone.description') }}</span>
        </div>
        <div class="contacts__info-item">
          <span class="contacts__info-item-title">{{ t('contacts.street') }}</span>
          <span class="contacts__info-item-description">{{ t('contacts.city') }}</span>
        </div>
        <div class="contacts__info-item">
          <span class="contacts__info-item-title">name@domain.ru</span>
          <span class="contacts__info-item-description">{{ t('contacts.mail.description') }}</span>
        </div>
      </div>
    </div>
    <FeedbackComponent :fill="true" class="contacts__feedback" />
  </div>
</template>
<script lang="ts" src="./ContactsPage.ts"></script>
<style lang="scss" src="./ContactsPage.scss"></style>
