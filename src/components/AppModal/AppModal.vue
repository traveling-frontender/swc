<template>
  <div class="modal" @click.self="closeModal">
    <div class="modal__wrapper">
      <div class="modal__wrapper-header">
        <span class="modal__wrapper-title">{{ t('home.order') }}</span>
        <SvgIcon class="modal__wrapper-close" icon="close_white" @click="closeModal" />
      </div>
      <div class="modal__wrapper-fields">
        <AppTextarea :backgroundColor="'#252A33'" :placeholder="t('modal.field.about')" />
        <div class="modal__wrapper-time">
          <AppInput :mask="'###'" :backgroundColor="'#252A33'" :placeholder="t('modal.field.time')" />
          <AppSelect       
          :searchable="false"
          :options="times"
          v-model="currentTime"
          :fill="true"
          label="name"
          class="modal__wrapper-select"
           />
        </div>
        <AppInput :backgroundColor="'#252A33'" :placeholder="t('modal.field.name')" />
        <AppInput :backgroundColor="'#252A33'" :mask="'+7 ### ### ## ##'" :placeholder="t('feedback.placeholder.phone')" />
        <AppInputFile :backgroundColor="'#252A33'" />
      </div>
      <AppCheckbox class="modal__checkbox" :label="t('feedback.agree')" />
      <button class="modal__button">{{ t('feedback.send') }}</button>
    </div>
  </div>
</template>
<script lang="ts" src="./AppModal.ts"></script>
<style lang="scss" scoped src="./AppModal.scss"></style>