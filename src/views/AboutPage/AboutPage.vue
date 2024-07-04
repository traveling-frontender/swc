<template>
  <div class="about">
    <div class="about__greetings">
      <span class="about__greetings-title">{{t('about.title')}}</span>
      <span class="about__greetings-description">{{t('about.subtitle')}}</span>
    </div>
    <div class="about__achievements">
      <div class="about__achievements-action">
        <span class="about__achievements-title">{{t('about.achievements.title')}}</span>
      </div>
      <div class="about__achievements-list">
        <div class="about__achievements-item">
          <span class="about__achievements-value">>100</span>
          <span class="about__achievements-property">{{t('about.achievements.software')}}</span>
        </div>
        <div class="about__achievements-item">
          <span class="about__achievements-value">50%</span>
          <span class="about__achievements-property">{{t('about.achievements.conversion')}}</span>
        </div>
        <div class="about__achievements-item">
          <span class="about__achievements-value">3</span>
          <span class="about__achievements-property">{{t('about.achievements.certificate')}}</span>
        </div>
      </div>
    </div>
    <div class="about__team">
      <span class="about__team-title">{{t('about.team.title')}}</span>
      <span class="about__team-description">{{t('about.team.description')}}</span>
      <img src="@/assets/img/team.png" alt="team" class="about__team-image">
    </div>
    <div class="about__studio">
      <span class="about__studio-title">{{t('about.team.studio.title')}}</span>
      <span class="about__studio-description">
        {{t('about.team.studio.description')}}
      </span>
      <div class="about__studio-advantages">
        <div class="about__studio-list">
          <div class="about__studio-item">
            <div class="about__studio-item-icon">
              <SvgIcon :icon="'checkmark_circle'" />
            </div>
            <span class="about__studio-item-text">{{t('about.team.studio.creativity')}}</span>
          </div>
          <div class="about__studio-item">
            <div class="about__studio-item-icon">
              <SvgIcon :icon="'checkmark_circle'" />
            </div>
            <span class="about__studio-item-text">{{t('about.team.studio.individual')}}</span>
          </div>
          <div class="about__studio-item">
            <div class="about__studio-item-icon">
              <SvgIcon :icon="'checkmark_circle'" />
            </div>
            <span class="about__studio-item-text">{{t('about.team.studio.transparency')}}</span>
          </div>
        </div>
        <div class="about__studio-list">
          <div class="about__studio-item">
            <div class="about__studio-item-icon">
              <SvgIcon :icon="'checkmark_circle'" />
            </div>
            <span class="about__studio-item-text">{{t('about.team.studio.cooperation')}}</span>
          </div>
          <div class="about__studio-item">
            <div class="about__studio-item-icon">
              <SvgIcon :icon="'checkmark_circle'" />
            </div>
            <span class="about__studio-item-text">{{t('about.team.studio.punctuality')}}</span>
          </div>
          <div class="about__studio-item">
            <div class="about__studio-item-icon">
              <SvgIcon :icon="'checkmark_circle'" />
            </div>
            <span class="about__studio-item-text">{{t('about.team.studio.quality')}}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="about__trust">
      <span class="about__trust-title">{{t('about.team.trust.title')}}</span>
      <div class="about__trust-grid">
        <div class="about__trust-col ">
          <img src="@/assets/img/trust-1.png" alt="" />
        </div>
        <div class="about__trust-col">
          <img src="@/assets/img/trust-2.png" alt="" />
        </div>
        <div class="about__trust-col">
          <img src="@/assets/img/trust-3.png" alt="" />
        </div>
        <div class="about__trust-col">
          <img src="@/assets/img/trust-1.png" alt="" />
        </div>
        <div class="about__trust-col">
          <img src="@/assets/img/trust-2.png" alt="" />
        </div>
        <div class="about__trust-col">
          <img src="@/assets/img/trust-3.png" alt="" />
        </div>
        <div class="about__trust-col">
          <img src="@/assets/img/trust-1.png" alt="" />
        </div>
        <div class="about__trust-col">
          <img src="@/assets/img/trust-2.png" alt="" />
        </div>
        <div class="about__trust-col">
          <img src="@/assets/img/trust-3.png" alt="" />
        </div>
      </div>
    </div>
    <ReviewsComponent class="about__reviews" />
    <FeedbackComponent class="about__feedback" />
  </div>
</template>
<script lang="ts" src="./AboutPage.ts"></script>
<style lang="scss" src="./AboutPage.scss"></style>
