<template>
  <div>
    <a-row type="flex" justify="center">
      <a-form layout="inline" :form="form" @submit="handleSubmit">
        <a-form-item label="Размерность матрицы">
          <a-select
            v-decorator="[
              'row',
              {
                initialValue: '2'
              }
            ]"
            @change="resetForm"
            style="width: 100px"
          >
            <a-select-option value="1">1</a-select-option>
            <a-select-option value="2">2</a-select-option>
            <a-select-option value="3">3</a-select-option>
            <a-select-option value="4">4</a-select-option>
            <a-select-option value="5">5</a-select-option>
            <a-select-option value="6">6</a-select-option>
          </a-select>
          <a-select
            v-decorator="[
              'col',
              {
                initialValue: '2'
              }
            ]"
            @change="resetForm"
            style="width: 100px; margin-left: 10px;"
          >
            <a-select-option value="1">1</a-select-option>
            <a-select-option value="2">2</a-select-option>
            <a-select-option value="3">3</a-select-option>
            <a-select-option value="4">4</a-select-option>
            <a-select-option value="5">5</a-select-option>
            <a-select-option value="6">6</a-select-option>
          </a-select>
        </a-form-item>
        <a-form-item>
          <a-button type="primary" html-type="submit" style="width: 100px">
            Далее
          </a-button>
        </a-form-item>
      </a-form>
    </a-row>
  </div>
</template>

<script>
export default {
  name: "matrixForm",
  props: {
    onMatrixFormSubmit: Function,
    resetForm: Function
  },
  data() {
    return {
      form: this.$form.createForm(this, { name: "dimension" })
    };
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();

      this.form.validateFields((err, values) => {
        if (!err) {
          console.log("TCL: handleSubmit -> values", values);
          this.onMatrixFormSubmit(values);
        }
      });
    }
  }
};
</script>
