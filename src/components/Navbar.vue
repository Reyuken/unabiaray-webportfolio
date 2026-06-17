<script setup>
import { ref } from "vue";

const isOpen = ref(false);

const closeMenu = () => {
  isOpen.value = false;
};
</script>


<template>
  <header class="navbar-wrapper">
    <nav class="navbar">
      <div class="container">

        <a class="brand" href="#landing">Ray.U</a>

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
  background: white;
  z-index: 1000;
  border-bottom: 1px solid #eee;
}

.navbar {
  padding: 5px 0;
}

.container {
  max-width: 1100px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
}

.brand {
  font-family: 'RushonGround', Arial, sans-serif;
  font-weight: bold;
  font-size: 45px;
  text-decoration: none;
  color: black;
}

.nav-links {
  display: flex;
  gap: 25px;
  list-style: none;
}

.nav-links a {
  text-decoration: none;
  color: #333;
  font-weight: 500;
  font-size: 16px;
}

.nav-links a:hover {
  color: #000;
}

.cv-btn {
  background: black;
  color: white;
  padding: 8px 14px;
  border-radius: 6px;
  text-decoration: none;
  font-size: 14px;
}

.toggle-btn {
  display: none;
  flex-direction: column;
  gap: 4px;
  background: none;
  border: none;
  cursor: pointer;
}

.toggle-btn span {
  width: 25px;
  height: 2px;
  background: black;
}

@media (max-width: 768px) {
  .toggle-btn {
    display: flex;
  }

  .nav-links {
    position: absolute;
    top: 65px;
    left: 0;
    right: 0;
    background: white;
    flex-direction: column;
    align-items: center;
    gap: 15px;
    padding: 20px 0;

    display: none;
  }

  .nav-links.open {
    display: flex;
  }

  .cv-btn {
    display: none;
  }
}
</style>