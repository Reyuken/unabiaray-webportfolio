<script setup>
</script>

<template>
    <section id="landing" class="about-section">
        <div class="container">
            <div class="row align-items-center justify-content-center g-4">

                <div class="col-12 col-md-6 text-content">
                    <p class="role">
                        Full Stack Web Developer
                    </p>

                    <h1 class="name">
                        I'm <span>Ray P. Unabia</span>
                    </h1>

                    <p class="description">
                        I'm a Full-Stack Web Developer passionate about building responsive web applications with clean
                        code and seamless user experiences.
                    </p>

                    <div class="cta-wrapper">
                        <a href="#contact" class="cta-btn">
                            Let's create an awesome website!
                        </a>
                    </div>

                    <div class="social-media">

                        <a href="https://linkedin.com/in/ray-unabia-ba135a281/" target="_blank">
                            <img src="/img/LinkedIn Circled.png" alt="LinkedIn">
                        </a>
<!-- 
                        <a href="https://twitter.com/" target="_blank">
                            <img src="/img/twt2.png" alt="Twitter">
                        </a> -->

                        <a href="https://github.com/Reyuken" target="_blank">
                            <img src="/img/GitHub.png" alt="GitHub">
                        </a>

                    </div>

                </div>

                <div class="col-8 col-md-3 profile-pic">
                    <div class="image-wrapper">
                        <img src="/img/mechanicalTheme/mechanical-border.png" alt="border" class="img-border">
                        <img src="/img/myImage2.png" alt="Profile" class="profile-img">
                    </div>
                </div>

            </div>
        </div>
    </section>
</template>

<style scoped>
.about-section {
    /* min-height: 30vh; */
    /* max-width: 1100px; */

    display: flex;
    align-items: center;
    padding-top: 30px;

    background-size: cover;
    background-position: center 80%;
    background-repeat: no-repeat;


}

.text-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.role {
    font-size: 27px;
    color: var(--about-role);
    margin-bottom: 10px;
    letter-spacing: 1px;
}

.name {

    font-size: 44px;
    font-weight: 700;
    margin-bottom: 18px;

}

.name span {
    color: var(--theme-color);
}

.description {
    font-size: 16px;
    line-height: 1.7;
    color: var(--about-description);
    margin-bottom: 25px;
}

.cta-btn {
    display: inline-block;
    font-size: 14px;
    font-weight: 500;
    line-height: 3.2rem;
    color: var(--button-text);
    text-decoration: none;
    background: var(--button-bg);
    padding: 0 20px;
    border: 1px solid var(--button-border);
    border-radius: var(--about-profile-radius);

    transition: .3s;
}

.cta-btn:hover {
    background: var(--button-hover);
}

.social-media {
    display: flex;
    gap: 15px;
    align-items: center;
    margin-top: 20px;
}

.social-media img {
    width: 34px;
    height: 34px;

    filter: var(--about-social-filter);

    transition: .2s;
}

.social-media img:hover {
    transform: scale(1.1);
}

.profile-pic {
    display: flex;
    justify-content: center;
    align-items: center;

    height: 300px;
    overflow: hidden;
}

.image-wrapper {
    display: flex;
    position: relative;
    align-items: start;

    /* width: 80%; */
    max-width: 250px;
    max-height: 300px;
    border-radius: var(--about-profile-radius);
    padding: 10px;

    overflow: hidden;
}

.profile-img {
    display: block;

    width: 100%;
    height: auto;
    object-fit: cover;
    margin-top: 20px;
}

.img-border {
    position: absolute;

    inset: 0;

    width: 100%;
    height: 100%;

    pointer-events: none;
    z-index: 2;

    filter: sepia(24%) contrast(90%);

    border-radius: var(--about-profile-radius);
}

@media (max-width:768px) {

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

    .profile-pic {
        height: auto;
    }

}
</style>