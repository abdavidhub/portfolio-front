<template>
  <div style="padding-top:6rem">
    <div class="container">
      <h1>Admin — <span class="gradient-texte">Ajouter un projet</span></h1>

      <div class="formulaire">
        <div class="champ">
          <label>Titre</label>
          <input v-model="form.titre" type="text" placeholder="Ex: MégaBoutique" />
        </div>

        <div class="champ">
          <label>Description</label>
          <textarea v-model="form.description" rows="3" placeholder="Description du projet..."></textarea>
        </div>

        <div class="champ">
          <label>Technologies (séparées par des virgules)</label>
          <input v-model="form.technologies" type="text" placeholder="Ex: Node.js, Express, MongoDB" />
        </div>

        <div class="champ">
          <label>Lien du projet</label>
          <input v-model="form.lien" type="text" placeholder="https://mon-projet.com/" />
        </div>

        <div class="champ">
          <label>Lien GitHub</label>
          <input v-model="form.github" type="text" placeholder="https://github.com/..." />
        </div>

        <div class="champ">
          <label>Image du projet</label>
          <input type="file" accept="image/*" @change="onImage" />
          <img v-if="apercu" :src="apercu" class="apercu" />
        </div>

        <div class="succes" v-if="succes">✅ Projet ajouté avec succès !</div>
        <div class="erreur" v-if="erreur">❌ Une erreur s'est produite.</div>

        <button class="btn-ajouter" @click="ajouterProjet">Ajouter le projet →</button>
      </div>

      <h2 style="margin-top:3rem; margin-bottom:4rem">Projets existants</h2>
      <div class="liste">
        <div class="item" v-for="projet in projets" :key="projet._id">
          <div class="item-info">
            <img v-if="projet.image" :src="'http://localhost:5000' + projet.image" class="mini-image" />
            <span>{{ projet.emoji }} {{ projet.titre }}</span>
          </div>
          <button class="btn-supprimer" @click="supprimerProjet(projet._id)">Supprimer</button>
        </div>
        <p v-if="projets.length === 0" style="color:var(--texte-secondaire)">Aucun projet.</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue'
import axios from 'axios'

const projets = ref([])
const succes = ref(false)
const erreur = ref(false)
const apercu = ref(null)
const fichierImage = ref(null)

const form = reactive({
  titre: '',
  description: '',
  technologies: '',
  github: '',
  lien: '',
})

function onImage(e) {
  const file = e.target.files[0]
  if (!file) return
  fichierImage.value = file
  apercu.value = URL.createObjectURL(file)
}

async function chargerProjets() {
  const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/api/projects`)
  projets.value = data
}

async function ajouterProjet() {
  if (!form.titre || !form.description) return
  try {
    const formData = new FormData()
    formData.append('titre', form.titre)
    formData.append('description', form.description)
    formData.append('technologies', form.technologies)
    formData.append('lien', form.lien)
    formData.append('github', form.github)
    if (fichierImage.value) {
      formData.append('image', fichierImage.value)
    }

    await axios.post(`${import.meta.env.VITE_API_URL}/api/projects`, formData, {
      headers: { 'Content-Type': 'multipart/form-data' }
    })

    succes.value = true
    erreur.value = false
    Object.assign(form, { titre: '', description: '', technologies: '', lien: '', github: '' })
    apercu.value = null
    fichierImage.value = null
    await chargerProjets()
    setTimeout(() => succes.value = false, 3000)
  } catch {
    erreur.value = true
  }
}

async function supprimerProjet(id) {
  await axios.delete(`${import.meta.env.VITE_API_URL}/api/projects/${id}`)
  await chargerProjets()
}

onMounted(chargerProjets)
</script>

<style scoped>
h1 {
  font-size: clamp(2rem, 4vw, 3rem);
  letter-spacing: -1px;
  margin-bottom: 2rem;
}
.gradient-texte {
  background: var(--gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.formulaire {
  background: var(--couleur-carte);
  border: 1px solid var(--couleur-bordure);
  border-radius: 16px;
  padding: 2rem;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}
.champ { display: flex; flex-direction: column; gap: 0.4rem; }
label { font-size: 0.85rem; color: var(--texte-secondaire); }
input, textarea {
  background: rgba(255,255,255,0.04);
  border: 1.5px solid var(--couleur-bordure);
  border-radius: 8px;
  padding: 0.75rem 1rem;
  color: var(--texte-principal);
  font-family: 'DM Sans', sans-serif;
  font-size: 0.95rem;
  resize: vertical;
}
input[type="file"] {
  padding: 0.5rem;
  cursor: pointer;
}
input:focus, textarea:focus {
  outline: none;
  border-color: var(--couleur-primaire);
}
.apercu {
  width: 100%;
  max-height: 200px;
  object-fit: cover;
  border-radius: 8px;
  margin-top: 0.5rem;
}
.succes {
  padding: 0.85rem 1rem;
  border-radius: 8px;
  background: rgba(16,185,129,0.1);
  border: 1px solid rgba(16,185,129,0.3);
  color: #6ee7b7;
}
.erreur {
  padding: 0.85rem 1rem;
  border-radius: 8px;
  background: rgba(239,68,68,0.1);
  border: 1px solid rgba(239,68,68,0.3);
  color: #fca5a5;
}
.btn-ajouter {
  padding: 0.9rem;
  border-radius: 50px;
  background: var(--gradient);
  color: white;
  font-family: 'Syne', sans-serif;
  font-weight: 700;
  font-size: 1rem;
  border: none;
  cursor: pointer;
  transition: 0.2s;
}
.btn-ajouter:hover { opacity: 0.85; transform: translateY(-2px); }
.liste {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  max-width: 600px;
}
.item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: var(--couleur-carte);
  border: 1px solid var(--couleur-bordure);
  border-radius: 8px;
  padding: 1rem 1.25rem;
}
.item-info {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}
.mini-image {
  width: 40px; height: 40px;
  object-fit: cover;
  border-radius: 6px;
}
.btn-supprimer {
  background: rgba(239,68,68,0.1);
  border: 1px solid rgba(239,68,68,0.3);
  color: #fca5a5;
  padding: 0.4rem 0.85rem;
  border-radius: 6px;
  cursor: pointer;
  font-size: 0.85rem;
  transition: 0.2s;
}
.btn-supprimer:hover { background: rgba(239,68,68,0.2); }

@media (max-width: 768px) {
  .formulaire { padding: 1.25rem; }
  .item { flex-direction: column; align-items: flex-start; gap: 0.75rem; }
}
</style>