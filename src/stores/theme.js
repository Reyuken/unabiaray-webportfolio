import { defineStore } from 'pinia'
import { ref, watch } from 'vue'

export const useThemeStore = defineStore('theme', () => {
    const theme = ref(localStorage.getItem('theme') || 'mechanical')

    function setTheme(newTheme) {
        theme.value = newTheme
    }

    watch(theme, (value) => {
        localStorage.setItem('theme', value)
    })

    return {
        theme,
        setTheme
    }
})