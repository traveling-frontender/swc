<template>
  <div class="technologies">
    <span class="technologies__title">{{ t(`${type}.title`) }}</span>
    <div :class="['technologies__list', type]">
      <AppCard
        v-for="technology in technologiesList"
        :key="technology.title"
        class="technologies__list-item"
      >
        <template v-slot:body>
          <span class="technologies__list-title">{{ technology.title }}</span>
          <div class="technologies__stack">
            <span
              v-for="item in technology.stack"
              :key="item"
              class="technologies__stack-item"
              >{{ item }}</span
            >
          </div>
        </template>
      </AppCard>
    </div>
  </div>
</template>

<script lang="ts" src="./TechnologiesComponent.ts"></script>
<style lang="scss" scoped src="./TechnologiesComponent.scss"></style>
