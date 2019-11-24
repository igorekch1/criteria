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
    )}) минимальный элемент min = ${minValue}.`,
    total: `Вывод: выбираем стратегию N=${bestStrategyIndex + 1}.`
  };
};
const calculateBySavage = matrix => {
  // transpose the matrix
  const transpose = matrix[0].map((col, i) => matrix.map(row => row[i]));
  const maxValues = transpose.map(row => Math.max(...row));
  const maxWins = transpose.map((row, i) => {
    return row.map(col => maxValues[i] - col);
  });
  // transposing matrix back to normal view
  const transposeBack = maxWins[0].map((col, i) => maxWins.map(row => row[i]));
  const maxValuesFromNoralMatrix = transposeBack.map(row => Math.max(...row));
  const minValue = Math.min(...maxValuesFromNoralMatrix);
  const bestStrategyIndex = transposeBack.findIndex(row => {
    return row.find(value => {
      return value === minValue;
    });
  });

  return {
    description: `Выбираем из (${maxValuesFromNoralMatrix.join(
      "; "
    )}) минимальный элемент min = ${minValue}.`,
    total: `Вывод: выбираем стратегию N=${bestStrategyIndex + 1}.`,
    resultMatrix: transposeBack
  };
};
const calculateByGurvitz = matrix => {
  const coef = 0.5;

  const minValues = matrix.map(row => Math.min(...row));
  const maxValues = matrix.map(row => Math.max(...row));

  const criterias = matrix.map((row, i) => {
    // y min(aij) + (1-y)max(aij)
    const criteria = coef * minValues[i] + (1 - coef) * maxValues[i];

    return criteria;
  });

  const maxCriteria = Math.max(...criterias);
  const bestStrategyIndex = criterias.findIndex(val => val === maxCriteria);

  return {
    description: `Выбираем из (${criterias.join(
      "; "
    )}) максимальный элемент max = ${maxCriteria}.`,
    total: `Вывод: выбираем стратегию N=${bestStrategyIndex + 1}.`
  };
};
