<script setup lang="ts">
import {gsap} from 'gsap'

import {RouterLink, RouterView} from 'vue-router'
import {onMounted, ref} from 'vue';
import Header from './components/Header.vue'
import BootstrapLogo from '@/assets/Bootstrap_logo.svg';
import VueLogo from "@/assets/logo.svg";

const bubble = ref<HTMLImageElement>();
const logo = ref<HTMLImageElement>();
const animState = ref<boolean>(false);

onMounted(() => {
  gsap.to(bubble.value as HTMLElement, {
    duration: 1,
    opacity: 1,
    top: '100px',
    ease: 'power3.in'
  })
});

function doLogoAnimation() {
  gsap.to(bubble.value as HTMLElement, {
    duration: 1,
    opacity: 0,
    top: '-100px',
    ease: 'power3.out',
    onComplete: () => {
      bubble.value!.style.display = 'none';
    }
  })
  const timeLine = gsap.timeline();
  timeLine.to(logo.value as HTMLElement, {
    duration: 0.1,
    rotation: 30,
  })
  timeLine.to(logo.value as HTMLElement, {
    duration: 0.2,
    rotation: -30,
  })
  timeLine.to(logo.value as HTMLElement, {
    duration: 0.2,
    rotation: 30,
  })
  timeLine.to(logo.value as HTMLElement, {
    duration: 0.1,
    rotation: 0,
  })
  timeLine.to(logo.value as HTMLElement, {
    top: '190vh',
    rotation: 0,
    ease: 'power3.out',
    duration: 0.3,
    onComplete: () => {
      animState.value = !animState.value;
    }
  })
  timeLine.to(logo.value as HTMLElement, {
    top: '0',
    ease: 'power3.in',
  })
}
</script>

<template>
  <div class="container-fluid h-100">
    <div class="row row-cols-1 row-cols-lg-2 h-100">
      <div class="col my-auto">
        <img ref="bubble" id="bubble" src="@/assets/bubble.svg" alt="speach bubble">
        <img alt="logo" ref="logo" @click="doLogoAnimation" class="logo" :src='animState ? BootstrapLogo : VueLogo'
             height="125"/>

        <div class="wrapper">
          <Header/>

          <nav>
            <RouterLink to="/">Home</RouterLink>
            <RouterLink to="/grid">Grid</RouterLink>
          </nav>
        </div>
      </div>

      <div class="col my-auto">
        <router-view v-slot="{ Component }">
          <transition mode="out-in">
            <component :is="Component"/>
          </transition>
        </router-view>
      </div>
    </div>

  </div>
</template>

<style scoped>
#bubble {
  width: 125px;
  left: calc(50% - 120px);
  position: absolute;
  top: 40%;
  opacity: 0;
  transform: translate(-50%, -100px) rotate(-40deg);
}

</style>

<style>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

#app {
  height: 100%;
  width: 100%;
  position: absolute;
}

.logo {
  display: block;
  margin: 1rem auto 1rem;
  transition: all 0.6s ease-out;
}

a,
.green {
  text-decoration: none;
  color: hsla(160, 100%, 37%, 1);
  transition: 0.4s;
}

@media (hover: hover) {
  a:hover {
    background-color: hsla(160, 100%, 37%, 0.2);
  }
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}
</style>
