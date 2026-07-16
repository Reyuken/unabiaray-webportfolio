<script setup>
</script>

<template>
    <footer class="footer-section">
        <div class="section bg">
            <div class="container-fluid">

                <div class="footer-grid">

                    <div class="footer-about">
                        <a class="brand" href="#landing">Ray.U</a>

                        <p>
                            I’m Ray Unabia, a passionate and driven Junior Web Developer with
                            strong front-end development skills and a keen eye for design.
                        </p>

                        <hr />

                        <a class="email" href="mailto:rayunabia2@gmail.com">
                            <img src="/img/email.png" alt="email" />
                            <span>rayunabia2@gmail.com</span>
                        </a>
                    </div>

                    <div class="footer-links">
                        <ul>
                            <li><a href="#landing">Home</a></li>
                            <li><a href="#tools">Tools</a></li>
                            <li><a href="#projects">Projects</a></li>
                            <li>
                                <a href="https://my-portfolio-seven-psi-54.vercel.app" target="_blank">
                                    Wanna See Something Cool?
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div class="footer-social">
                        <a href="https://linkedin.com/in/ray-unabia-ba135a281/" target="_blank">
                            <img src="/img/LinkedIn Circled.png" alt="LinkedIn" />
                        </a>

                        <a href="https://twitter.com/" target="_blank">
                            <img src="/img/Twitter.png" alt="Twitter" />
                        </a>

                        <a href="https://github.com/Reyuken" target="_blank">
                            <img src="/img/GitHub.png" alt="GitHub" />
                        </a>
                    </div>

                </div>

            </div>
        </div>
    </footer>
</template>

<style scoped>
.footer-section {
    background: var(--footer-panel-bg);
    margin-top: 80px;
    padding: 60px 0;
    border-top: 1px solid var(--footer-border);
}

.container-fluid {
    max-width: 1100px;
    margin: auto;
}

.footer-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 50px;
    align-items: start;
}

.brand {
    display: inline-block;

    font-size: 2.6rem;
    font-weight: 700;
    letter-spacing: .08em;
    text-transform: uppercase;

    text-decoration: none;
    color: var(--theme-color);

    transition: color .25s ease;
}

.brand:hover {
    color: var(--footer-brand-hover);
}

.footer-about p {
    margin-top: 16px;

    color: var(--footer-text);
    font-size: .95rem;
    line-height: 1.8;
}

.footer-about hr {
    margin: 20px 0;
    border: none;
    border-top: 1px solid var(--footer-divider);
}

.email {
    display: flex;
    align-items: center;
    gap: 12px;

    color: var(--footer-email);
    text-decoration: none;

    transition: color .25s ease;
}

.email:hover {
    color: var(--theme-color);
}

.email img {
    width: 20px;
    height: 20px;

    padding: 3px;

    border: 1px solid var(--footer-icon-border);

    filter: var(--footer-social-filter);

    transition: .25s ease;
}

.email:hover img {
    filter: var(--footer-social-filter-hover);
}

.footer-links ul {
    list-style: none;
    padding: 0;
    margin: 0;

    text-align: center;
}

.footer-links li {
    margin-bottom: 16px;
}

.footer-links a {
    text-decoration: none;

    color: var(--footer-link);

    text-transform: uppercase;
    letter-spacing: .08em;
    font-size: .9rem;

    transition: color .25s ease;
}

.footer-links a:hover {
    color: var(--theme-color);
}

.footer-social {
    display: flex;
    justify-content: center;
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
        filter .25s ease,
        border-color .25s ease;
}

.footer-social img:hover {
    transform: translateY(-3px);

    border-color: var(--theme-color);

    filter: var(--footer-social-filter-hover);
}

@media (max-width:768px) {

    .footer-grid {
        grid-template-columns: 1fr;
        text-align: center;
        gap: 40px;
    }

    .email {
        justify-content: center;
    }

    .footer-social {
        justify-content: center;
    }
}
</style>