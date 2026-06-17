<script setup>
defineProps({
    project: Object
})
</script>

<template>
    <a :href="project.link || '#'" target="_blank" class="project-card card col-12 col-sm-6 col-md-4">
        <div class="image-wrapper">
            <img :src="project.image" class="card-img-top" :alt="project.title" />

            <span v-if="project.status === 'live'" class="badge-live">
                ✔ Live
            </span>
        </div>

        <div class="card-body">
            <h5 class="card-title">{{ project.title }}</h5>
            <p class="card-text">{{ project.description }}</p>
        </div>
    </a>
</template>

<style scoped>
.project-card {
    text-decoration: none;
    color: inherit;
    border: none;
    border-radius: 12px;
    overflow: hidden;
    background: #fff;
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.08);
    transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.project-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
}

.image-wrapper {
    position: relative;
    width: 100%;
    height: 180px;
    overflow: hidden;
}

.card-img-top {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.card-body {
    padding: 15px;
}

.card-title {
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 8px;
}

.card-text {
    font-size: 16px;
    color: #555;
    line-height: 1.5;
}

.badge-live {
    position: absolute;
    top: 10px;
    right: 10px;
    background: #28a745;
    color: white;
    font-size: 12px;
    padding: 4px 8px;
    border-radius: 6px;
}
</style>