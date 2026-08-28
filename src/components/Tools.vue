<script setup>
const base = import.meta.env.BASE_URL

const tools = {
    frontend: [
        { name: 'HTML', img: base + 'img/html.png' },
        { name: 'CSS', img: base + 'img/css.png' },
        { name: 'JavaScript', img: base + 'img/javascript (1).png' },
        { name: 'ReactJS', img: base + 'img/react (2).png' },
        { name: 'NextJS', img: base + 'img/nextjs.jpg' },
        { name: 'Vue', img: base + 'img/vue.png' },
        { name: 'Tailwind CSS', img: base + 'img/tailwind.png' },
        { name: 'Bootstrap', img: base + 'img/bootstrap 1.png' }
    ],

    backend: [
        { name: 'NodeJS', img: base + 'img/node-js.png' },
        { name: 'ExpressJS', img: base + 'img/expressjs.png' },
        { name: 'ASP.NET Core', img: base + 'img/aspnet.png' },
        { name: 'C#', img: base + 'img/csharp.png' },
        { name: 'REST APIs', img: base + 'img/api.png' },
        { name: 'JWT', img: base + 'img/jwt.png' }
    ],

    databases: [
        { name: 'MySQL', img: base + 'img/mysql.png' },
        { name: 'MongoDB', img: base + 'img/mongodb.png' }
    ],

    testing: [
        { name: 'Mocha', img: base + 'img/mocha.png' },
        { name: 'Chai', img: base + 'img/chai.png' },
        { name: 'Selenium', img: base + 'img/selenium.png' },
        { name: 'Chai-HTTP', img: base + 'img/chai.png' },
        { name: 'Postman', img: base + 'img/postman.png' }
    ],

    tools: [
        { name: 'Git', img: base + 'img/git (2).png' },
        { name: 'VS Code', img: base + 'img/vscode.png' },
        { name: 'JetBrains Rider', img: base + 'img/rider.png' },
        { name: 'Sublime Text', img: base + 'img/sublime.png' },
        { name: 'Trello', img: base + 'img/trello.png' },
        { name: 'Vercel', img: base + 'img/vercel.png' },
        { name: 'Render', img: base + 'img/render.png' },
        { name: 'ChatGPT', img: base + 'img/chatgpt.png' },
        { name: 'Claude', img: base + 'img/claude.png' }
    ]
}
</script>

<template>
    <section class="section bg" id="tools">
        <div class="container-fluid">

            <div class="text-center skill-section">
                <h1>AREA OF EXPERTISE</h1>

                <p class="para">
                    Let's kickstart your project and collaborate to build something amazing.
                    I'll bring my skills to make your next project shine.
                </p>
            </div>

            <div class="tools-wrapper">

                <!-- Frontend -->
                <div class="tool-group">
                    <h3>Frontend</h3>

                    <div class="grid">
                        <div v-for="tool in tools.frontend" :key="tool.name" class="tool-card">
                            <img :src="tool.img" :alt="tool.name" />
                            <p>{{ tool.name }}</p>
                        </div>
                    </div>
                </div>

                <!-- Backend -->
                <div class="tool-group">
                    <h3>Backend</h3>

                    <div class="grid">
                        <div v-for="tool in tools.backend" :key="tool.name" class="tool-card">
                            <img :src="tool.img" :alt="tool.name" />
                            <p>{{ tool.name }}</p>
                        </div>
                    </div>
                </div>

                <!-- Databases -->
                <div class="tool-group">
                    <h3>Databases</h3>

                    <div class="grid">
                        <div v-for="tool in tools.databases" :key="tool.name" class="tool-card">
                            <img :src="tool.img" :alt="tool.name" />
                            <p>{{ tool.name }}</p>
                        </div>
                    </div>
                </div>

                <!-- Testing -->
                <div class="tool-group">
                    <h3>Testing</h3>

                    <div class="grid">
                        <div v-for="tool in tools.testing" :key="tool.name" class="tool-card">
                            <img :src="tool.img" :alt="tool.name" />
                            <p>{{ tool.name }}</p>
                        </div>
                    </div>
                </div>

                <!-- Tools -->
                <div class="tool-group">
                    <h3>Tools</h3>

                    <div class="grid">
                        <div v-for="tool in tools.tools" :key="tool.name" class="tool-card">
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
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 40px 30px;
    margin-top: 40px;
}

.tool-group {
    min-width: 0;
}

.tool-group h3 {
    text-align: center;
    margin-bottom: 20px;
    font-size: 20px;
    text-transform: uppercase;
    letter-spacing: .08em;
}

.grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 15px;
    justify-items: center;
}

.tool-card {
    width: 120px;
    height: 120px;
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

.tool-card p {
    margin: 0;
    font-size: .8rem;
    text-align: center;
    color: var(--tool-card-text);
    text-transform: uppercase;
    letter-spacing: .04em;
}

/* Tablet */
@media (max-width: 900px) {
    .tools-wrapper {
        grid-template-columns: 1fr;
    }

    .grid {
        grid-template-columns: repeat(4, 1fr);
    }
}

/* Mobile */
@media (max-width: 600px) {
    .container-fluid {
        padding: 2rem 1rem;
    }

    .grid {
        grid-template-columns: repeat(2, 1fr);
    }

    .tool-card {
        width: 130px;
        height: 130px;
    }
}
</style>