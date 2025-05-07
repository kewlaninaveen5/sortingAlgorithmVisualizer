export function initMergeSort(arrayLength) {
  const tasks = [];
  let size = 1;

  while (size < arrayLength) {
    for (let left = 0; left < arrayLength - size; left += 2 * size) {
      const mid = left + size - 1;
      // console.log(mid)
      const right = Math.min(left + 2 * size - 1, arrayLength - 1);
      tasks.push({ left, mid, right });
    }
    size *= 2;
  }
  console.log("tasks: ", tasks)
  return tasks;
}

export function executeMergeStep(inputArray, task, setInputArray, setSwapCounter, barRef) {
  console.log("task: ", task)
  const { left, mid, right } = task;
  const leftPart = inputArray.slice(left, mid + 1);
  console.log(leftPart)
  const rightPart = inputArray.slice(mid + 1, right + 1);

  let merged = [], i = 0, j = 0, k = left, swaps = 0;

  while (i < leftPart.length && j < rightPart.length) {
    if (barRef[k]) {
      barRef[k].style.backgroundColor = "pink";
    }

    if (leftPart[i] <= rightPart[j]) {
      merged.push(leftPart[i++]);
    } else {
      merged.push(rightPart[j++]);
      swaps++;
    }
    k++;
  }

  while (i < leftPart.length) merged.push(leftPart[i++]);
  while (j < rightPart.length) merged.push(rightPart[j++]);

  const newArray = [...inputArray];
  for (let idx = 0; idx < merged.length; idx++) {
    newArray[left + idx] = merged[idx];
    if (barRef[left + idx]) {
      barRef[left + idx].style.backgroundColor = "red";
    }
  }

  setSwapCounter((prev) => prev + swaps);
  setInputArray(newArray);
}
