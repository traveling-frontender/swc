<template>
  <div class="app-input">
    <label for="#" class="app-input__label"></label>
    <div class="app-input__field" :class="{'app-input__field_focus': isFocus, 'app-input__field_invalid': $props.error, 'app-input__field_white-placeholder': $props.whitePlaceholder, 'app-input__field_colored-border': $props.coloredBorder}" :style="{'background-color': $props.backgroundColor ?? ''}">
      <input :placeholder="$props.placeholder" type="text" @focus="isFocus = true" @blur="isFocus = false" v-mask="$props.mask" :value="$props.modelValue" @input="update">
    </div>
    <span class="app-input__error">{{ $props.error }}</span>
  </div>
</template>

<script lang="ts" src="./AppInput.ts"></script>
<style lang="scss" scoped src="./AppInput.scss"></style>
