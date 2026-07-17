<script setup>
import { useThemeStore } from '@/stores/theme'

const themeStore = useThemeStore()
</script>

<template>

    <div class="theme-switcher">

        <button @click="themeStore.setTheme('mechanical')">⚙</button>

        <button @click="themeStore.setTheme('cute')">🌸</button>

        <button @click="themeStore.setTheme('hacker')">💻</button>

        <button @click="themeStore.setTheme('professional')">📄</button>

    </div>

</template>