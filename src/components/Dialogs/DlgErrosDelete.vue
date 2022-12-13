<template>
  <v-dialog persistent v-model="dlgVisible" width="100vh">
    <v-card>
      <v-card-title class="text-h5">Deseja excluir o registro?</v-card-title>
      <v-card-text>
        <b>Todos os erros do mesmo tipo serão excluidos!</b> <br />
        <b>Form: </b> {{ erroCompleto.form }} <br />
        <b>Erro: </b> {{ erroCompleto.mensagem }} <br />
        <b>Versão: </b> {{ erroCompleto.versao }} <br />
        <b>Deseja continuar?</b>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn class="error" @click.prevent="dlgVisible = false">Não</v-btn>
        <v-btn class="success" @click.prevent="onDeletarErro">Sim</v-btn>
        <v-spacer></v-spacer>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script lang='ts'>
import Vue from "vue";
import Component from "vue-class-component";
import ErrosService from "../../services/ErrosService";

@Component({})
export default class DlgErrosDelete extends Vue {
  dlgVisible = false;
  erroCompleto = {};

  show(codigo: number) {
    this.dlgVisible = true;
    ErrosService.bucarErroId(codigo)
      .then((retorno) => {
        this.erroCompleto = retorno;
      })
      .catch((erro) => {
        alert(erro);
      });
  }

  onDeletarErro() {    
    ErrosService.deletarErro(this.erroCompleto)
      .then((retorno) => {        
        this.dlgVisible = false;
        this.$emit("erroDeletado");
      })
      .catch((erro) => {
        alert(erro);
      });
  }
}
</script>

<style>
</style>