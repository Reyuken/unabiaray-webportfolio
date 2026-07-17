<script setup>
import { ref } from "vue";
import ThemeSwitcher from "./ThemeSwitcher.vue";

const isOpen = ref(false);

const closeMenu = () => {
  isOpen.value = false;
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
          <li>
            <ThemeSwitcher />
          </li>
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
  align-items: center;
  justify-content: space-between;
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
  align-items: center;
  gap: 25px;

  list-style: none;
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
</style>