<script setup>
import projects from '../data/projects.json'
import ProjectCard from './ProjectCard.vue'
import PreviewCard from './PreviewCard.vue'
import { ref, computed, onMounted, onUnmounted } from 'vue'

const selectedProject = ref(null)
const showPreview = ref(false)

const showAll = ref(false)
const currentIndex = ref(0)

// layout constants (must match the CSS values below)
const cardWidth = 300
const gap = 20

// how many cards are visible at once — responsive
const visibleCount = ref(3)

function openPreview(project) {
	selectedProject.value = project
	showPreview.value = true
}

function closePreview() {
	showPreview.value = false
	selectedProject.value = null
}

function updateVisibleCount() {
	const w = window.innerWidth
	if (w < 700) visibleCount.value = 1
	else if (w < 1000) visibleCount.value = 2
	else visibleCount.value = 3
}

onMounted(() => {
	updateVisibleCount()
	window.addEventListener('resize', updateVisibleCount)
})

onUnmounted(() => {
	window.removeEventListener('resize', updateVisibleCount)
})

const maxIndex = computed(() =>
	Math.max(0, projects.length - visibleCount.value)
)

// clamp currentIndex whenever visibleCount changes (e.g. resize)
function clampIndex() {
	if (currentIndex.value > maxIndex.value) currentIndex.value = maxIndex.value
}

const trackStyle = computed(() => ({
	transform: `translateX(-${currentIndex.value * (cardWidth + gap)}px)`,
}))

const viewportWidth = computed(
	() => visibleCount.value * cardWidth + (visibleCount.value - 1) * gap
)

function prev() {
	currentIndex.value =
		currentIndex.value === 0 ? maxIndex.value : currentIndex.value - 1
	clampIndex()
}

function next() {
	currentIndex.value =
		currentIndex.value >= maxIndex.value ? 0 : currentIndex.value + 1
	clampIndex()
}

function goTo(index) {
	currentIndex.value = index
}

function toggleShowAll() {
	showAll.value = !showAll.value
}
</script>

<template>
	<section id="projects" class="projects-section">
		<h1 class="title">My Projects</h1>

		<div class="controls">
			<button class="toggle-btn" @click="toggleShowAll">
				{{ showAll ? 'Collapse' : 'View All' }}
				<span class="chevron" :class="{ open: showAll }">▾</span>
			</button>
		</div>

		<div v-if="!showAll" class="carousel">
			<button class="arrow-btn" @click="prev" aria-label="Previous project">‹</button>

			<div class="carousel-viewport" :style="{ width: viewportWidth + 'px' }">
				<div class="carousel-track" :style="trackStyle">
					<div v-for="project in projects" :key="project.id" class="card-wrapper">
						<ProjectCard :project="project" @click="openPreview(project)" class="project-card" />
					</div>
				</div>
			</div>

			<button class="arrow-btn" @click="next" aria-label="Next project">›</button>
		</div>

		<div v-if="!showAll" class="dots">
			<button v-for="index in maxIndex + 1" :key="index - 1" class="dot"
				:class="{ active: index - 1 === currentIndex }" @click="goTo(index - 1)"
				:aria-label="`Go to card ${index}`" />
		</div>

		<transition name="expand">
			<div v-if="showAll" class="project-grid">
				<div v-for="project in projects" :key="project.id" class="card-wrapper grid-card">

					<ProjectCard :project="project" @click="openPreview(project)" class="project-card" />

				</div>
			</div>
		</transition>
	</section>
	<Transition name="preview">
		<PreviewCard v-if="showPreview" :project="selectedProject" @close="closePreview" />
	</Transition>

</template>

<style scoped>
.projects-section {
	/* padding: 80px 20px; */
	max-width: 1100px;
	margin: 0 auto;
}

.title {
	text-align: center;
	font-size: 3rem;
	font-weight: 700;
	margin-bottom: 30px;
}

.controls {
	display: flex;
	justify-content: center;
	margin-bottom: 30px;
}

.toggle-btn {
	display: flex;
	align-items: center;
	gap: 6px;

	padding: 10px 20px;

	background: var(--projects-toggle-bg);
	border: 1px solid var(--projects-toggle-border);
	border-radius: 999px;



	cursor: pointer;

	font-size: 0.95rem;
	font-weight: 600;
	letter-spacing: 0.05em;
	text-transform: uppercase;

	transition:
		background .25s ease,
		border-color .25s ease,
		color .25s ease,
		transform .25s ease,
		box-shadow .25s ease;
}

.toggle-btn:hover {
	background: var(--theme-color);
	border-color: var(--projects-toggle-hover-border);
	color: var(--projects-toggle-hover-text);

	transform: translateY(-2px);

	box-shadow:
		0 0 10px rgba(183, 138, 84, .35),
		0 0 20px rgba(183, 138, 84, .15);
}

.chevron {
	display: inline-block;
	transition: transform 0.25s ease;
}

.chevron.open {
	transform: rotate(180deg);
}

.carousel {
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 16px;
}

.carousel::after {
	content: "";

	position: absolute;
	left: 60px;
	right: 60px;
	bottom: -18px;

	height: 12px;

	background: var(--carousel-shadow-gradient);

	filter: blur(10px);

	pointer-events: none;
}

.arrow-btn {
	background: var(--carousel-arrow-bg);
	border: 1px solid var(--carousel-arrow-border);
	color: var(--color);

	border-radius: 50%;
	width: 44px;
	height: 44px;

	font-size: 1.5rem;
	line-height: 1;

	cursor: pointer;
	flex-shrink: 0;
	z-index: 2;

	transition:
		background .25s ease,
		border-color .25s ease,
		color .25s ease,
		transform .25s ease,
		box-shadow .25s ease;
}

.arrow-btn:hover {
	background: var(--theme-color);
	border-color: var(--carousel-arrow-hover-border);
	color: var(--carousel-arrow-hover-color);

	transform: scale(1.08);

	box-shadow:
		0 0 10px rgba(183, 138, 84, .35),
		0 0 20px rgba(183, 138, 84, .15);
}

.carousel-viewport {
	overflow: hidden;
	padding: 40px 0;
	margin: -40px 0;
	z-index: 1;
}

.carousel-track {
	display: flex;
	align-items: flex-start;
	gap: 20px;
	transition: transform .5s cubic-bezier(.4, 0, .2, 1);
	will-change: transform;

	overflow: visible;
}

.card-wrapper {
	position: relative;
	flex: 0 0 300px;
}

.card-wrapper:hover .card-hover {
	max-height: 900px;
	transform: scale(1.05);

	z-index: 999;

	box-shadow: 0 20px 40px rgba(0, 0, 0, .25);
}

.project-card {
	width: 100%;
}


.project-grid {
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: flex-start;

	gap: 20px;

}

.grid-card {
	flex: 0 0 300px;
}

.dots {
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	gap: 10px;
	margin-top: 9px;
}

.dot {
	width: 10px;
	height: 10px;
	border-radius: 50%;
	border: none;
	background: var(--carousel-dot-bg);
	cursor: pointer;
	padding: 0;
	transition: background 0.2s ease, transform 0.2s ease;
}

.dot.active {
	background: var(--theme-color);
	transform: scale(1.2);
	z-index: 0;
}

.expand-enter-active,
.expand-leave-active {
	transition: opacity 0.25s ease;
}

.expand-enter-from,
.expand-leave-to {
	opacity: 0;
}

.preview-enter-active,
.preview-leave-active {
	transition:
		opacity .3s ease,
		transform .3s ease;
}

.preview-enter-from,
.preview-leave-to {
	opacity: 0;
	transform: scale(.92);
}

.preview-enter-to,
.preview-leave-from {
	opacity: 1;
	transform: scale(1);
}

@media (max-width: 768px) {
	.title {
		font-size: 2.2rem;
	}

	.carousel {
		gap: 8px;
	}
}
</style>