<template>
  <div class="hero">
    <div class="container hero-contenu">

      <span class="badge">Disponible pour des projets</span>

      <h1>
        <span class="bonjour"> Bienvenue,
        je suis <br></span>
        <span class="gradient-texte">Abdoul David</span>
      </h1>
      <p>Développeur Web Full Stack <br>// Étudiant en recherche de stage </p>
    <div class="boutons">
        <router-link to="/projets" class="btn-principal">Voir mes projets →</router-link>
        <router-link to="/contact" class="btn-contour">Me contacter</router-link>
    </div>

<div class="socials">
  <a href="https://github.com/abdavidhub" target="_blank" class="social-btn" title="GitHub">
    <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.37.6.1.82-.26.82-.58v-2.02c-3.34.72-4.04-1.6-4.04-1.6-.55-1.38-1.33-1.75-1.33-1.75-1.09-.74.08-.73.08-.73 1.2.09 1.84 1.24 1.84 1.24 1.07 1.83 2.8 1.3 3.48.99.1-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 3-.4c1.02 0 2.04.13 3 .4 2.28-1.55 3.29-1.23 3.29-1.23.66 1.65.25 2.87.12 3.17.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.69.83.57C20.57 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z"/>
    </svg>
  </a>
  <a href="https://www.linkedin.com/in/abdoul-david-diarrassouba-b65074129/" target="_blank" class="social-btn" title="LinkedIn">
    <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.37V9h3.41v1.56h.05c.48-.9 1.63-1.85 3.36-1.85 3.59 0 4.26 2.36 4.26 5.44v6.3zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45C23.2 24 24 23.23 24 22.27V1.73C24 .77 23.2 0 22.22 0z"/>
    </svg>
  </a>
</div>
    </div>
  </div>
</template>

<style scoped>
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
}

.hero-contenu {
  display: flex;
  flex-direction: column;
  gap: 1.75rem;
  padding-top: 5rem;
}

.badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.4rem 1rem;
  border-radius: 50px;
  background: rgba(249,115,22,0.1);
  border: 1px solid rgba(249,115,22,0.3);
  color: #F97316;
  font-size: 0.85rem;
  width: fit-content;
}

.dot-badge {
  width: 8px; height: 8px;
  background: #F97316;
  border-radius: 50%;
  animation: pulse 2s ease-in-out infinite;
  display: inline-block;
}

@keyframes pulse {
  0%, 100% { opacity: 1; transform: scale(1); }
  50%       { opacity: 0.5; transform: scale(0.8); }
}

.bonjour {
  display: inline-block;
  font-family: 'IBM Plex Mono', monospace;
  font-weight: 600;
  min-width: 80px;
  transition: opacity 0.3s, transform 0.3s;
}

.cache {
  opacity: 0;
  transform: translateY(-8px);
}

h1 {
  font-size: clamp(2.5rem, 8vw, 5rem);
  line-height: 1.1;
  letter-spacing: -1px;
}

.gradient-texte {
  background: linear-gradient(135deg, #F97316, #EA580C);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

p{
  font-size: 1.25rem;
}

.boutons {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.btn-principal {
  padding: 0.75rem 1.75rem;
  border-radius: 50px;
  background: #F97316;
  color: white;
  font-weight: 700;
  transition: 0.2s;
}
.btn-principal:hover { background: #EA580C; transform: translateY(-2px); }

.btn-contour {
  padding: 0.75rem 1.75rem;
  border-radius: 50px;
  border: 1.5px solid #334155;
  color: #F8FAFC;
  transition: 0.2s;
}
.btn-contour:hover { border-color: #F97316; color: #F97316; }

.socials {
  display: flex;
  gap: 0.75rem;
}

.social-btn {
  width: 44px; height: 44px;
  display: flex; align-items: center; justify-content: center;
  border-radius: 8px;
  background: #1E293B;
  border: 1px solid #334155;
  color: #94A3B8;
  transition: 0.2s;
}
.social-btn:hover {
  color: #F8FAFC;
  border-color: #F97316;
}

.deco-numero {
  position: absolute;
  right: -2rem;
  top: 50%;
  transform: translateY(-50%) rotate(90deg);
  font-family: 'IBM Plex Mono', monospace;
  font-size: 12rem;
  font-weight: 800;
  color: rgba(255,255,255,0.02);
  pointer-events: none;
  user-select: none;
}

@media (max-width: 768px) {
  h1 { letter-spacing: -0.5px; }
  .boutons { flex-direction: column; }
  .deco-numero { display: none; }
}
</style>

