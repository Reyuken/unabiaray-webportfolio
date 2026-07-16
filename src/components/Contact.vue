<script setup>
import { Notyf } from 'notyf'
import { ref, onMounted, onBeforeUnmount, computed } from 'vue'

const notyf = new Notyf()

const name = ref('')
const email = ref('')
const phone = ref('')
const message = ref('')
const isLoading = ref(false)

const WEB3FORMS_ACCESS_KEY = 'fac39e60-2ac3-4026-8d1f-e925223f2685'
const subject = 'New message from Portfolio Contact Form'

const isFormValid = computed(() => {
    return (
        name.value.trim() !== '' &&
        email.value.trim() !== '' &&
        phone.value.trim() !== '' &&
        message.value.trim() !== ''
    )
})

const submitForm = async () => {
    if (!isFormValid.value) {
        notyf.error('Please fill in all required fields')
        return
    }

    if (!recaptchaToken.value) {
        notyf.error('Please verify that you are not a robot')
        return
    }

    isLoading.value = true

    try {
        const response = await fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            },
            body: JSON.stringify({
                access_key: WEB3FORMS_ACCESS_KEY,
                subject,
                name: name.value,
                email: email.value,
                phone: phone.value,
                message: message.value
            })
        })

        const result = await response.json()

        if (result.success) {
            notyf.success('Message Sent!')

            name.value = ''
            email.value = ''
            phone.value = ''
            message.value = ''

            resetRecaptcha()
        } else {
            notyf.error('Failed to send message.')
        }
    } catch (error) {
        console.error(error)
        notyf.error('Failed to send message.')
    } finally {
        isLoading.value = false
    }
}

/* reCAPTCHA */
const SITE_KEY = '6LfXDSQtAAAAANZnQtD05RnxD-rA8GHLsjXV8PAL'
const recaptchaContainer = ref(null)
const recaptchaWidgetId = ref(null)
const recaptchaToken = ref('')

function onRecaptchaSuccess(token) {
    recaptchaToken.value = token
}

function onRecaptchaExpired() {
    recaptchaToken.value = ''
}

function renderRecaptcha() {
    if (!window.grecaptcha) return

    recaptchaWidgetId.value = window.grecaptcha.render(recaptchaContainer.value, {
        sitekey: SITE_KEY,
        size: 'normal',
        callback: onRecaptchaSuccess,
        'expired-callback': onRecaptchaExpired
    })
}

function resetRecaptcha() {
    if (recaptchaWidgetId.value !== null) {
        window.grecaptcha.reset(recaptchaWidgetId.value)
        recaptchaToken.value = ''
    }
}

onMounted(() => {
    const interval = setInterval(() => {
        if (window.grecaptcha && window.grecaptcha.render) {
            renderRecaptcha()
            clearInterval(interval)
        }
    }, 100)

    onBeforeUnmount(() => {
        clearInterval(interval)
    })
})
</script>

<template>
    <section id="contact" class="contact-section">
        <div class="container-fluid">

            <div class="row g-4 align-items-start">

                <div class="col-12 col-lg-6">
                    <h1 class="section-title">Find Me Here</h1>

                    <div class="map-container">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125586.39050883373!2d123.76589137386016!3d10.375850002558163!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a999258dcd2dfd%3A0x4c34030cdbd33507!2sCebu%20City%2C%20Cebu!5e0!3m2!1sen!2sph!4v1772625512167!5m2!1sen!2sph"
                            loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>

                <div class="col-12 col-lg-6">
                    <div class="contact-form-wrapper">

                        <h1 class="section-title">GET IN TOUCH</h1>

                        <p class="description">
                            I'm here and ready to bring your project ideas to life.
                            Just a click away!
                        </p>

                        <form class="contact-form" @submit.prevent="submitForm">

                            <input v-model="name" type="text" placeholder="Full Name" />

                            <div class="two-col">
                                <input v-model="email" type="email" placeholder="Email" />

                                <input v-model="phone" type="text" placeholder="Phone No."
                                    @input="phone = phone.replace(/\D/g, '')" />
                            </div>

                            <textarea v-model="message" placeholder="Message" rows="6"></textarea>

                            <button type="submit" :disabled="isLoading || !isFormValid">
                                {{ isLoading ? 'Sending...' : 'Send Message' }}
                            </button>
                            <div ref="recaptchaContainer" class="recaptcha"></div>
                        </form>

                    </div>
                </div>

            </div>

        </div>
    </section>
</template>

<style scoped>
.two-col {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 12px;
}

@media (max-width: 768px) {
    .two-col {
        grid-template-columns: 1fr;
    }
}

.contact-section {
    padding: 70px 0;
}

.container-fluid {
    max-width: 1100px;
    margin: auto;
}

.title {
    font-size: 14px;
    letter-spacing: 2px;
    color: #777;
    margin-bottom: 10px;
}

.section-title {
    font-size: 28px;
    font-weight: 700;
    margin-bottom: 15px;
    color: var(--theme-color);
}

.description {
    font-size: 16px;
    color: var(--contact-description);
    margin-bottom: 20px;
    line-height: 1.6;
}

.map-container {
    border: 1px solid var(--contact-map-border);
    border-radius: 4px;
    overflow: hidden;
    box-shadow:
        0 0 12px rgba(0, 0, 0, .35);
}

.map-container iframe {
    width: 100%;
    height: 350px;
    border: 0;
}

.contact-form-wrapper {
    display: flex;
    flex-direction: column;
    padding: 30px;
    background: var(--contact-panel-bg);
    border: 1px solid var(--contact-panel-border);
    border-radius: 4px;
}

.contact-form {
    display: flex;
    flex-direction: column;
    gap: 12px;
}

input,
textarea {
    background: var(--contact-input-bg);

    border: 1px solid var(--contact-input-border);
    border-radius: 2px;
    transition:
        border-color .25s,
        box-shadow .25s;
}

input::placeholder,
textarea::placeholder {
    color: var(--contact-input-placeholder);
}

input:focus,
textarea:focus {
    border-color: var(--theme-color);
    box-shadow:
        0 0 0 2px rgba(183, 138, 84, .18);
}

textarea {
    resize: none;
}

button{
    width:200px;
    background:var(--button-bg);
    border:1px solid var(--button-border);
    color:var(--button-text);
    border-radius:2px;
    text-transform:uppercase;
    letter-spacing:.12em;
    transition:
        background .25s,
        transform .25s,
        box-shadow .25s;
}


button:hover{
    background:var(--button-hover);
    color:var(--button-text);
    transform:translateY(-2px);
    box-shadow:
        0 0 14px rgba(183,138,84,.35);
}

button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
}

@media (max-width: 768px) {
    .contact-section {
        text-align: center;
    }

    .section-title {
        font-size: 24px;
    }
}
</style>