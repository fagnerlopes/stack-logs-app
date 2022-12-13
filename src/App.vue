<template>
  <v-app>
    <BaseAppBar></BaseAppBar>
    <v-main>
      <router-view />
    </v-main>
    <v-footer>
      <v-col class="text-center">
        Stack Trace - WMC {{ new Date().getFullYear() }}
      </v-col>
    </v-footer>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import BaseAppBar from "./components/Bars/BaseAppBar.vue";

@Component({
  name: "App",
  components: {
    BaseAppBar,
  },
})
export default class App extends Vue {}
</script>
