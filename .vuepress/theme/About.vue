<template>
  <div class="base-layout">
    <Nav />
    <v-content>
      <v-container fluid>
        <v-layout class="pa-4">
          <v-flex xs12 md10 offset-md1>
            <Content />
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </div>
</template>
<script>
import Nav from "./components/Nav"
export default {
  components: {
    Nav
  }
};
</script>
<style>
.about-img {
  max-width: 1000px;
  margin: auto;
}
img {
  width: 100%;
}
</style>
