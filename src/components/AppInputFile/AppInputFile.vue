<template>
  <div class="input-file">
    <div class="input-file__content" v-if="file.length == 0">
      <input id="input-file" class="input-file__content-input" type="file" @change="uploadFile"/>
      <label for="input-file" class="input-file__content-label">
        <div class="input-file__content-icon-wrapper">
          <SvgIcon :icon="'file'" />
        </div>
        <span class="input-file__content-text"
          >{{ t('modal.field.file.drop') }} <br />
          <span class="input-file__content-text-button"> {{ t('modal.field.file.upload') }} </span>
        </span>
      </label>
    </div>
    <div class="input-file__preview" v-if="file.length > 0">
      <SvgIcon class="input-file__preview-icon" :icon="'file_small'" />
      <span class="input-file__preview-title">{{ file[0]?.name }}</span>
      <SvgIcon class="input-file__preview-close" :icon="'close_white'" @click="removeFile" />
    </div>
  </div>
</template>
<script lang="ts" src="./AppInputFile.ts"></script>
<style lang="scss" scoped src="./AppInputFile.scss"></style>