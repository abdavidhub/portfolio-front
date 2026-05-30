<template>
  <div style="padding-top:6rem">
    <div class="container">
      <h1>Qui suis-<span class="gradient-texte">je ?</span></h1>

      <div class="intro">
          <img src="../assets/photo.jpg" alt="David" class="avatar" />        
          <div class="texte">
          <h2>Bonjour, je suis David 👋</h2>
          <p>Je construis des sites web, des applications modernes et performantes. Passionné par les nouvelles technologies, j'aime transformer des idées en produits concrets.</p>
          <p>Actuellement en formation en techniques de l'informatique, je travaille sur des projets full stack. je cherche toujours à apprendre les nouvelles technologies et à améliorer mes compétences. 
          Mon objectif est de créer des expériences web intuitives, esthétiques et accessibles à tous, tout en contribuant à des projets innovants et passionnants.</p>
      </div>
        <div class="cv-boutons">
           <a href="/CV.pdf" target="_blank" class="btn-cv">
                    👁 Voir mon CV</a>
          <a href="/CV.pdf" download class="btn-cv btn-cv-contour">
                 ↓ Télécharger mon CV</a>
        </div>
      </div>

      <h2 class="titre-section">Mes <span class="gradient-texte">compétences</span></h2>
      <div class="competences">
        <div class="groupe" v-for="groupe in competences" :key="groupe.titre">
          <h3>{{ groupe.icon }} {{ groupe.titre }}</h3>
          <div class="skill" v-for="skill in groupe.skills" :key="skill.nom">
            <div class="skill-header">
              <span>{{ skill.nom }}</span>
              <span>{{ skill.niveau }}%</span>
            </div>
            <div class="barre">
              <div class="remplissage" :style="{ width: skill.niveau + '%' }"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const competences = [
  {
    titre: 'Frontend', icon: '🎨',
    skills: [
      { nom: 'HTML / CSS', niveau: 90 },
      { nom: 'JavaScript', niveau: 75 },
      { nom: 'Vue.js', niveau: 70 },
      { nom: 'React', niveau: 55 },
    ]
  },
  {
    titre: 'Backend', icon: '⚙️',
    skills: [
      { nom: 'Node.js', niveau: 70 },
      { nom: 'Express.js', niveau: 70 },
      { nom: 'MongoDB', niveau: 75 },
      { nom: 'PHP', niveau: 70 },
      { nom: 'Python', niveau: 70 },
    ]
  },
  {
    titre: 'Bases de données', icon: '🗄️',
    skills: [
      { nom: 'SQL', niveau: 75 },
      { nom: 'NoSQL', niveau: 75 },
      { nom: 'MongoDB', niveau: 75 },
      { nom: 'PhpMyAdmin', niveau: 75 },
    ]
  },
  {
    titre: 'Outils & Autres', icon: '🛠️',
    skills: [
      { nom: 'Git', niveau: 70 },
      { nom: 'Visual Studio Code', niveau: 80 },
      { nom: 'GitHub', niveau: 70 },
      { nom: 'CI/CD', niveau: 60 },
      { nom: 'AWS', niveau: 60 },
      { nom: 'Android Studio', niveau: 60 },
    ]
  }

]
</script>

<style scoped>
h1 {
  font-size: clamp(2.5rem, 5vw, 4rem);
  letter-spacing: -1px;
  margin-bottom: 3rem;
}
.gradient-texte {
  background: var(--gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.intro {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 2.5rem;
  align-items: start;
  margin-bottom: 4rem;
}
.avatar {
  width: 280px; height: 320px;
  border-radius: 20px;
  object-fit: cover;
  object-position: center top;
  border: 3px solid rgba(124,58,237,0.4);
}
.texte h2 { font-size: 1.6rem; margin-bottom: 1rem; }
.texte p { color: var(--texte-secondaire); line-height: 1.7; margin-bottom: 0.75rem; }
.titre-section { font-size: 2rem; margin-bottom: 2rem; }

.competences {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;
  margin-bottom: 4rem;
}
.groupe {
  background: var(--couleur-carte);
  border: 1px solid var(--couleur-bordure);
  border-radius: 16px;
  padding: 1.5rem;
}
.groupe h3 { margin-bottom: 1.25rem; font-size: 1rem; }
.skill { margin-bottom: 1rem; }
.skill-header {
  display: flex;
  justify-content: space-between;
  font-size: 0.85rem;
  color: var(--texte-secondaire);
  margin-bottom: 0.4rem;
}
.barre {
  height: 6px;
  background: rgba(255,255,255,0.06);
  border-radius: 3px;
  overflow: hidden;
}
.remplissage {
  height: 100%;
  background: var(--gradient);
  border-radius: 3px;
}

.btn-cv {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.75rem;
  border-radius: 50px;
  background: var(--gradient);
  color: white;
  font-weight: 700;
  margin-top: 0.5rem;
  transition: 0.2s;
  width: fit-content;
}
.btn-cv:hover {
  opacity: 0.85;
  transform: translateY(-2px);
}

.cv-boutons {
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
}
.btn-cv-contour {
  background: transparent;
  border: 1.5px solid rgba(124,58,237,0.4);
  color: var(--texte-principal);
}
.btn-cv-contour:hover {
  border-color: var(--couleur-primaire);
}

@media (max-width: 768px) {
  .intro {
    grid-template-columns: 1fr;
    justify-items: center;
    text-align: center;
  }
  .competences { grid-template-columns: 1fr; }
}
</style>