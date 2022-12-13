<template>
  <v-card height="100%">
    <v-card-title> {{ titulo }} </v-card-title>
    <apexchart type="bar" :options="options" :series="series"></apexchart>
  </v-card>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import VueApexCharts from "vue-apexcharts";
import { Watch } from "vue-property-decorator";

@Component({
  components: {
    VueApexCharts,
  },
  props: {
    titulo: {
      type: String,
      default: "",
    },
    categorias: {
      type: [],
      default: null,
    },
    valores: {
      type: [],
      default: null,
    },
  },
})
export default class ColumnChart extends Vue {
  @Watch("valores")
  onRecebeuValores(value: any, oldvalue: any) {
    if (value) {
      this.series.push({ name: "Total", data: value });
    }
  }

  series = [] as any;
  options = {
    xaxis: {
      categories: this.$props.categorias,
    },
    colors: ["#66DA26", "#546E7A", "#E91E63", "#FF9800"],
    fill: {
      type: "gradient",
    },
    dataLabels: {
      enabled: false,
    },
  };
}
</script>

<style>
</style>