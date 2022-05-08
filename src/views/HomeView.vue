<script setup lang="ts">
import WelcomeItem from '../components/WelcomeItem.vue'
import ToolingIcon from '../components/icons/IconTooling.vue'
import EcosystemIcon from '../components/icons/IconEcosystem.vue'
import IconVue from "../components/icons/IconVue.vue";
import GlitchedWriter from "vue-glitched-writer"
import IconBootstrap from "../components/icons/IconBootstrap.vue";


</script>

<template>
  <div>
    <WelcomeItem class="welcomeItem">
      <template #icon>
        <IconVue/>
      </template>
      <template #heading>Vue 3</template>
      <a target="_blank" href="https://vuejs.org/" class="link-success">Vue</a> is a progressive framework for building
      user interfaces. Unlike other monolithic frameworks, Vue is designed from the ground up to be incrementally
      adoptable.
    </WelcomeItem>

    <WelcomeItem class="welcomeItem">
      <template #icon>
        <IconBootstrap/>
      </template>
      <template #heading>Bootstrap</template>

      <a target="_blank" href="https://getbootstrap.com/" style="color: #7952b3">Bootstrap</a> is a free and open-source
      CSS framework directed at responsive, mobile-first front-end web development. It contains HTML, CSS and
      (optionally) JavaScript-based design templates for typography, forms, buttons, navigation, and other interface
      components.
    </WelcomeItem>

    <WelcomeItem class="welcomeItem">
      <template #icon>
        <ToolingIcon/>
      </template>
      <template #heading>Tooling</template>
      This project is served and bundled with
      <a href="https://vitejs.dev/guide/features.html" target="_blank">Vite</a>.
    </WelcomeItem>

    <WelcomeItem class="welcomeItem">
      <template #icon>
        <EcosystemIcon/>
      </template>
      <template #heading>Plugins</template>
      <a target="_blank" href="https://router.vuejs.org/">Vue Router</a>,
      <a target="_blank" href="https://glitched-writer.site/">
        <GlitchedWriter appear text="Vue Glitched Writer"/>
      </a>
    </WelcomeItem>
  </div>
</template>

<style>
@media (min-width: 992px) {
  .details {
    transform: scale(0.05, 0.8);
    transform-origin: left;
    opacity: 0;
    animation: fullScaleIn 0.5s ease-in;
    animation-fill-mode: forwards;
    animation-delay: 1s;
  }

  .welcomeItem {
    transform: scale(0);
    animation: fadeIn 0.5s ease-in;
    animation-fill-mode: forwards;
    animation-delay: 0.5s;
  }

  @keyframes fadeIn {
    from {
      transform: scale(0);
    }
    to {
      transform: scale(1);
    }
  }
  @keyframes fadeOut {
    from {
      transform: scale(1);
    }
    to {
      transform: scale(0);
    }
  }
  @keyframes fullScaleIn {
    from {
      transform: scale(0, 0);
      opacity: 0;
    }
    to {
      transform: scale(1, 1);
      opacity: 1;
    }
  }
  @keyframes fullScaleOut {
    from {
      transform: scale(1, 1);
      opacity: 1;
    }
    to {
      transform: scale(0, 0);
      opacity: 0;
    }
  }

}
</style>
