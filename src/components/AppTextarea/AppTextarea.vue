<template>
  <div class="app-textarea">
    <label for="#" class="app-textarea__label"></label>
    <div class="app-textarea__field" :class="{'app-textarea__field_focus': isFocus, 'app-textarea__field_white-placeholder': $props.whitePlaceholder, 'app-textarea__field_colored-border': $props.coloredBorder, 'app-textarea__field_invalid': $props.error}">
      <textarea :placeholder="$props.placeholder" :whitePlaceholder="true" :coloredBorder="true" @focus="isFocus = true" @blur="isFocus = false" name="" id="" cols="30" rows="3" :value="$props.modelValue" @input="update" :style="{'background-color': $props.backgroundColor ?? ''}"></textarea>
    </div>
    <span class="app-textarea__error">{{ $props.error }}</span>
  </div>
</template>
<script lang="ts" src="./AppTextarea.ts"></script>
<style lang="scss" scoped src="./AppTextarea.scss"></style>d