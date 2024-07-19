<template>
  <div class="modal" @click.self="closeModal">
    <div class="modal__wrapper">
      <div class="modal__wrapper-header">
        <span class="modal__wrapper-title">{{ t('home.order') }}</span>
        <SvgIcon class="modal__wrapper-close" icon="close_white" @click="closeModal" />
      </div>
      <div class="modal__wrapper-fields">
        <AppTextarea :error="v$.about.$error ? t('field.about.error') : '' " v-model="formData.about" :backgroundColor="'#252A33'" :placeholder="t('modal.field.about')" />
        <div class="modal__wrapper-time">
          <AppInput  :error="v$.time.$error ? t('field.time.error') : '' " v-model="formData.time" :mask="'###'" :backgroundColor="'#252A33'" :placeholder="t('modal.field.time')" />
          <AppSelect
          :searchable="false"
          :options="times"
          v-model="currentTime"
          :fill="true"
          label="name"
          class="modal__wrapper-select"
           />
        </div>
        <AppInput  :error="v$.name.$error ? t('field.name.error') : '' " v-model="formData.name" :backgroundColor="'#252A33'" :placeholder="t('modal.field.name')" />
        <AppInput :error="v$.phone.$error ? t('field.phone.error') : ''" v-model="formData.phone" :backgroundColor="'#252A33'" :mask="'+7 ### ### ## ##'" :placeholder="t('feedback.placeholder.phone')" />
        <AppInputFile />
      </div>
      <AppCheckbox :error="v$.agree.$error" v-model="formData.agree" class="modal__checkbox" :label="'feedback.agree'" />
      <button @click="sendForm" class="modal__button">{{ t('feedback.send') }}</button>
    </div>
  </div>
</template>
<script lang="ts" src="./AppModal.ts"></script>
<style lang="scss" scoped src="./AppModal.scss"></style>