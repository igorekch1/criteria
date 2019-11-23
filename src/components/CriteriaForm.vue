<template>
  <div>
    <a-form layout="inline" :form="form" @submit="handleSubmit">
      <a-form-item label="Критерий">
        <a-select
          v-decorator="[
            'criteria',
            {
              initialValue: criteria
            }
          ]"
          style="width: 200px"
          placeholder="Выберите критерий"
        >
          <a-select-option value="valda">Вальда</a-select-option>
          <a-select-option value="optimism">Оптимизма</a-select-option>
          <a-select-option value="pessimim">Пессимизма</a-select-option>
          <a-select-option value="savage">Сэвиджа</a-select-option>
          <a-select-option value="gurvitz">Гурвица</a-select-option>
        </a-select>
      </a-form-item>
      <a-form-item>{{ displayMatrix() }}</a-form-item>
      <a-form-item>
        <a-button type="primary" html-type="submit">
          Далее
        </a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script>
import createMatrix from "../utils/createMatrix";

export default {
  name: "criteriaForm",
  props: {
    row: String,
    col: String
  },
  data() {
    return {
      criteria: "valda",
      form: this.$form.createForm(this, { name: "coordinated" })
    };
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();

      this.form.validateFields((err, values) => {
        if (!err) {
          console.warn(values);
        }
      });

      this.form.resetFields();
    },
    displayMatrix() {}
  },
  created() {
    console.warn(this.row, this.col);
  }
};
</script>

<style></style>
