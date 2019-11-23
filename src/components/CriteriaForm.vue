<template>
  <div>
    <a-form layout="inline" :form="form" @submit="handleSubmit">
      <a-row type="flex" justify="center">
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
            @change="result = ''"
          >
            <a-select-option value="valda">Вальда</a-select-option>
            <a-select-option value="optimism">Оптимизма</a-select-option>
            <a-select-option value="pessimism">Пессимизма</a-select-option>
            <a-select-option value="savage">Сэвиджа</a-select-option>
            <a-select-option value="gurvitz">Гурвица</a-select-option>
          </a-select>
        </a-form-item>
      </a-row>
      <a-row
        type="flex"
        justify="center"
        align="middle"
        style="margin-top: 20px"
        v-for="(row, i) in matrix"
        :key="i"
      >
        <span class="strategy-number">{{ i + 1 }})</span>
        <a-col :span="4" v-for="(col, j) in row" :key="col">
          <a-form-item>
            <a-input
              style="width: 270px"
              v-decorator="[
                `row-${i}-col-${j}`,
                {
                  rules: [
                    { required: true, message: 'Please enter the value!' }
                  ]
                }
              ]"
            />
          </a-form-item>
        </a-col>
      </a-row>
      <a-row type="flex" justify="center">
        <a-form-item>
          <a-button
            type="primary"
            html-type="submit"
            style="width: 100px; margin-top: 10px"
          >
            Далее
          </a-button>
        </a-form-item>
      </a-row>
      <a-row v-if="result" class="result">
        <div>{{ result.description }}</div>
        <div>{{ result.total }}</div>
      </a-row>
    </a-form>
  </div>
</template>

<script>
import calculate from "../utils/calculate";

export default {
  name: "criteriaForm",
  props: {
    rows: String,
    cols: String
  },
  data() {
    return {
      criteria: "valda",
      matrix: [],
      result: "",
      form: this.$form.createForm(this, { name: "coordinated" })
    };
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();

      this.form.validateFields((err, values) => {
        if (!err) {
          const { criteria, ...items } = values;
          const result = calculate(criteria, items);

          this.result = result;
        }
      });
    },
    createInputMatrix() {
      for (var i = 0; i < this.rows; i++) {
        this.matrix[i] = [];
        for (var j = 0; j < this.cols; j++) {
          this.matrix[i][j] = Math.floor(Math.random() * 1000) + 0;
        }
      }
    }
  },
  created() {
    this.createInputMatrix();
  }
};
</script>

<style scoped>
.strategy-number {
  font-size: 16px;
  margin-right: 6px;
}
.result {
  margin-top: 20px;
  text-align: center;
  font-size: 18px;
}
</style>
