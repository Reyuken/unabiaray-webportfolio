<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isVisible = ref(false)
const amountScrolled = 200

const handleScroll = () => {
  isVisible.value = window.scrollY > amountScrolled
}

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <button class="back-to-top" :class="{ backToTopShow: isVisible }" @click="scrollToTop"></button>
</template>

<style scoped>
.back-to-top {
  margin: 0;
  padding: 0;

  background: var(--back-to-top-bg);

  height: 0;
  width: 0;

  overflow: hidden;
  border-radius: var(--back-to-top-radius);

  color: transparent;
  visibility: hidden;

  position: fixed;
  cursor: pointer;

  display: block;

  border: var(--back-to-top-border);

  right: 50px;
  bottom: 75px;

  font-size: 0;

  outline: none;
  z-index: 99;

  transition: var(--back-to-top-transition);
}


.back-to-top::before,
.back-to-top::after {
  content: "";

  display: block;

  border-bottom: solid 10px var(--back-to-top-arrow-color);
  border-left: solid 10px transparent;
  border-right: solid 10px transparent;

  height: 0;
  width: 0;

  margin: 18px auto 0;

  border-radius: var(--back-to-top-arrow-radius);

  visibility: hidden;
}


.back-to-top::after {
  border-bottom-color: var(--back-to-top-arrow-inner-color);

  position: relative;
  top: -24px;
}


.backToTopShow {
  visibility: visible;

  height: var(--back-to-top-size);
  width: var(--back-to-top-size);

  right: var(--back-to-top-right);
  bottom: var(--back-to-top-bottom);

  font-size: var(--back-to-top-font-size);

  background: var(--back-to-top-bg);

  box-shadow: var(--back-to-top-shadow);
}


.backToTopShow::before,
.backToTopShow::after {
  visibility: visible;
}


.backToTopShow:active {
  box-shadow: var(--back-to-top-active-shadow);
}
</style>