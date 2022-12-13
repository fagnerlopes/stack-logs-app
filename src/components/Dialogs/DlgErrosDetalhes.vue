<template>
  <v-dialog persistent v-model="dlgVisible" width="150vh">
    <v-card>
      <v-card-title class="primary mb-1">
        Erro: {{ erroCompleto.iderro }} - {{ erroCompleto.mensagem }}
      </v-card-title>
      <v-card-text>
        <v-row dense>
          <v-col cols="12" sm="3" md="3" lg="3">
            <CustomTextField :titulo="'Form'" :texto="erroCompleto.form" />
          </v-col>
          <v-col cols="12" sm="3" md="3" lg="3">
            <CustomTextField
              :titulo="'Cliente'"
              :texto="erroCompleto.cliente"
            />
          </v-col>
          <v-col cols="12" sm="3" md="3" lg="3">
            <CustomTextField
              :titulo="'Aplicativo'"
              :texto="erroCompleto.aplicativo"
            />
          </v-col>
          <v-col cols="12" sm="3" md="3" lg="3">
            <CustomTextField :titulo="'Classe'" :texto="erroCompleto.classe" />
          </v-col>
        </v-row>
        <v-row dense>
          <v-col cols="12" sm="3" md="3" lg="3">
            <CustomTextField
              :titulo="'Aplicativo'"
              :texto="erroCompleto.aplicativo"
            />
          </v-col>
          <v-col cols="12" sm="3" md="3" lg="3">
            <CustomTextField
              :titulo="'Usuario do Computador'"
              :texto="erroCompleto.comp_user"
            />
          </v-col>
          <v-col cols="12" sm="3" md="3" lg="3">
            <CustomTextField
              :titulo="'IP do Computador'"
              :texto="erroCompleto.comp_ip"
            />
          </v-col>
          <v-col cols="12" sm="3" md="3" lg="3">
            <CustomTextField
              :titulo="'Versao do Sistema'"
              :texto="erroCompleto.versao"
            />
          </v-col>
        </v-row>
        <v-row dense>
          <v-col cols="12" sm="3" md="3" lg="3">
            <CustomTextField
              :titulo="'Memoria do Sistema Utilizada'"
              :texto="String(erroCompleto.memoriasis)"
            />
          </v-col>
          <v-col cols="12" sm="3" md="3" lg="3">
            <CustomTextField
              :titulo="'Memória total da máquina'"
              :texto="String(erroCompleto.memoriatotal)"
            />
          </v-col>
          <v-col cols="12" sm="3" md="3" lg="3">
            <CustomTextField
              :titulo="'Email do cliente'"
              :texto="erroCompleto.emailcli"
            />
          </v-col>
          <v-col cols="12" sm="3" md="3" lg="3">
            <CustomTextField
              :titulo="'Versao do Windows'"
              :texto="erroCompleto.windows"
            />
          </v-col>
        </v-row>
        <v-row dense>
          <v-col cols="12" sm="3" md="3" lg="3">
            <CustomTextField
              :titulo="'Versao Corrigida'"
              :texto="erroCompleto.versao_ok"
            />
          </v-col>
        </v-row>
        <v-row dense>
          <v-col cols="12" sm="12" md="12" lg="12">
            <v-textarea
              outlined
              label="Log do Erro"
              readonly
              no-resize
              :value="erroCompleto.log_Jedi"
            ></v-textarea>
          </v-col>
        </v-row>
      </v-card-text>
      <v-divider></v-divider>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="secondary" text @click.prevent="dlgVisible = false">
          Fechar
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script lang='ts'>
import Vue from "vue";
import Component from "vue-class-component";
import CustomTextField from "../TextFileds/CustomTextField.vue";
import ErrosService from "../../services/ErrosService";

@Component({
  components: {
    CustomTextField,
  },
})
export default class DlgErrosDetalhes extends Vue {
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
}
</script>

<style>
</style>