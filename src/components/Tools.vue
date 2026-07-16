<script setup>
const base = import.meta.env.BASE_URL

const tools = {
    frontend: [
        { name: 'HTML', img: base + 'img/html.png' },
        { name: 'CSS', img: base + 'img/css.png' },
        { name: 'JavaScript', img: base + 'img/javascript (1).png' },
        { name: 'Bootstrap', img: base + 'img/bootstrap 1.png' }
    ],
    mern: [
        { name: 'MongoDB', img: base + 'img/mongodb.png' },
        { name: 'Express', img: base + 'img/expressjs.png' },
        { name: 'React', img: base + 'img/react (2).png' },
        { name: 'Node.js', img: base + 'img/node-js.png' }
    ],
    others: [
        { name: 'Heroku', img: base + 'img/heroku.png' },
        { name: 'Git', img: base + 'img/git (2).png' },
        { name: 'Sublime', img: base + 'img/sublime.png' },
        { name: 'Postman', img: base + 'img/postman.png' }
    ]
}
</script>

<template>
    <section class="section bg" id="tools">
        <div class="container-fluid">

            <div class="text-center skill-section">
                <h1>AREA OF EXPERTISE</h1>
                <p class="para">
                    Let's kickstart your project and collaborate to build something amazing. I'll bring my
                    skills to make your next project shine.
                </p>
            </div>

            <div class="tools-wrapper">

                <div class="tool-group">
                    <h3>Front End</h3>
                    <div class="grid-2x2">
                        <div v-for="tool in tools.frontend" :key="tool.name" class="tool-card">
                            <img :src="tool.img" :alt="tool.name" />
                            <p>{{ tool.name }}</p>
                        </div>
                    </div>
                </div>

                <div class="tool-group">
                    <h3>MERN Stack</h3>
                    <div class="grid-2x2">
                        <div v-for="tool in tools.mern" :key="tool.name" class="tool-card">
                            <img :src="tool.img" :alt="tool.name" />
                            <p>{{ tool.name }}</p>
                        </div>
                    </div>
                </div>

                <div class="tool-group">
                    <h3>Other Tools</h3>
                    <div class="grid-2x2">
                        <div v-for="tool in tools.others" :key="tool.name" class="tool-card">
                            <img :src="tool.img" :alt="tool.name" />
                            <p>{{ tool.name }}</p>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    </section>
</template>

<style scoped>
.bg {
    padding: 60px 0;
}

.section {
    padding: 60px 0;
}

.container-fluid {
    max-width: 1100px;
    margin: auto;
    background: var(--panel-bg);
    border: 1px solid var(--tools-container-border);
    border-radius: var(--tools-container-radius);
    padding: 3rem;
    box-shadow: var(--tools-container-shadow);
}

.skill-section h1 {
    font-size: 28px;
    font-weight: 700;
    margin-bottom: 10px;
    color: var(--theme-color);
}

.para {
    color: var(--tools-description);
    line-height: 1.8;
}

.tools-wrapper {
    display: flex;
    justify-content: space-between;
    gap: 20px;
    margin-top: 40px;
    flex-wrap: wrap;
}

.tool-group {
    flex: 1;
    min-width: 250px;
}

.tool-group h3 {
    text-align: center;
    margin-bottom: 20px;
    font-size: 20px;
    text-transform: uppercase;
    letter-spacing: .08em;
}

.grid-2x2 {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 15px;
    justify-items: center;
}

.tool-card {
    width: 140px;
    height: 140px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: var(--tool-card-bg);
    border: 1px solid var(--tool-card-border);
    border-radius: var(--tool-card-radius);
    box-shadow: var(--tool-card-shadow);
    transition:
        transform .3s ease,
        border-color .3s ease,
        box-shadow .3s ease;
}

.tool-card:hover {
    transform: translateY(-6px);
    border-color: var(--theme-color);
    box-shadow: var(--tool-card-hover-shadow);
}

.tool-card img {

    width: 50px;
    height: 50px;
    object-fit: contain;
    margin-bottom: 10px;
    padding: 6px;
    background: var(--tool-icon-bg);
    border: 1px solid var(--tool-icon-border);
    border-radius: 3px;
    filter: var(--tool-icon-filter);
    transition:
        transform .3s ease,
        filter .3s ease,
        border-color .3s ease,
        background .3s ease;
}

.tool-card:hover img {
    transform: scale(1.08);
    filter: var(--tool-icon-filter-hover);
    border-color: var(--theme-color);
    background: var(--tool-icon-hover-bg);
}

.tool-card:hover img {
    transform: scale(1.08);
    filter: var(--tool-icon-filter-hover);
    border-color: var(--theme-color);
    background: var(--tool-icon-hover-bg);
}

.tool-card p {
    margin: 0;
    font-size: .95rem;
    text-align: center;
    color: var(--tool-card-text);
    text-transform: uppercase;
    letter-spacing: .06em;
}
</style>