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

        <a class="brand" href="#landing">RAY UNABIA</a>

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

  font-family: var(--navbar-wrapper-font-family);
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

.brand {
  color: var(--brand-color);
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
  color: var(--nav-links-a-color);
  text-decoration: none;
  transition: 0.2s ease;
}

.nav-links a:hover {
  color: var(--nav-links-hover);
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
  background: var(--nav-links-a-color);
  transition: 0.2s ease;
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