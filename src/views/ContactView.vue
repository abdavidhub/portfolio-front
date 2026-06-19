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
      await axios.post(`${import.meta.env.VITE_API_URL}/api/contact`, form)
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
  background: linear-gradient(135deg, #F97316, #EA580C);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.sous-titre { 
  color: #94A3B8; 
  margin-bottom: 4rem; 
}

.formulaire {
  background: #1E293B;
  border: 1px solid #334155;
  border-radius: 16px;
  padding: 2.5rem;
  max-width: 700px;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  margin: 0 auto;
  margin-bottom: 15rem;
}

.ligne {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.25rem;
}

.champ { 
  display: flex; 
  flex-direction: 
  column; gap: 0.4rem; 
}

label { font-size: 0.85rem; color: #94A3B8; }
input, textarea {
  background: rgba(255,255,255,0.04);
  border: 1.5px solid #334155;
  border-radius: 8px;
  padding: 0.75rem 2rem;
  color: #F8FAFC;
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 0.95rem;
  resize: none;

}

input:focus, textarea:focus {
  outline: none;
  border-color: #F97316;
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

.btn-envoyer {
  padding: 0.9rem;
  border-radius: 50px;
  background: #F97316;
  color: white;
  font-family: 'IBM Plex Mono', monospace;
  font-weight: 600;
  font-size: 1rem;
  border: none;
  cursor: pointer;
  transition: 0.2s;
}

.btn-envoyer:hover { background: #EA580C; transform: translateY(-2px); }
.btn-envoyer:disabled { opacity: 0.6; cursor: not-allowed; transform: none; }
@media (max-width: 768px) {
  .ligne { grid-template-columns: 1fr; }
  .formulaire { padding: 1.5rem; }
}
</style>