<template>
  <BarsChart
    :titulo="'Erros Por Form/ Versão'"
    :categorias="porFormVersaoCategorias"
    :valores="porFormVersaoValores"
  />
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import BarsChart from "../Graficos/BarsChart.vue";
import ErrosService from "../../services/ErrosService";

@Component({
  components: {
    BarsChart,
  },
})
export default class ErrosPorForm extends Vue {
  porFormVersaoCategorias = [] as any;
  porFormVersaoValores = [] as any;

  mounted() {
    ErrosService.errosPorFormVersao()
      .then((retorno) => {
        retorno.forEach((element) => {
          this.porFormVersaoCategorias.push(element.form_versao);
          this.porFormVersaoValores.push(element.total);
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
