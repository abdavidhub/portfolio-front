<template>
  <footer class="footer">
    <div class="container">

      <p class="copy">
        © 2026 – Conçu et développé par
        <a
          href="https://tonportfolio.vercel.app/"
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
  padding: 2rem 1rem;
  border-top: 1px solid rgba(255,255,255,0.08);
  margin-top: auto;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.copy {
  text-align: center;
  color: var(--texte-secondaire);
  font-size: 0.95rem;
  line-height: 1.6;
}

.copy-lien {
  background: var(--gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 700;
  transition: opacity 0.2s ease;
}

.copy-lien:hover {
  opacity: 0.7;
}

@media (max-width: 768px) {
  .footer {
    padding: 1.5rem 1rem;
  }

  .copy {
    font-size: 0.85rem;
  }
}
</style>