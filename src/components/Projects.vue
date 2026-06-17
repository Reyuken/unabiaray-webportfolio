<script setup>
import projects from '../data/projects.json'
import ProjectCard from './ProjectCard.vue'
import { computed } from 'vue'

const chunkSize = 3

const chunkedProjects = computed(() => {
	const chunks = []

	for (let i = 0; i < projects.length; i += chunkSize) {
		chunks.push(projects.slice(i, i + chunkSize))
	}

	return chunks
})
</script>

<template>
	<section id="projects" class="projects-section">
		<h1 class="title">My Projects</h1>

		<div v-for="(group, index) in chunkedProjects" :key="index" class="project-row">
			<ProjectCard v-for="project in group" :key="project.id" :project="project" class="project-card" />
		</div>
	</section>
</template>

<style scoped>
.projects-section {
	padding: 80px 20px;
	max-width: 1100px;
	margin: 0 auto;
}

.title {
	text-align: center;
	font-size: 3rem;
	font-weight: 700;
	margin-bottom: 50px;
	font-family: 'Montserrat', sans-serif;
}

.project-row {
	display: flex;
	justify-content: center;
	gap: 20px;
	margin-bottom: 40px;
	flex-wrap: wrap;
}

.project-card {
	flex: 1 1 300px;
	max-width: 350px;
	transition: transform 0.3s ease;
}

.project-card:hover {
	transform: translateY(-5px);
}

@media (max-width: 768px) {
	.title {
		font-size: 2.2rem;
	}

	.project-row {
		flex-direction: column;
		align-items: center;
	}

	.project-card {
		width: 100%;
		max-width: 90%;
	}
}
</style>