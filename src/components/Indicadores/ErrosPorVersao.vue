<template>
  <LineChart
    :titulo="'Erros por Versão'"    
    :categorias="porVersaoCategorias"
    :valores="porVersaoValores"
  />
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import LineChart from "../Graficos/LineChart.vue";
import ErrosService from "../../services/ErrosService";

@Component({
  components: {
    LineChart,
  },
})
export default class ErrosPorVersao extends Vue {
  porVersaoCategorias = [] as any;
  porVersaoValores = [] as any;

  mounted() {
    ErrosService.errosPorVersao()
      .then((retorno) => {
        retorno.forEach((element) => {
          this.porVersaoCategorias.push(element.versao);
          this.porVersaoValores.push(element.total);
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