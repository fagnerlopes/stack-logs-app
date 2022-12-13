<template>
  <div class="text-center pt-2 d-flex">
    <v-col cols="10">
      <v-pagination
        v-model="selectedPage"
        :length="getTotalPaginas()"
        prev-icon="mdi-menu-left"
        next-icon="mdi-menu-right"
        :total-visible="7"
      ></v-pagination>
    </v-col>
    <v-col cols="2">
      <v-select
        class="cols-1"
        v-model="itemsPerPage"
        :items="pagesCombobox"
        dense
        label="Itens/página"
      ></v-select>
    </v-col>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Prop, Watch } from "vue-property-decorator";

@Component({
  props: {
    totalItensServer: {
      type: Number,
      default: 0,
    },
  },
})
export default class PaginatorComponent extends Vue {
  pagesCombobox = [5, 10, 25, 50, 100];
  itemsPerPage = 10;
  selectedPage = 1;

  getTotalPaginas(): number {
    const sobra = this.$props.totalItensServer % this.itemsPerPage;
    return (
      Math.trunc(this.$props.totalItensServer / this.itemsPerPage) +
      (sobra > 0 ? 1 : 0)
    );
  }

  resetPaginator() {
    this.emitPageChanged = false;
    this.selectedPage = 1;
    this.emitPageChanged = true;
  }

  setPage(page: number) {
    this.emitPageChanged = false;
    this.selectedPage = page;
    this.emitPageChanged = true;
  }

  setItensPorPagina(value: number) {
    this.emitPageChanged = false;
    this.itemsPerPage = value;
    this.emitPageChanged = true;
  }

  getItensPorPagina(): number {
    return +this.itemsPerPage;
  }

  emitPageChanged = true;
  @Watch("itemsPerPage")
  onItemsPerPageChanged(value: number, oldValue: number) {
    if (this.emitPageChanged) {
      this.$emit("onItemsPerPageChanged", value);
      this.selectedPage = 1;
    }
  }

  @Watch("selectedPage")
  onPageChanged(value: boolean, oldValue: boolean) {
    if (this.emitPageChanged) this.$emit("onPageChanged", this.selectedPage);
    this.emitPageChanged = true;
  }
}
</script>

<style>
</style>