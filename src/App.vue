<template>
  <div id="app">
    <a-row>
      <a-col :span="24">
        <app-matrix-form
          :onMatrixFormSubmit="onMatrixFormSubmit"
          :resetForm="() => (this.showCriteria = false)"
        ></app-matrix-form>
      </a-col>
    </a-row>
    <a-row v-if="showCriteria" style="margin-top: 20px">
      <a-col :span="24">
        <app-criteria-form :rows="row" :cols="col"></app-criteria-form>
      </a-col>
    </a-row>
  </div>
</template>

<script>
import MatrixForm from "./components/MatrixForm";
import CriteriaForm from "./components/CriteriaForm";

export default {
  name: "app",
  components: {
    "app-matrix-form": MatrixForm,
    "app-criteria-form": CriteriaForm
  },
  data() {
    return {
      row: "",
      col: "",
      showCriteria: false
    };
  },
  methods: {
    onMatrixFormSubmit(values) {
      const { row, col } = values;

      this.showCriteria = true;
      this.row = row;
      this.col = col;
    }
  }
};
</script>

<style></style>
