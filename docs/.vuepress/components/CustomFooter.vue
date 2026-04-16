<template>
  <div class="push"></div>
  <div class="footer center">MIT Licensed | By <a href="https://punggolgp.com/doctors" target="_blank">Dr Paul Ang</a> | AD {{ year }}</div>
</template>
<script>
const d = new Date()
const currentYear = d.getFullYear()
export default {
  data() {
    return {
      year: currentYear
    }
  }
}
</script>
