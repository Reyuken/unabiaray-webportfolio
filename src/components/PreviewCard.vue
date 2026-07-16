<script setup>
defineProps({
    project: Object
})

const emit = defineEmits(['close'])
</script>

<template>
    <div class="overlay" @click.self="emit('close')">
        <div class="preview">
            <button @click="emit('close')">
                ✕
            </button>
            <img :src="project.image">
            <h1>{{ project.title }}</h1>
            <p>{{ project.description }}</p>

        </div>
    </div>
</template>

<style scoped>
h1 {
    text-align: center;
}
p {
    text-align: justify;
}
img {
    margin: auto;
    width: 70%;
    aspect-ratio: 16 / 9;
    overflow: hidden;
    border-radius: 12px;
}

.overlay {

    position: fixed;
    inset: 0;

    background: rgba(0, 0, 0, .6);

    display: flex;
    justify-content: center;
    align-items: center;

    z-index: 9999;

}

.preview {

    max-width: 80vw;
    max-height: 90vh;

    overflow: auto;

    background: var(--card-bg);

    border-radius: 16px;

    padding: 30px;

}
</style>