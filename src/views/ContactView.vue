<template>
  <div style="padding-top:6rem">
    <div class="container">
      <h1>Parlons <span class="gradient-texte">ensemble</span></h1>
      <p class="sous-titre">Un projet en tête ? Contactez-moi !</p>

      <div class="formulaire">
        <div class="ligne">
          <div class="champ">
            <label>Nom</label>
            <input v-model="form.nom" type="text" placeholder="Votre nom" />
          </div>
          <div class="champ">
            <label>Email</label>
            <input v-model="form.email" type="email" placeholder="votre@email.com" />
          </div>
        </div>

        <div class="champ">
          <label>Message</label>
          <textarea v-model="form.message" rows="5" placeholder="Votre message..."></textarea>
        </div>

        <div class="succes" v-if="envoye">✅ Message envoyé avec succès !</div>
        <div class="erreur" v-if="erreur">❌ Une erreur est survenue. Veuillez réessayer.</div>

        <button class="btn-envoyer" @click="envoyer">Envoyer →</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import axios from 'axios'

const form = reactive({ nom: '', email: '', message: '' })
const envoye = ref(false)
const erreur = ref(false)
const envoi = ref(false)

async function envoyer() {
  if (!form.nom || !form.email || !form.message) return
  envoi.value = true
  erreur.value = false
    try {
      await axios.post('/api/contact', form)
      envoye.value = true
      Object.assign(form, { nom: '', email: '', message: '' })
      setTimeout(() => envoye.value = false, 4000)
    } catch {
      erreur.value = true
    } finally {
      envoi.value = false
    }
  }
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
.formulaire {
  background: var(--couleur-carte);
  border: 1px solid var(--couleur-bordure);
  border-radius: 16px;
  padding: 2.5rem;
  max-width: 700px;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}
.ligne {
  display: grid;
  grid-template-columns: 1fr 1fr;
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
input:focus, textarea:focus {
  outline: none;
  border-color: var(--couleur-primaire);
}
.succes {
  padding: 0.85rem 1rem;
  border-radius: 8px;
  background: rgba(16,185,129,0.1);
  border: 1px solid rgba(16,185,129,0.3);
  color: #6ee7b7;
  font-size: 0.9rem;
}
.btn-envoyer {
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
.btn-envoyer:hover { opacity: 0.85; transform: translateY(-2px); }

@media (max-width: 768px) {
  .ligne { grid-template-columns: 1fr; }
  .formulaire { padding: 1.5rem; }
}
</style>