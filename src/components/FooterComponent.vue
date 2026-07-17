<script setup>
</script>
<template>
    <footer class="footer-section">
        <div class="container-fluid">

            <!-- <a class="brand" href="#landing">Ray.U</a> -->

            <p class="copyright">
                © 2026 Ray Unabia. Built with Vue.js.
            </p>

            <div class="footer-social">
                <a href="https://linkedin.com/in/ray-unabia-ba135a281/" target="_blank">
                    <img src="/img/LinkedIn Circled.png" alt="LinkedIn">
                </a>

                <a href="https://github.com/Reyuken" target="_blank">
                    <img src="/img/GitHub.png" alt="GitHub">
                </a>
            </div>

        </div>
    </footer>
</template>

<style scoped>
.footer-section {
    background: var(--panel-bg);
    border-top: 1px solid var(--footer-border);
    
    padding: 20px 20px;
}

.container-fluid {
    max-width: 1100px;

    margin: auto;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 18px;

    text-align: center;
}

.brand {
    text-decoration: none;

    font-size: 2.2rem;
    font-weight: 700;
    letter-spacing: .08em;
    text-transform: uppercase;

    color: var(--theme-color);

    transition: color .25s ease;
}

.brand:hover {
    color: var(--footer-brand-hover);
}

.copyright {
    color: var(--footer-text);

    font-size: .9rem;
    opacity: .8;
}

.footer-social {
    display: flex;
    gap: 18px;
}

.footer-social img {
    width: 36px;
    height: 36px;

    padding: 6px;

    border: 1px solid var(--footer-icon-border);
    border-radius: 2px;

    filter: var(--footer-social-filter);

    transition:
        transform .25s ease,
        border-color .25s ease,
        filter .25s ease;
}

.footer-social img:hover {
    transform: translateY(-3px);

    border-color: var(--theme-color);

    filter: var(--footer-social-filter-hover);
}

@media (max-width:768px) {
    .footer-section {
        padding: 40px 20px;
    }
}
</style>