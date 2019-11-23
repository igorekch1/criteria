<template>
  <div id="app">
    <app-matrix-form :onMatrixFormSubmit="onMatrixFormSubmit"></app-matrix-form>
    <app-criteria-form
      v-if="showCriteria"
      :row="row"
      :col="col"
    ></app-criteria-form>
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
