<template>
  <v-card height="100%">
    <v-card-title primary-title class="justify-center">
      Total de Erros
    </v-card-title>
    <v-card-actions class="justify-center">
      <v-icon color="yellow" x-large>mdi-exclamation-thick</v-icon>
    </v-card-actions>
    <v-card-text class="text-center"
      ><p style="font-size: 30px">{{ total }}</p>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import ErrosService from "../../services/ErrosService";

@Component({
  components: {},
})
export default class TotalErros extends Vue {
  total = 0;

  mounted() {
    ErrosService.totalErros().then((retorno) => {
      this.total = retorno;
    });
  }
}
</script>

<style>
</style>
