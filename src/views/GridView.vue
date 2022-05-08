<script setup lang="ts">
import {ref, onMounted} from "vue";

const colNumber = ref<number>(4);
const gaps = ref<number>(4);
const cardNumber = ref<number>(10);
const infoSliders = ref<HTMLDivElement>();

const computedColStyle = ref<object>();

//This could be avoided with a proper use of css flex, but it wasn't worth the pain. 🤣
function computeColStyle() {
  if (document.body.clientWidth > 1024) {
    computedColStyle.value = {'maxHeight': document.body.clientHeight - infoSliders.value?.clientHeight! + 'px'};
  } else {
    computedColStyle.value = {};
  }
}

// This is needed since vue computed listen only for refs modifications
window.addEventListener('resize', () => {
  computeColStyle();
})

onMounted(() => {
  computeColStyle();
})

</script>
<template>
  <div class="container-fluid h-100">
    <div class="row" ref="infoSliders">
      <div class="col">
        <label for="customRange2" class="form-label">Column number: row-cols-{{ colNumber }}</label>
        <input type="range" class="form-range" min="1" max="6" v-model.number="colNumber">
      </div>
      <div class="col">
        <label for="customRange2" class="form-label">Gaps: g-{{ gaps }}</label>
        <input type="range" class="form-range" min="0" max="5" v-model.number="gaps">
      </div>
      <div class="col">
        <label for="customRange2" class="form-label">Card number: {{ cardNumber }}</label>
        <input type="range" class="form-range" min="0" max="50" v-model.number="cardNumber">
      </div>
    </div>
    <div class="row">
      <div class="row overflow-y-auto m-0" :style="computedColStyle" :class="'row-cols-' + colNumber + ' g-' + gaps">
        <div class="col" v-for="n in cardNumber">
          <div class="card bg-black">
            <img :src="'https://picsum.photos/400/200?'+n" class="card-img-top" alt="random image">
            <div class="card-body">
              <h5 class="card-title">Card number: {{ n }}</h5>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>
