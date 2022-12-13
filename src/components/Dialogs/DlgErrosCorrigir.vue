<template>
  <v-dialog persistent v-model="dlgVisible" width="100vh">
    <v-card>
      <v-card-title class="text-h5">Deseja corrigir este erro?</v-card-title>
      <v-card-text>
        <b>Todos os erros do mesmo tipo serão corrigidos!</b> <br />
        <b>Form: </b> {{ erroCompleto.form }} <br />
        <b>Erro: </b> {{ erroCompleto.mensagem }} <br />
        <b>Versão: </b> {{ erroCompleto.versao }} <br />
        <v-text-field
          v-model="versao"
          label="Versao do Sistema"
          v-mask="'#.#.#'"
        />
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn class="error" @click.prevent="dlgVisible = false"
          >Cancelar</v-btn
        >
        <v-btn class="success" @click.prevent="onCorrigirErro">Corrigir</v-btn>
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
export default class DlgErrosCorrigir extends Vue {
  dlgVisible = false;
  erroCompleto = {};
  versao = "";

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

  onCorrigirErro() {
    if (this.versao && this.versao != "") {
      let erro = {};
      erro = { ...this.erroCompleto, versaoOK: this.versao };

      ErrosService.corrigirErro(erro)
        .then((retorno) => {
          this.dlgVisible = false;
          this.$emit("erroCorrigido");
        })
        .catch((erro) => {
          alert(erro);
        });
    } else {
      alert("Informe a versão corrigida!");
    }
  }
}
</script>

<style>
</style>