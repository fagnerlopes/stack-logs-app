<template>
  <DonutChart
    :titulo="'Top 5 Erros'"
    :categorias="topCincoCategorias"
    :valores="topCincoValores"
  />
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import DonutChart from "../Graficos/DonutChart.vue";
import ErrosService from "../../services/ErrosService";

@Component({
  components: {
    DonutChart,
  },
})
export default class TopCincoErros extends Vue {
  topCincoCategorias = [] as any;
  topCincoValores = [] as any;

  mounted() {
    ErrosService.top5Erros()
      .then((retorno) => {
        retorno.forEach((element) => {
          this.topCincoCategorias.push(element.mensagem);
          this.topCincoValores.push(element.contador);
        });
      })
      .catch((erro) => {
        alert(erro);
      });
  }
}
</script>

<style>
</style>