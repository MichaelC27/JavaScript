function checkJump(heights) {
  const left = heights.splice(0, heights.indexOf(Math.max(...heights)));
  const condicionlef = left.slice(1).every((x, i) => x >= left[i]);
  const conditionRigth = heights.slice(1).every((x, i) => x <= heights[i]);
  console.log(condicionlef, conditionRigth);
  return condicionlef && conditionRigth && !!left.length && heights.length > 1;
}

const heights = [1, 3, 8, 5, 2];
console.log(checkJump(heights));
