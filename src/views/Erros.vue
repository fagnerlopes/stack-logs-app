<template>
  <ListErros/>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import ListErros from "../components/Listagens/ListErros.vue"

@Component({
  components: {
    ListErros,
  },
})
export default class Erros extends Vue {}
</script>

<style>
</style>