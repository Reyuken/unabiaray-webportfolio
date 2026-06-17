<script setup>
</script>

<template>
    <section id="landing" class="about-section">
        <div class="container">
            <div class="row align-items-center g-4">

                <div class="col-12 col-md-6 text-content">
                    <p class="role">Full Stack Web Developer</p>

                    <h1 class="name">
                        I'm <span>Ray P. Unabia</span>
                    </h1>

                    <p class="description">
                        I'm a passionate Fullstack Web Developer with experience building responsive
                        and dynamic web applications. I enjoy creating seamless user experiences,
                        solving complex problems, and writing clean, maintainable code that makes both
                        users and developers happy.
                    </p>

                    <div class="cta-wrapper">
                        <a href="#contact" class="cta-btn">
                            Let’s create an awesome website!
                        </a>
                    </div>

                    <div class="social-media">
                        <a href="https://linkedin.com/in/ray-unabia-ba135a281/" target="linkedin.com/in/ray￾unabia-ba135a281
">
                            <img src="/img/LinkedIn Circled.png" alt="LinkedIn" />
                        </a>

                        <a href="https://twitter.com/" target="_blank">
                            <img src="/img/twt2.png" alt="Twitter" />
                        </a>

                        <a href="https://github.com/Reyuken" target="https://github.com/Reyuken">
                            <img src="/img/GitHub.png" alt="GitHub" />
                        </a>
                    </div>
                </div>

                <div class="col-12 col-md-6 image-wrapper">
                    <img src="/img/myImage2.png" alt="Profile" class="profile-img" />
                </div>

            </div>
        </div>
    </section>
</template>

<style scoped>
.about-section {
    min-height: 90vh;
    display: flex;
    align-items: center;
    padding: 60px 0;

    background-image: linear-gradient(rgba(0, 0, 0, 0.65),
            rgba(0, 0, 0, 0.65)),
        url("/img/beach.jpg");

    background-size: cover;
    background-position: center 80%;
    background-repeat: no-repeat;

    color: white;
}

.text-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.role {
    font-size: 27px;
    color: #ddd;
    margin-bottom: 10px;
    letter-spacing: 1px;
}

.name {
    font-family: 'Satisfy', cursive;
    font-size: 44px;
    font-weight: 700;
    margin-bottom: 18px;
    color: rgb(0, 0, 0);
}

.name span {
    color: #f26c4f;
}

.description {
    font-size: 16px;
    line-height: 1.7;
    color: #eaeaea;
    margin-bottom: 25px;
}

.cta-btn {
    display: inline-block;
    font-family: 'Montserrat', sans-serif;
    font-size: 14px;
    font-weight: 500;
    line-height: 3.2rem;

    color: white;
    text-decoration: none;

    background: linear-gradient(90deg, #5a4ff2 0%, #414eff 81%);
    padding: 0px 20px;
    border-radius: 8px;

    cursor: pointer;
    transition: all 0.3s ease;
}

.cta-btn:hover {
    background: linear-gradient(90deg,
            rgba(79, 1, 1, 1) 0%,
            rgba(242, 79, 79, 1) 81%) !important;

    color: white;
    font-weight: 500;
}

.social-media {
    display: flex;
    margin-top: 20px;
    gap: 15px;
    align-items: center;
}

.social-media img {
    width: 34px;
    height: 34px;
    transition: 0.2s ease;
}

.social-media img:hover {
    transform: scale(1.1);
}

.image-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
}

.profile-img {
    width: 85%;
    max-width: 380px;
    border-radius: 12px;
}

@media (max-width: 768px) {
    .about-section {
        text-align: center;
        padding: 80px 20px;
    }

    .name {
        font-size: 34px;
    }

    .social-media {
        justify-content: center;
    }

    .profile-img {
        margin-top: 30px;
        width: 70%;
    }
}
</style>