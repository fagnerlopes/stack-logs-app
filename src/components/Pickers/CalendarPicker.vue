<template>
  <v-dialog
    ref="caldialog"
    v-model="dialog"
    :return-value.sync="pickerDate"
    persistent
    width="290px"
  >
    <template v-slot:activator="{ on, attrs }">
      <v-text-field
        v-model="formattedPickerDate"
        :label="labelPrincipal"
        prepend-icon="mdi-calendar"
        readonly
        v-bind="attrs"
        v-on="on"
        clearable
        @click:clear="onFieldClear"
        dense
        hide-details
      ></v-text-field>
    </template>
    <v-date-picker 
      v-model="pickerDate" 
      scrollable 
      locale="pt-br"
    >
      <v-spacer></v-spacer>
      <v-btn text color="error" @click="dialog = false"> Cancelar </v-btn>
      <v-btn text color="success" @click="onCommitDate"> OK </v-btn>
    </v-date-picker>
  </v-dialog>
</template>

<script lang="ts">
import Component from "vue-class-component";
import Vue from "vue";
import { Watch } from "vue-property-decorator";
import { parseISO } from "date-fns";

@Component({
  props: {
    labelPrincipal: {
      type: String,
      default: "",
    }
  },
})
export default class CalendarPicker extends Vue {
  dialog = false;
  pickerDate = "";
  formattedPickerDate = "";

  @Watch("pickerDate")
  onPickerChange(value: any, oldValue: any) {
    const [year, month, day] = value.split("-");
    this.formattedPickerDate = `${day}/${month}/${year}`;
  }

  onFieldClear() {
    this.pickerDate = "";
    this.formattedPickerDate = "";
    this.$emit("onChange", this.pickerDate);
  }

  onCommitDate() {
    if (this.pickerDate && this.pickerDate != "") {      
      (this.$refs.caldialog as any).save(this.pickerDate);
      const novaData = parseISO(this.pickerDate);
      this.$emit("onChange", novaData);
    }
  }
}
</script>

<style></style>
