<template>
  <div>
    <DlgErrosDetalhes
      ref="dlgErrosDetalhes"                  
    />
    <DlgErrosDelete
      ref="dlgErrosDelete"      
      v-on:erroDeletado="getErros"
    />
    <DlgErrosCorrigir
      ref="dlgErrosCorrigir"
      v-on:erroCorrigido="getErros"
    />
    <Filtros v-on:filtrar="onFiltrar" />
    <v-data-table
      :headers="colunasErros"
      :items="listaErros"
      class="elevation-1"
      hide-default-footer
      :items-per-page=-1
      :loading="carregandoDados"
      loading-text="Carregando..."
      @click:row="exibirDlgDetalhes"      
    >    
      <template v-slot:[`item.data`]="{ item }">
        {{ formatData(item.data) }}
      </template>
      <template v-slot:[`item.status`]="{ item }">
        <v-icon
          :color="item.corrigido == 'S' ? 'success' : 'error'"          
        >
          mdi-alarm-light
        </v-icon>
      </template>
      <template v-slot:[`item.actions`]="{ item }">
        <v-icon
          color="orange"
          class="mx-2"
          @click.stop="exibirDlgDetalhes(item)"
        >
          mdi-text-box-search
        </v-icon>
        <v-icon color="green" class="mx-2" @click.stop="exibirDlgCorrigir(item)">
          mdi-check-bold
        </v-icon>
        <v-icon color="red" class="mx-2" @click.stop="exibirDlgDelete(item)">
          mdi-delete
        </v-icon>
      </template>
    </v-data-table>
    <PaginatorComponent
      :totalItensServer="totalRegistros"
      v-on:onPageChanged="onPageChanged"
      v-on:onItemsPerPageChanged="onItemsPerPageChanged"
    />
  </div>
</template>

<script lang='ts'>
import Vue from "vue";
import Component from "vue-class-component";
import ErrosService from "../../services/ErrosService";
import Filtros from "../Filtros/Filtros.vue";
import DlgErrosDetalhes from "../Dialogs/DlgErrosDetalhes.vue";
import DlgErrosDelete from "../Dialogs/DlgErrosDelete.vue";
import DlgErrosCorrigir from "../Dialogs/DlgErrosCorrigir.vue";
import PaginatorComponent from "../Paginator/PaginatorComponent.vue";
import { dateToShortHumanReadable } from "../utils";

@Component({
  components: {
    Filtros,
    DlgErrosDetalhes,
    DlgErrosDelete,
    DlgErrosCorrigir,
    PaginatorComponent,
  },
})
export default class ListErros extends Vue {
  listaErros: Array<any> = []; 
  
  totalRegistros = 0;
  pagina = 1;
  itensPorPagina = 10;

  filtros = {};
  carregandoDados = false;

  colunasErros = [
    { text: "", value: "status", sortable: false },
    { text: "ID", value: "iderro" },
    { text: "Data", value: "data" },
    { text: "Cliente", value: "cliente" },
    { text: "Erro", value: "mensagem" },
    { text: "Form", value: "form" },
    { text: "Versão", value: "versao" },
    { text: "", value: "actions", sortable: false },
  ];

  mounted() {
    this.getErros();
  }

  getErros() {    
    this.carregandoDados = true;
    ErrosService.buscarErros(this.filtros, this.pagina, this.itensPorPagina)
      .then((retorno) => {
        this.listaErros = retorno.listaErros;
        this.totalRegistros = retorno.totalRegistros;
        this.carregandoDados = false;
      })
      .catch((erro) => {
        alert(erro);
      });
  }

  exibirDlgDetalhes(erro: any) {    
    const dlgDetalhe = this.$refs.dlgErrosDetalhes as DlgErrosDetalhes;
    dlgDetalhe.show(erro.iderro);           
  }

  exibirDlgDelete(erro: any) {
    const dlgDelete = this.$refs.dlgErrosDelete as DlgErrosDelete;
    dlgDelete.show(erro.iderro);           
  }  

  exibirDlgCorrigir(erro: any) {
    const dlgCorrigir = this.$refs.dlgErrosCorrigir as DlgErrosCorrigir;
    dlgCorrigir.show(erro.iderro);           
  }  

  onFiltrar(filtros: any) {    
    this.filtros = filtros;
    this.getErros();
  }

  formatData(valor: any) {
    return dateToShortHumanReadable(valor);
  }

  onPageChanged(selPage: number) {
    this.pagina = selPage;
    this.getErros();
  }

  onItemsPerPageChanged(ipp: number) {
    this.itensPorPagina = ipp;
    this.getErros();
  }
}
</script>
  

<style>
</style>