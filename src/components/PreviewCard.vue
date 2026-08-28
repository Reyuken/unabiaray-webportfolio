<script setup>
defineProps({
    project: Object
})

const emit = defineEmits(['close'])
</script>

<template>
    <div class="overlay" @click.self="emit('close')">
        <div class="preview">
            <button @click="emit('close')" class="close-btn">
                ✕
            </button>
            <img :src="project.image">
            <div class="panel">
                <h1>{{ project.title }}</h1>
                <p>{{ project.description }}</p>
            </div>
            <a v-if="project.link" :href="project.link" target="_blank" rel="noopener noreferrer" class="visit-btn">
                Visit Website ↗
            </a>

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
    /* max-height: 90vh; */

    overflow: auto;

    background: var(--card-bg);

    border-radius: 16px;

    padding: 30px;

}

.panel {
    margin: 10px;
    padding: 10px 50px;
    border-radius: 10px;
    background: var(--panel-bg);

}

.visit-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;

    margin-top: 20px;
    padding: 12px 28px;

    border: 1px solid var(--theme-color);
    border-radius: 999px;

    background: var(--button-bg);
    color: var(--button-text);

    font-size: 0.95rem;
    font-weight: 600;
    letter-spacing: 0.04em;

    text-decoration: none;
    cursor: pointer;

    transition:
        transform .25s ease,
        box-shadow .25s ease,
        filter .25s ease;
}

.visit-btn:hover {
    transform: translateY(-2px);

    filter: brightness(1.05);
    background: var(--button-hover);
    box-shadow:
        0 8px 20px rgba(0, 0, 0, .15);
}

.visit-btn:active {
    transform: translateY(0);
}

.close-btn {
    padding: 7px 12px;

    border: 1px solid var(--theme-color);
    border-radius: 999px;

    background: var(--button-bg);
    color: var(--button-text);
}
</style>