<template>
  <div :class="['app-select', { error: formError, 'app-select_fill': $props.fill }]">
    <span v-if="title" class="app-select__name">
      {{ title }}
      <sup v-if="required">*</sup>
    </span>
    <div class="app-select__wrapper">
      <vSelect
        :placeholder="placeholderText"
        v-bind="$attrs"
        :components="{ OpenIndicator }"
      >
        <template #no-options>
          <div class="app-select__empty">{{ t('select.empty') }}</div>
        </template>
        <template #spinner="{ loading }">
          <div v-if="loading" class="vs__loader" />
        </template>
      </vSelect>
    </div>
  </div>
</template>

<script lang="ts" src="./AppSelect.ts"></script>
<style lang="scss" src="./AppSelect.scss"></style>
