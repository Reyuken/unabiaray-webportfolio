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
  <button
    class="back-to-top"
    :class="{ backToTopShow: isVisible }"
    @click="scrollToTop"
  ></button>
</template>

<style scoped>
.back-to-top {
  margin: 0;
  padding: 0;
  background: #fff;
  height: 0;
  width: 0;
  overflow: hidden;
  border-radius: 50px;
  color: transparent;
  visibility: hidden;
  position: fixed;
  cursor: pointer;
  display: block;
  border: none;
  right: 50px;
  bottom: 75px;
  font-size: 0;
  outline: none;
  z-index: 99;
  transition: all 0.3s ease-in-out;
}

.back-to-top::before,
.back-to-top::after {
  content: "";
  display: block;
  border-bottom: solid 10px #ea5d5f;
  border-left: solid 10px transparent;
  border-right: solid 10px transparent;
  height: 0;
  width: 0;
  margin: 18px auto 0;
  border-radius: 20px;
  visibility: hidden;
}

.back-to-top::after {
  border-bottom-color: #fff;
  position: relative;
  top: -24px;
}

/* Vue class binding version of .back-to-top_show */
.backToTopShow {
  visibility: visible;
  height: 50px;
  width: 50px;
  right: 25px;
  bottom: 50px;
  font-size: 25px;
  background: #fff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
}

.backToTopShow::before,
.backToTopShow::after {
  visibility: visible;
}

.backToTopShow:active {
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.25);
}
</style>