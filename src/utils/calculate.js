import _ from "lodash";

export default function(criteria, items) {
  let result;
  const matrix = createMatrix(items);

  switch (criteria) {
    case "valda":
      result = calculateByValda(matrix);
      return result;
    case "optimism":
      result = calculateByOptimism(matrix);
      return result;
    case "pessimism":
      result = calculateByPessimism(matrix);
      return result;
    case "savage":
      result = calculateBySavage(matrix);
      return result;
    case "gurvitz":
      result = calculateByGurvitz(matrix);
      return result;
  }
}

const createMatrix = items => {
  let matrix = [];

  for (let item in items) {
    const groupBy = parseInt(item.split("-").slice(1, 2));
    const element = parseInt(items[item]);

    if (matrix[groupBy]) {
      matrix[groupBy].push(element);
    } else {
      matrix[groupBy] = [element];
    }
  }

  return matrix;
};
const calculateByValda = matrix => {
  const minValues = matrix.map(row => Math.min(...row));
  const maxValue = Math.max(...minValues);
  const bestStrategyIndex = matrix.findIndex(row => {
    return row.find(value => {
      return value === maxValue;
    });
  });

  return {
    description: `Выбираем из (${minValues.join(
      "; "
    )}) максимальный элемент max = ${maxValue}.`,
    total: `Вывод: выбираем стратегию N=${bestStrategyIndex + 1}.`
  };
};
const calculateByOptimism = matrix => {
  const maxValues = matrix.map(row => Math.max(...row));
  const maxValue = Math.max(...maxValues);
  const bestStrategyIndex = matrix.findIndex(row => {
    return row.find(value => {
      return value === maxValue;
    });
  });

  return {
    description: `Выбираем из (${maxValues.join(
      "; "
    )}) максимальный элемент max = ${maxValue}.`,
    total: `Вывод: выбираем стратегию N=${bestStrategyIndex + 1}.`
  };
};
const calculateByPessimism = matrix => {
  const minValues = matrix.map(row => Math.min(...row));
  const minValue = Math.min(...minValues);
  const bestStrategyIndex = matrix.findIndex(row => {
    return row.find(value => {
      return value === minValue;
    });
  });

  return {
    description: `Выбираем из (${minValues.join(
      "; "
    )}) минимальный элемент min = ${minValues}.`,
    total: `Вывод: выбираем стратегию N=${bestStrategyIndex + 1}.`
  };
};
const calculateBySavage = matrix => {};
const calculateByGurvitz = matrix => {};
