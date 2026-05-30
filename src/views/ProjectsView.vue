<template>
  <div style="padding-top:6rem">
    <div class="container">
      <h1>Mes <span class="gradient-texte">Projets</span></h1>
      <p class="sous-titre">Une sélection de mes réalisations</p>

      <div v-if="chargement" class="chargement">Chargement...</div>

      <div v-else class="grille">
        <div class="carte" v-for="projet in projets" :key="projet._id">
          <img
            v-if="projet.image"
            :src="'http://localhost:5000' + projet.image"
            class="carte-image"
          />
          <div class="carte-contenu">
            <span class="emoji">{{ projet.emoji }}</span>
            <h3>{{ projet.titre }}</h3>
            <p>{{ projet.description }}</p>
            <div class="tags">
              <span class="tag" v-for="tech in projet.technologies" :key="tech">{{ tech }}</span>
            </div>
            <a :href="projet.lien" class="lien">Voir le projet →</a>
            <a :href="projet.github" class="lien">Voir sur GitHub →</a>
          </div>
        </div>
      </div>

      <div v-if="!chargement && projets.length === 0" class="vide">
        Aucun projet pour l'instant.
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

const projets = ref([])
const chargement = ref(true)

onMounted(async () => {
  try {
    const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/api/projects`)
    projets.value = data
  } catch (err) {
    console.error('Erreur:', err)
  } finally {
    chargement.value = false
  }

})
</script>

<style scoped>
h1 {
  font-size: clamp(2.5rem, 5vw, 4rem);
  letter-spacing: -1px;
  margin-bottom: 0.75rem;
}
.gradient-texte {
  background: var(--gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.sous-titre { color: var(--texte-secondaire); margin-bottom: 3rem; }
.chargement { color: var(--texte-secondaire); text-align: center; padding: 4rem; }
.vide { color: var(--texte-secondaire); text-align: center; padding: 4rem; }
.grille {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-bottom: 4rem;
}
.carte {
  background: var(--couleur-carte);
  border: 1px solid var(--couleur-bordure);
  border-radius: 16px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: 0.3s;
}
.carte:hover {
  border-color: rgba(124,58,237,0.4);
  transform: translateY(-4px);
}
.carte-image {
  width: 100%;
  height: 180px;
  object-fit: cover;
}
.carte-contenu {
  padding: 1.75rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  flex: 1;
}
.emoji { font-size: 2rem; }
.carte-contenu h3 { font-size: 1.2rem; }
.carte-contenu p { color: var(--texte-secondaire); font-size: 0.9rem; flex: 1; }
.tags { display: flex; flex-wrap: wrap; gap: 0.4rem; }
.tag {
  padding: 0.2rem 0.75rem;
  border-radius: 50px;
  font-size: 0.75rem;
  background: rgba(124,58,237,0.15);
  color: #a78bfa;
  border: 1px solid rgba(124,58,237,0.25);
}
.lien {
  color: var(--couleur-secondaire);
  font-size: 0.85rem;
  margin-top: 0.5rem;
  transition: opacity 0.2s;
}
.lien:hover { opacity: 0.7; }
@media (max-width: 768px) {
  .grille { grid-template-columns: 1fr; }
}
</style>