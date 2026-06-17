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
    margin-top: 60px;
}

.bg {
    background: #f7f7f7;
    padding: 60px 0;
}

.container-fluid {
    max-width: 1100px;
    margin: auto;
}

.footer-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 40px;
    align-items: start;
}

.brand {
    font-family: 'RushonGround', Arial, sans-serif;
    font-size: 50px;
    font-weight: 700;
    text-decoration: none;
    color: #000;
}

.brand:hover {
    color: #ff7777;
}

.footer-about p {
    margin-top: 10px;
    font-size: 14px;
    color: #555;
    line-height: 1.6;
}

.footer-about hr {
    margin: 15px 0;
    border: 0.5px solid #ddd;
}

.email {
    display: flex;
    align-items: center;
    gap: 10px;
    text-decoration: none;
    color: #333;
    font-size: 14px;
}

.email img {
    width: 20px;
}

.footer-links ul {
    text-align: center;
    list-style: none;
    padding: 0;
}

.footer-links li {
    margin-bottom: 12px;
}

.footer-links a {
    text-decoration: none;
    color: #333;
    font-size: 14px;
    transition: 0.2s;
}

.footer-links a:hover {
    color: black;
    text-decoration: underline;
}

.footer-social {
    display: flex;
    gap: 15px;
    justify-content: center;
}

.footer-social img {
    width: 34px;
    transition: 0.2s ease;
}

.footer-social img:hover {
    transform: scale(1.15);
}


@media (max-width: 768px) {
    .footer-grid {
        grid-template-columns: 1fr;
        text-align: center;
    }

    .footer-social {
        justify-content: center;
    }

    .email {
        justify-content: center;
    }
}
</style>