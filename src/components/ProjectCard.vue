<script setup>
defineProps({
    project: Object
})

const emit = defineEmits(['click'])
</script>

<template>
    <div @click="emit('click')" class="project-card card col-12 col-sm-6 col-md-4">
        <div class="image-wrapper">
            <img :src="project.image" class="card-img-top" :alt="project.title" />

            <span v-if="project.status === 'live'" class="badge-live">
                ✔ Live
            </span>
        </div>

        <div class="card-body">
            <h5 class="card-title">{{ project.title }}</h5>
        </div>
    </div>
</template>

<style scoped>
.project-card {
    position: relative;
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    align-items: start;

    text-decoration: none;
    color: inherit;

    height: 260px;
    padding: 10px;
    border: 1px solid var(--project-card-border);
    border-radius: var(--project-card-radius);

    overflow: hidden;

    background: var(--project-card-bg);
    box-shadow: var(--project-card-shadow);
    transition:
        transform .3s ease,
        box-shadow .3s ease,
        border-color .3s ease;
}

.project-card:hover {
    transform: translateY(-6px);
    border-color: var(--theme-color);
    box-shadow: var(--project-card-hover-shadow);
}

.image-wrapper {
    position: relative;
    width: 100%;
    height: 180px;
    overflow: hidden;
    border-radius: var(--project-image-radius);
    background: var(--project-image-bg);
    border: 1px solid var(--project-image-border);
}

.card-img-top {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition:
        transform .35s ease,
        filter .35s ease;
    filter: var(--project-image-filter);
}

.project-card:hover .card-img-top {
    transform: scale(1.04);
    filter: var(--project-image-filter-hover);
}

.card-body {
    flex: 1;
    margin: auto;
    padding: 15px;
    overflow: hidden;
}

.card-title {
    color: var(--theme-color);
    font-size: 1rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: .05em;
    margin-bottom: 10px;
    text-align: center;
}

.badge-live {
    position: absolute;
    top: 10px;
    right: 10px;
    padding: 5px 10px;
    background: var(--project-badge-bg);
    color: var(--project-badge-text);
    border: 1px solid var(--project-badge-border);
    border-radius: var(--project-badge-radius);
    font-size: .7rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: .08em;
    box-shadow: var(--project-badge-shadow);
}
</style>