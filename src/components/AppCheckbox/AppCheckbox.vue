<template>
  <div class="checkbox">
    <label for="#" class="checkbox__label" @click="changeState">
      <input :checked="$props.modelValue" type="checkbox" class="checkbox__label-input">
      <span class="checkbox__label-view">
        <SvgIcon class="checkbox__label-icon" :icon="'checkmark'" />
      </span>
      <span class="checkbox__label-text" :class="{'checkbox__label-text_invalid': $props.error}">{{ t($props.label || '') }}</span>
    </label>
  </div>
</template>
<script lang="ts" src="./AppCheckbox.ts"></script>
<style lang="scss" scoped src="./AppCheckbox.scss"></style>