<template>
  <ColumnChart
    :titulo="'Erros Por Form'"
    :categorias="porFormCategorias"
    :valores="porFormValores"
  />
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import ColumnChart from "../Graficos/ColumnChart.vue";
import ErrosService from "../../services/ErrosService";

@Component({
  components: {
    ColumnChart,
  },
})
export default class ErrosPorForm extends Vue {
  porFormCategorias = [] as any;
  porFormValores = [] as any;

  mounted() {
    ErrosService.errosPorForm()
      .then((retorno) => {
        retorno.forEach((element) => {                  
          this.porFormCategorias.push(element.form);
          this.porFormValores.push(element.total);
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