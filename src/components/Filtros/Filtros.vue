<template>
  <v-expansion-panels>
    <v-expansion-panel>
      <v-expansion-panel-header class="secondary"
        >Filtros</v-expansion-panel-header
      >
      <v-expansion-panel-content>
        <v-row class="mt-2">
          <v-col cols="12" sm="6" md="6">
            <CalendarPicker
              :labelPrincipal="'Data Inicial'"
              v-on:onChange="onCommitDateIni"
            />
          </v-col>
          <v-col cols="12" sm="6" md="6">
            <CalendarPicker
              :labelPrincipal="'Data Final'"
              v-on:onChange="onCommitDateFin"
            />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" sm="6" md="6">
            <v-text-field
              clearable
              v-mask="'#####'"
              v-model="camposFiltrados.iderro"
              label="Codigo do Erro"
            />
          </v-col>
          <v-col cols="12" sm="6" md="6">
            <v-text-field
              clearable
              v-model="camposFiltrados.cliente"
              label="Nome do Cliente"
            />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" sm="6" md="6">
            <v-text-field
              clearable
              v-model="camposFiltrados.mensagem"
              label="Mensagem de Erro"
            />
          </v-col>
          <v-col cols="12" sm="6" md="6">
            <v-text-field
              clearable
              v-model="camposFiltrados.form"
              label="Nome do Formulario"
            />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" sm="6" md="6">
            <v-text-field
              clearable
              v-model="camposFiltrados.classe"
              label="Nome da Unit"
            />
          </v-col>
          <v-col cols="12" sm="6" md="6">
            <v-text-field
              clearable
              v-model="camposFiltrados.versao"
              label="Versao do Sistema"
              v-mask="'#.#.#'"
            />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="3" sm="3" xsm="12">
            <div>
              <v-btn class="success" @click.prevent="filtrar">Filtrar</v-btn>
            </div>
          </v-col>
        </v-row>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<script lang='ts'>
import Vue from "vue";
import Component from "vue-class-component";
import CalendarPicker from "../Pickers/CalendarPicker.vue";

@Component({
  components: {
    CalendarPicker,
  },
})
export default class Filtros extends Vue {
  camposFiltrados = {
    iderro: undefined,
    cliente: undefined,
    mensagem: undefined,
    form: undefined,
    classe: undefined,
    versao: undefined,
    dataini: undefined,
    datafin: undefined,
  };

  filtrar() {
    this.$emit("filtrar", this.camposFiltrados);
  }

  onCommitDateIni(value: any) {
    this.camposFiltrados.dataini = value;
  }

  onCommitDateFin(value: any) {
    this.camposFiltrados.datafin = value;
  }
}
</script>

<style>
</style>