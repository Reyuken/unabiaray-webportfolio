<script setup>
const base = import.meta.env.BASE_URL

const certificates = [
    {
        name: 'Pre-Course Certificate (HTML,CSS,JS)',
        issuer: 'Zuitt Coding Bootcamp',
        img: base + 'img/certificates/certificate-prepcourse.JPG',
        link: 'https://share.zertify.zuitt.co/certificate/c03dea19-efed-4828-b6b1-9ab1707f7766/'
    },
    {
        name: 'Full Stack Web Development (MERN/MEVN)',
        issuer: 'Zuitt Coding Bootcamp',
        img: base + 'img/certificates/certificate-fullstack.JPG',
        link: 'https://share.zertify.zuitt.co/certificate/ca21cd65-62d5-45f8-bf45-b9e24492c7d4/'
    },
    {
        name: 'Introduction to MySQL',
        issuer: 'Zuitt Coding Bootcamp',
        img: base + 'img/certificates/certificate-mysql.JPG',
        link: 'https://share.zertify.zuitt.co/certificate/bfd6d9f2-3d9e-4a7e-902b-6003db1aae42/'
    },
    {
        name: 'Introduction to C#',
        issuer: 'Zuitt Coding Bootcamp',
        img: base + 'img/certificates/certificate-csharp.JPG',
        link: 'http://share.zertify.zuitt.co/certificate/58d7f00f-cf19-4de0-bdfb-f029d8dc48df'
    },
    {
        name: 'Introduction to C# (.NET Core / ASP.NET MVC)',
        issuer: 'Zuitt Coding Bootcamp',
        img: base + 'img/certificates/certificate-aspnet.JPG',
        link: 'https://share.zertify.zuitt.co/certificate/e5a5fb8d-466e-4899-b22d-5ee563c9bfa7'
    },
    {
        name: 'Tester Essentials',
        issuer: 'Zuitt Coding Bootcamp',
        img: base + 'img/certificates/certificate-tester.JPG',
        link: 'https://share.zertify.zuitt.co/certificate/3105f32b-91b4-44be-9e57-3e9188b23bb4/'
    },
    {
        name: 'Introduction to Java for JS Developers',
        issuer: 'Zuitt Coding Bootcamp',
        img: base + 'img/certificates/certificate-java.JPG',
        link: 'https://share.zertify.zuitt.co/certificate/3e421641-f53a-4ab0-b5b1-b84634bad4d7'
    }
]
</script>

<template>
    <section class="section bg" id="certificates">
        <div class="certificate-container">

            <div class="certificate-header">
                <h1>CERTIFICATIONS</h1>

                <p>
                    Certificates and training completed as part of my
                    technical and professional development.
                </p>
            </div>

            <div class="certificate-grid">

                <div v-for="certificate in certificates" :key="certificate.link" class="certificate-card">

                    <div class="certificate-image">
                        <img :src="certificate.img" :alt="certificate.name">
                    </div>

                    <div class="certificate-info">

                        <h3>{{ certificate.name }}</h3>

                        <p class="issuer">
                            {{ certificate.issuer }}
                        </p>

                        <a :href="certificate.link" target="_blank" rel="noopener noreferrer"
                            class="certificate-button">
                            View Certificate
                        </a>

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

.certificate-container {
    max-width: 1100px;
    margin: auto;

    background: var(--panel-bg);
    border: 1px solid var(--tools-container-border);
    border-radius: var(--tools-container-radius);

    padding: 3rem;

    box-shadow: var(--tools-container-shadow);
}

.certificate-header {
    text-align: center;
    margin-bottom: 40px;
}

.certificate-header h1 {
    font-size: 28px;
    font-weight: 700;
    margin-bottom: 10px;
    color: var(--theme-color);
}

.certificate-header p {
    color: var(--tools-description);
    line-height: 1.8;
}

/* Certificate grid */

.certificate-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 25px;
}

/* Card */

.certificate-card {
    background: var(--tool-card-bg);
    border: 1px solid var(--tool-card-border);
    border-radius: var(--tool-card-radius);

    overflow: hidden;

    box-shadow: var(--tool-card-shadow);

    transition:
        transform .3s ease,
        border-color .3s ease,
        box-shadow .3s ease;
}

.certificate-card:hover {
    transform: translateY(-6px);
    border-color: var(--theme-color);
    box-shadow: var(--tool-card-hover-shadow);
}

/* Certificate preview */

.certificate-image {
    width: 100%;
    aspect-ratio: 16 / 10;

    display: flex;
    align-items: center;
    justify-content: center;

    background: var(--tool-icon-bg);

    overflow: hidden;
}

.certificate-image img {
    width: 100%;
    height: 100%;

    object-fit: contain;

    padding: 12px;

    transition: transform .3s ease;
}

.certificate-card:hover .certificate-image img {
    transform: scale(1.03);
}

/* Information */

.certificate-info {
    padding: 18px;
    text-align: center;
}

.certificate-info h3 {
    margin: 0 0 8px;

    font-size: 16px;
    line-height: 1.4;

    color: var(--tool-card-text);
}

.issuer {
    margin: 0 0 15px;

    font-size: .8rem;

    color: var(--tools-description);
}

/* Button */

.certificate-button {
    display: inline-block;

    padding: 8px 15px;

    border: 1px solid var(--theme-color);
    border-radius: 5px;

    color: var(--theme-color);
    text-decoration: none;

    font-size: .75rem;
    font-weight: 600;

    transition:
        background .3s ease,
        color .3s ease;
}

.certificate-button:hover {
    background: var(--theme-color);
    color: #fff;
}


/* Tablet */

@media (max-width: 900px) {
    .certificate-grid {
        grid-template-columns: repeat(2, 1fr);
    }
}


/* Mobile */

@media (max-width: 600px) {
    .certificate-container {
        padding: 2rem 1rem;
    }

    .certificate-grid {
        grid-template-columns: 1fr;
    }
}
</style>