<template>
  <div class="main">
    <AppHeader />
    <main>
      <slot />
    </main>
    <AppFooter />
    <Transition>
      <AppModal v-if="mainStore.modalIsActive" @closeModal="mainStore.changeStateModal" />
    </Transition>
</div>
</template>

<script lang="ts" src="./MainLayout.ts"></script>
<style lang="scss" scoped src="./MainLayout.scss"></style>
