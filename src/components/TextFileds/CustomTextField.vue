<template>
  <v-text-field
    class="mt-2"
    :value="texto"
    :label="titulo"
    readonly
    outlined
    dense
  ></v-text-field>
</template>

<script lang='ts'>
import Vue from "vue";
import Component from "vue-class-component";

@Component({
  props: {
    titulo: String,
    texto: String
  },
})
export default class CustomTextField extends Vue {}
</script>

<style>
</style>