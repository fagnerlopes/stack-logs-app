<template>
  <div>
    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list nav dense>
        <v-list-item-group v-model="group">
          <v-list-item @click="navegarDashboard">
            <v-list-item-icon>
              <v-icon>mdi-view-dashboard-outline</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Dashboard</v-list-item-title>
          </v-list-item>
          <v-list-item @click="navegarListagemErros">
            <v-list-item-icon>
              <v-icon>mdi-text-box-search-outline</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Listagem de Erros</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar class="primary" app dense>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-app-bar-title>Gerenciador de Erros</v-app-bar-title>
      <v-spacer />
      <v-icon class="mr-2">mdi-sunglasses</v-icon>
      <v-switch
        color="white"
        flat
        hide-details="true"
        @change="alterarDarkMode"
      />
    </v-app-bar>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component({})
export default class BaseAppBar extends Vue {
  drawer = false;
  group = null;
  darkMode = false;

  alterarDarkMode() {
    this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
    this.darkMode = !this.darkMode;
  }

  navegarDashboard(){
    this.$router.push("/");
  }

  navegarListagemErros(){
    this.$router.push("/listagem-erros");
  }
}
</script>

<style>
</style>