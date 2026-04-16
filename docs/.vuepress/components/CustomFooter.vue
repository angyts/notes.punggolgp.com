<template>
  <div class="push"></div>

  <div class="footer center">
    <div>
      MIT Licensed |
      By
      <a href="https://punggolgp.com/doctors" target="_blank">
        Dr Paul Ang
      </a>
      | AD {{ year }}
    </div>

    <div class="subtext">
      Found an error or want to improve a note?
      <a
        :href="githubIssueLink"
        target="_blank"
      >
        Suggest a change on GitHub
      </a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      year: new Date().getFullYear(),
      githubIssueLink:
        "https://github.com/angyts/notes.punggolgp.com/issues/new"
    }
  }
}
</script>

<style scoped>
.footer {
  padding: 1.5rem 1rem;
  border-top: 1px solid var(--vp-c-border);
  background: var(--vp-c-bg-soft);
  font-size: 0.9rem;
}

.footer a {
  color: var(--vp-c-brand);
  text-decoration: none;
}

.footer a:hover {
  text-decoration: underline;
}

.subtext {
  margin-top: 0.5rem;
  opacity: 0.8;
  font-size: 0.85rem;
}
</style>