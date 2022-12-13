<template>
  <v-card height="100%">
    <v-card-title>{{ titulo }}</v-card-title>
    <apexchart
      ref="donutchart"
      type="pie"
      :options="options"
      :series="series"
    ></apexchart>
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
export default class DonutChart extends Vue {
  series = this.$props.valores;
  options = {
    dataLabels: {
      enabled: false,
      formatter: function (val) {
        return val + "%";
      },
    },
    chart: {
      offsetY: -30,      
    },
    plotOptions: {
      pie: {
        customScale: 0.8,
      },
    },
    legend: {
      show: true,
      position: "bottom",
      offsetY: -15,
      itemMargin: {
        horizontal: 2,
        vertical: 1,
      },
    },
    labels: this.$props.categorias,
  };
}
</script>

<style>
</style>