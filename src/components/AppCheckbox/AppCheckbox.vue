<template>
  <div class="checkbox">
    <label for="#" class="checkbox__label" @click="changeState">
      <input :checked="isCheck" type="checkbox" class="checkbox__label-input">
      <span class="checkbox__label-view">
        <SvgIcon class="checkbox__label-icon" :icon="'checkmark'" />
      </span>
      <span class="checkbox__label-text">{{ $props.label }}</span>
    </label>
  </div>
</template>
<script lang="ts" src="./AppCheckbox.ts"></script>
<style lang="scss" scoped src="./AppCheckbox.scss"></style>