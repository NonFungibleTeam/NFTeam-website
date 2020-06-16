
<template>
  <v-app dark>
    <Home v-if="isHome" />
    <About v-else-if="isAbout" />
    <Contact v-else-if="isContact" />
    <Base v-else />
    <Footer />
  </v-app>
</template>
<script>
  import Home from './Home';
  import About from './About';
  import Contact from './Contact';
  import Base from './Base';
  import Footer from "./components/Footer"
  export default {
      components: {
        Home,
        About,
        Contact,
        Base,
        Footer
      },
      computed: {
        isHome() {
          const {path} = this.$page;
          return path === "/";
        },
        isAbout() {
          const {path} = this.$page;
          return path === "/about.html";
        },
        isContact() {
          const {path} = this.$page;
          return path === "/contact.html";
        },
      }
  };
</script>
<style>
  .container {
    padding: 0;
  }
  body {
    font-size: 1.2em;
  }
  body * {
    font-family: 'Cardo', sans-serif !important;
  }
  * i {
    font-family: 'Material Icons' !important;
  }
  .v-btn + .primary {
    color: #000!important;
  }
</style>
