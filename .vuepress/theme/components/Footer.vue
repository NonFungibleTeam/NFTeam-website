<template>
  <v-footer app absolute dark>
    <span>&copy; NonFungibleTeam {{ copyrightYear }}</span>
  </v-footer>
</template>
<script>
export default {
  computed: {
    copyrightYear() {
      return new Date().getFullYear();
    }
  }
};
</script>
<style>
footer span {
  margin: 0 auto;
}
</style>
