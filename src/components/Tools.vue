<script setup>
const tools = {
    frontend: [
        { name: 'HTML', img: '/img/html.png' },
        { name: 'CSS', img: '/img/css.png' },
        { name: 'JavaScript', img: '/img/javascript (1).png' },
        { name: 'Bootstrap', img: '/img/bootstrap 1.png' }
    ],
    mern: [
        { name: 'MongoDB', img: '/img/mongodb.png' },
        { name: 'Express', img: '/img/expressjs.png' },
        { name: 'React', img: '/img/react (2).png' },
        { name: 'Node.js', img: '/img/node-js.png' }
    ],
    others: [
        { name: 'Heroku', img: '/img/heroku.png' },
        { name: 'Git', img: '/img/git (2).png' },
        { name: 'Sublime', img: '/img/sublime.png' },
        { name: 'Postman', img: '/img/postman.png' }
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
    background: #f7f7f7;
    padding: 60px 0;
}

.section {
    padding: 60px 0;
}

.container-fluid {
    max-width: 1100px;
    margin: auto;
}

.skill-section h1 {
    font-size: 28px;
    font-weight: 700;
    margin-bottom: 10px;
}

.tools-wrapper {
    display: flex;
    flex-direction: row;
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
}

.grid-2x2 {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, auto);
    gap: 15px;
    justify-items: center;
}

.tool-card {
    width: 140px;
    height: 140px;
    background: white;
    border: 1px solid #ddd;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: 0.2s ease;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
}

.tool-card:hover {
    transform: translateY(-4px);
}

.tool-card img {
    width: 50px;
    height: 50px;
    object-fit: contain;
    margin-bottom: 8px;
}

.tool-card p {
    font-size: 16px;
    margin: 0;
    text-align: center;
}
</style>