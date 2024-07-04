<template>
  <div class="feedback">
    <form class="feedback__form form" :class="{'form_fill': $props.fill}">
      <span class="form-title">{{ t('feedback.title') }}</span>
      <div class="form__fields">
        <AppInput :error="v$.name.$error ? t('field.name.error') : '' " v-model="formData.name" :whitePlaceholder="true" :coloredBorder="true" :placeholder="t('feedback.placeholder.name')" class="form__fields-item" />
        <AppInput :mask="'+7 ### ### ## ##'" v-model="formData.phone" :whitePlaceholder="true" :coloredBorder="true" :placeholder="t('feedback.placeholder.phone')" class="form__fields-item" />
        <AppInput :error="v$.email.$error ? t('field.email.error') : ''" v-model="formData.email" :whitePlaceholder="true" :coloredBorder="true" :placeholder="t('feedback.placeholder.email')" class="form__fields-item" />
        <AppInput v-model="formData.subject" :whitePlaceholder="true" :coloredBorder="true" :placeholder="t('feedback.placeholder.subject')" class="form__fields-item" />
        <AppTextarea v-model="formData.message" :whitePlaceholder="true" :coloredBorder="true" :placeholder="t('feedback.placeholder.message')" class="form__fields-item" />
      </div>
      <button @click.prevent="sendForm" class="form__submit" type="submit">{{ t('feedback.send')}}</button>
    </form>
  </div>
</template>

<script lang="ts" src="./FeedbackComponent.js"></script>
<style lang="scss" scoped src="./FeedbackComponent.scss"></style>
