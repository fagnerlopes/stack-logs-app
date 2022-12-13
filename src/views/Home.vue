<template>
  <div>
    <v-row class="ml-2 mr-2 mt-2">
      <v-col cols="12" sm="4" md="4">
        <TotalErros />
      </v-col>
      <v-col cols="12" sm="4" md="4">
        <TotalErrosCorrigidos />
      </v-col>
      <v-col cols="12" sm="4" md="4">
        <TotalErrosNaoCorrigidos />
      </v-col>
    </v-row>
    <v-row class="ma-2">
      <v-col cols="12" md="3">
        <TopCincoErros />
      </v-col>
      <v-col cols="12" md="3">
        <ErrosPorVersao />
      </v-col>
      <v-col cols="12" md="3">
        <ErrosPorForm />
      </v-col>
      <v-col cols="12" md="3">
        <ErrosPorFormVersao />
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import TotalErros from "../components/Indicadores/TotalErros.vue";
import TotalErrosCorrigidos from "../components/Indicadores/TotalErrosCorrigidos.vue";
import TotalErrosNaoCorrigidos from "../components/Indicadores/TotalErrosNaoCorrigidos.vue";
import TopCincoErros from "../components/Indicadores/TopCincoErros.vue";
import ErrosPorForm from "../components/Indicadores/ErrosPorForm.vue";
import ErrosPorVersao from "../components/Indicadores/ErrosPorVersao.vue";
import ErrosPorFormVersao from "../components/Indicadores/ErrosPorFormVersao.vue";

@Component({
  components: {
    TotalErros,
    TotalErrosCorrigidos,
    TotalErrosNaoCorrigidos,
    TopCincoErros,
    ErrosPorForm,
    ErrosPorVersao,
    ErrosPorFormVersao,
  },
})
export default class Home extends Vue {}
</script>

<style>
</style>