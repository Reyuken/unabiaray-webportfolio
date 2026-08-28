<script setup>
import { ref } from "vue";
import ThemeSwitcher from "./ThemeSwitcher.vue";

const isOpen = ref(false);
const showThemeNotice = ref(true);

const closeMenu = () => {
  isOpen.value = false;
};

const closeThemeNotice = () => {
  showThemeNotice.value = false;
};
</script>


<template>
  <header class="navbar-wrapper">
    <nav class="navbar">
      <div class="container">
        <div class="brand-wrapper">
          <div class="status-light"></div>
          <a class="brand" href="#landing">RAY UNABIA</a>
        </div>
        <div class="theme-wrapper">
          <ThemeSwitcher/>

          <div v-if="showThemeNotice" class="theme-notice">
            <button class="notice-close" @click="closeThemeNotice">
              ×
            </button>

            <div class="notice-arrow"></div>

            <p>Choose your theme</p>
          </div>
        </div>
        <button class="toggle-btn" @click="isOpen = !isOpen">
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul class="nav-links" :class="{ open: isOpen }">
          <li><a href="#landing" @click="closeMenu">Home</a></li>
          <li><a href="#projects" @click="closeMenu">Projects</a></li>
          <li><a href="#tools" @click="closeMenu">Tools</a></li>
          <li><a href="#contact" @click="closeMenu">Contact</a></li>
        </ul>

        <!-- <a class="cv-btn" href="/cv.pdf" download>
          Download CV
        </a> -->

      </div>
    </nav>
  </header>
</template>

<style scoped>
.navbar-wrapper {
  position: sticky;
  top: 0;
  z-index: 1000;

  background: var(--navbar-bg);
  border-bottom: 1px solid var(--navbar-border);

  font-size: 16px;
  font-weight: 500;
}

.navbar {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 20px;
}

.container {
  display: flex;
  min-height: 72px;
}

.brand-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
}

.brand {
  color: var(--theme-color);
  text-decoration: none;
  transition: 0.2s ease;
}

.brand:hover {
  opacity: 0.8;
}


.nav-links {
  display: flex;
  /* align-items: center; */
  gap: 25px;
  /* list-style: none; */
  margin: 0;
  padding: 0;
}

.nav-links a {
  color: var(--color);
  text-decoration: none;
  transition: 0.2s ease;
}

.nav-links a:hover {
  color: var(--theme-color);
}

.toggle-btn {
  display: none;
  flex-direction: column;
  justify-content: center;
  gap: 5px;

  background: none;
  border: none;
  cursor: pointer;
}

.toggle-btn span {
  width: 24px;
  height: 2px;
  background: var(--theme-color-2);
  transition: 0.2s ease;
}

.status-light {
  width: var(--status-light-size);
  height: var(--status-light-size);

  border-radius: var(--status-light-radius);

  background: var(--status-light-bg);
  border: var(--status-light-border);

  box-shadow: var(--status-light-shadow);

  animation: var(--status-light-animation);
}

@media (max-width: 768px) {
  .toggle-btn {
    display: flex;
  }

  .nav-links {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;

    display: none;
    flex-direction: column;
    align-items: center;
    gap: 18px;

    padding: 24px 0;

    background: var(--navbar-bg);
    border-bottom: 1px solid var(--navbar-border);
  }

  .nav-links.open {
    display: flex;
  }
}

.theme-wrapper {
  position: relative;
}

.theme-notice {
  position: absolute;
  top: calc(100% + 15px);
  right: 1;

  background: rgba(207, 202, 125, 0.95);
  color: #000000;

  padding: 0.75rem 2.5rem 0.75rem 1rem;
  border-radius: 10px;

  white-space: nowrap;

  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.25);

  z-index: 1001;

  animation: notice-float 0.3s ease-out;
}

.theme-notice p {
  margin: 0;
  font-size: 0.85rem;
  font-weight: 600;
}

.notice-close {
  position: absolute;
  top: 4px;
  right: 7px;

  border: none;
  background: none;

  color: #000000;
  font-size: 1.2rem;

  cursor: pointer;
  line-height: 1;
}

.notice-close:hover {
  color: #fff;
}

.notice-arrow {
  position: absolute;
  top: -6px;
  right: 20px;

  width: 12px;
  height: 12px;

  background: rgba(207, 202, 125, 0.95);

  transform: rotate(45deg);
}

@keyframes notice-float {
  from {
    opacity: 0;
    transform: translateY(-5px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>