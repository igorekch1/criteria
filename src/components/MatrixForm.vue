<template>
  <div id="app">
    <a-form layout="inline" :form="form" @submit="handleSubmit">
      <a-form-item label="Размерность матрицы">
        <a-select
          v-decorator="[
            'row',
            {
              initialValue: '2'
            }
          ]"
          style="width: 100px"
        >
          <a-select-option value="1">1</a-select-option>
          <a-select-option value="2">2</a-select-option>
          <a-select-option value="3">3</a-select-option>
          <a-select-option value="4">4</a-select-option>
          <a-select-option value="5">5</a-select-option>
          <a-select-option value="6">6</a-select-option>
          <a-select-option value="7">7</a-select-option>
          <a-select-option value="8">8</a-select-option>
          <a-select-option value="9">9</a-select-option>
          <a-select-option value="10">10</a-select-option>
        </a-select>
        <a-select
          v-decorator="[
            'col',
            {
              initialValue: '2'
            }
          ]"
          style="width: 100px"
        >
          <a-select-option value="1">1</a-select-option>
          <a-select-option value="2">2</a-select-option>
          <a-select-option value="3">3</a-select-option>
          <a-select-option value="4">4</a-select-option>
          <a-select-option value="5">5</a-select-option>
          <a-select-option value="6">6</a-select-option>
          <a-select-option value="7">7</a-select-option>
          <a-select-option value="8">8</a-select-option>
          <a-select-option value="9">9</a-select-option>
          <a-select-option value="10">10</a-select-option>
        </a-select>
      </a-form-item>
      <a-form-item>
        <a-button type="primary" html-type="submit">
          Далее
        </a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script>
export default {
  name: "matrixForm",
  props: {
    onMatrixFormSubmit: Function
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
          this.onMatrixFormSubmit(values);
        }
      });

      this.form.resetFields();
    }
  }
};
</script>
