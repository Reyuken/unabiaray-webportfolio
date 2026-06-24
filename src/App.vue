<script setup>
import Navbar from './components/Navbar.vue';
import About from './components/About.vue';
import Projects from './components/Projects.vue';
import Tools from './components/Tools.vue';
import Contact from './components/Contact.vue';
import FooterComponent from './components/FooterComponent.vue';
import BackToTop from './components/BackToTop.vue'

</script>

<template>
    <!-- <div class="notice">
        <button class="close-btn" onclick="this.parentElement.style.display='none'">×</button>

        <p>
            Welcome! This portfolio highlights my web development projects, technical skills, and ongoing work.
            New features and projects are added regularly as I continue to grow as a developer.
            <br><br>
            For additional projects and earlier work, you may also visit:
            <br>
            <a href="https://my-portfolio-seven-psi-54.vercel.app" target="_blank">
                Previous Portfolio
            </a>
        </p>
    </div> -->
    <Navbar />
    <About />
    <Projects />
    <Tools />
    <Contact />
    <FooterComponent />
    <BackToTop />
</template>

<style scoped>
.notice {
    position: fixed;
    bottom: 20px;
    right: 20px;

    background: #fff8e1;
    border-left: 5px solid #ffb300;
    color: #333;

    padding: 15px 20px;
    width: 320px;

    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    border-radius: 8px;

    font-size: 14px;
    z-index: 9999;
}

.notice a {
    color: #0066cc;
    text-decoration: none;
    word-break: break-all;
}

.notice a:hover {
    text-decoration: underline;
}

.close-btn {
    position: absolute;
    top: 5px;
    right: 10px;

    border: none;
    background: none;
    font-size: 18px;
    cursor: pointer;
}
</style>
