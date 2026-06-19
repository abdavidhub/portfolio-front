<template>
  <footer class="footer">
    <div class="container">

      <p class="copy">
        © 2026 – Conçu et développé par
        <a
          href="https://portfolio-front-ten-chi.vercel.app/"
          target="_blank"
          class="copy-lien"
        >
          DEV/DAVE
        </a>
      </p>

    </div>
  </footer>
</template>

<style scoped>
.footer {
  border-top: 1px solid #334155;
  padding: 2rem 0;
  margin-top: auto;
  text-align: center;
}
.copy {
  color: #94A3B8;
  font-size: 0.85rem;
}
.copy-lien {
  background: linear-gradient(135deg, #F97316, #EA580C);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 700;
  transition: opacity 0.2s;
}
.copy-lien:hover { opacity: 0.7; }

@media (max-width: 768px) {
  .footer-inner { flex-direction: column; gap: 1rem; text-align: center; }
}
</style>