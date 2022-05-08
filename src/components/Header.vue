<script setup lang="ts">
import GlitchedWriter from "vue-glitched-writer";
</script>

<template>
  <div class="greetings">
    <a href="https://dreaming.codes" target="_blank">
      <GlitchedWriter class="green gw gwTitle title" text="DreamingCodes" appear/>
    </a>
    <h3 class="text-center">
      Progetto
      <a target="_blank" href="https://vuejs.org/">Vue 3</a> +
      <a target="_blank" href="https://getbootstrap.com/">Bootstrap</a>.
    </h3>
  </div>
</template>

<style scoped>

.title {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
  text-align: center;
  display: table;
  margin: 0 auto;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}
</style>
