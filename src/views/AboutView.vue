<template>
  <div style="padding-top:6rem">
    <div class="container">
      <h1>Qui suis-<span class="gradient-texte">je ?</span></h1>

      <div class="intro">
          <img src="../assets/photo.jpg" alt="David" class="avatar" />        
          <div class="texte">
          <p>Je construis des sites web et des applications modernes, performantes et accessibles.</p>
          <p>Je termine actuellement ma formation en développement web et analyse de données au Collège CDI et 
            je développe des projets full stack concrets pour renforcer mes compétences pratiques.</p>
            <p>Passionné par les nouvelles technologies, j'aime transformer des idées en produits réels, de la base de données jusqu'à 
            l'interface utilisateur.</p>
            <p>Mon objectif : intégrer une équipe dynamique où je pourrai contribuer, apprendre et évoluer.</p>
      </div>
        <div class="cv-boutons">
           <a href="/CV_Abdoul_David.pdf" target="_blank" class="btn-cv">
                    👁 Voir mon CV</a>
          <a href="/CVAbdoul_David.pdf" download class="btn-cv btn-cv-contour">
                 ↓ Télécharger mon CV</a>
        </div>
      </div>

      <h2 class="titre-section">Mes <span class="gradient-texte">compétences</span></h2>
<div class="competences">
  <div class="groupe" v-for="groupe in competences" :key="groupe.titre">
    <h3>{{ groupe.icon }} {{ groupe.titre }}</h3>
    <div class="badges">
      <span class="badge-skill" v-for="skill in groupe.skills" :key="skill">{{ skill }}</span>
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
    skills: ['HTML / CSS', 'JavaScript', 'Vue.js', 'React']
     
  },

  {
    titre: 'Backend', icon: '⚙️',
    skills: ['Node.js', 'Express.js', 'MongoDB', 'PHP', 'Python', 'Java', 'C# / .NET', "Entity Framework", "Django"]
  },

  {
    titre: 'Bases de données', icon: '🗄️',
    skills: ['SQL Server', 'MySQL', 'MongoDB', 'PhpMyAdmin' ],
  },

  {
    titre: 'Outils & Autres', icon: '🛠️',
    skills: ['Git', 'Visual Studio Code', 'GitHub', 'CI/CD', 'AWS', 'Android Studio', 'Agile/SCRUM', 'MongoDB Compass']
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
  background: linear-gradient(135deg, #F97316, #EA580C);
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
  width: 280px;
  height: 350px;
  border-radius: 20px;
  object-fit: cover;
  object-position: center top;
  border: 3px solid #F97316;
  flex-shrink: 0;
}
.texte h2 { 
  font-size: 1.6rem;
  margin-bottom: 1rem; }

.texte p { 
  color: #94A3B8; 
  line-height: 1.7; 
  margin-bottom: 0.75rem; }

.titre-section { 
  font-size: 2rem; 
  margin-bottom: 2rem; }

.competences {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;
  margin-bottom: 4rem;
}
.groupe {
  background: #1E293B;
  border: 1px solid #334155;
  border-radius: 16px;
  padding: 1.5rem;
  margin-bottom: 1rem;
}
.groupe h3 { margin-bottom: 1.25rem; font-size: 1rem; }
.badges {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
}

.badge-skill {
  padding: 0.3rem 0.85rem;
  border-radius: 50px;
  font-size: 0.8rem;
  background: rgba(249,115,22,0.1);
  color: #F97316;
  border: 1px solid rgba(249,115,22,0.25);
  font-family: 'IBM Plex Mono', monospace;
}

.cv-boutons {
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
  margin-top: 0.75rem;
}
.btn-cv {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.75rem;
  border-radius: 50px;
  background: #F97316;
  color: white;
  font-weight: 700;
  transition: 0.2s;
  width: fit-content;
}
.btn-cv:hover {
  background: #EA580C;
  transform: translateY(-2px);
}
.btn-cv-contour {
  background: transparent;
  border: 1.5px solid #334155;
  color: #F8FAFC;
}
.btn-cv-contour:hover {
  border-color: #F97316;
  color: #F97316;
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