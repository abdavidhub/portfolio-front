<template>
  <nav class="navbar">
    <div class="container nav-inner">
      <router-link to="/" class="logo">
        <img src="../assets/logo-dave.jpg" alt="Logo" class="logo-img" />
      </router-link>

      <ul class="nav-liens" :class="{ ouvert: menuOuvert }">
        <li><router-link to="/" @click="menuOuvert = false">Accueil</router-link></li>
        <li><router-link to="/projets" @click="menuOuvert = false">Projets</router-link></li>
        <li><router-link to="/a-propos" @click="menuOuvert = false">À propos</router-link></li>
        <li><router-link to="/contact" @click="menuOuvert = false">Contact</router-link></li>
      </ul>

      <button class="hamburger" @click="menuOuvert = !menuOuvert">
        <span v-if="!menuOuvert">☰</span>
        <span v-else>✕</span>
      </button>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'
const menuOuvert = ref(false)
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0; left: 0; right: 0;
  padding: 1.25rem 0;
  background: rgba(10,10,15,0.85);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid var(--couleur-bordure);
  z-index: 100;
}
.nav-inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.logo-img {
  height: 45px;
  width: 150px;
  object-fit: cover;
  border-radius: 20%;
  border: 2px solid rgba(124,58,237,0.4);
  transition: 0.2s;
}
.logo-img:hover {
  border-color: var(--couleur-primaire);
}
.nav-liens {
  display: flex;
  gap: 2rem;
  list-style: none;
}
.nav-liens a {
  color: var(--texte-secondaire);
  font-size: 0.9rem;
  transition: color 0.2s;
}
.nav-liens a:hover,
.nav-liens a.router-link-active {
  color: var(--texte-principal);
}
.hamburger {
  display: none;
  background: none;
  border: none;
  color: var(--texte-principal);
  font-size: 1.5rem;
  cursor: pointer;
}

@media (max-width: 768px) {
  .hamburger { display: block; }

  .nav-liens {
    display: none;
    position: absolute;
    top: 100%;
    left: 0; right: 0;
    flex-direction: column;
    gap: 0;
    background: rgba(10,10,15,0.98);
    border-top: 1px solid var(--couleur-bordure);
    padding: 1rem 0;
  }

  .nav-liens.ouvert { display: flex; }

  .nav-liens li { padding: 0.85rem 2rem; border-bottom: 1px solid var(--couleur-bordure); }
  .nav-liens a { font-size: 1rem; }
}
</style>