<template>
  <v-card height="100%">
    <v-card-title> {{ titulo }} </v-card-title>
    <apexchart type="line" :options="options" :series="series"></apexchart>
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
export default class LineChart extends Vue {
  @Watch("valores")
  onRecebeuValores(value: any, oldvalue: any) {
    if (value) {
      this.series.push({ name: "Total", data: value });
    }
  }

  options = {
    xaxis: {
      type: "category",
      tickPlacement: 'between',
      categories: this.$props.categorias,
    },
    fill: {
      type: "gradient",
    },
    stroke: {
      curve: "smooth",
    },
    colors: ["#E91E63"],
  };

  series = [] as any;
}
</script>

<style>
</style>