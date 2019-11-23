export default function (criteria) {
  let result;

  switch (criteria) {
    case "valda":
      result = calculateByValda();
      return "test";
    case "optimism":
      result = calculateByOptimism();
      return result;
    case "pessimism":
      result = calculateByPessimism();
      return result;
    case "savage":
      result = calculateBySavage();
      return result;
    case "gurvitz":
      result = calculateByGurvitz();
      return result;
  }
}

const calculateByValda = () => {};
const calculateByOptimism = () => {};
const calculateByPessimism = () => {};
const calculateBySavage = () => {};
const calculateByGurvitz = () => {};
