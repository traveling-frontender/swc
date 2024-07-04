<template>
  <div class="stages">
    <div class="stages__wrapper">
      <div class="stages__wrapper-actions">
        <span class="stages__wrapper-actions-title">
          {{ $props.title }}
        </span>
        <button v-if="$props.showButton" class="stages__wrapper-actions-button" @click="mainStore.changeStateModal">{{ t('home.order') }}</button>
      </div>
      <div class="stages__wrapper-list">
        <AppCard v-for="stage in $props.stages" :key="stage.title" class="stages__wrapper-item">
          <template v-slot:body>
            <span class="stages__wrapper-item-title">{{ t(`stage.develop.item.${stage.title}`) }}</span>
            <span class="stages__wrapper-item-description">{{ stage.description }}</span>
          </template>
        </AppCard>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./StagesComponent.ts"></script>
<style lang="scss" scoped src="./StagesComponent.scss"></style>
