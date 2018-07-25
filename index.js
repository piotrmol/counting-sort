const array = [
  { prop1: 1, prop2: 1 },
  { prop1: 8, prop2: 2 },
  { prop1: 12, prop2: 2 },
  { prop1: 9, prop2: 1 },
  { prop1: 8, prop2: 5 },
  { prop1: 8, prop2: 1 },
  { prop1: 2, prop2: 8 },
  { prop1: 8, prop2: 1 },
  { prop1: 2, prop2: 1 }
];

console.log('Array before sort: ', array);

// Objects must have the same properties
function sort(array, property1, property2) {
  const values = [];

  array.forEach(e => values.push(e[property1]));
  let min = Math.min(...values);
  let max = Math.max(...values);

  let afterSort = contingSort(array, min, max, property1);
  console.log('Array after fist sort:', afterSort);
  const valuesAfterFirst = [];
  afterSort.forEach(e => valuesAfterFirst.push(e[property1]));

  let indexes = findSameValues(valuesAfterFirst);
  let arr, middlePart, firstPart, endPart, startIndex;
  let start = indexes[0] ? indexes[0] : null;
  let end = indexes[1] ? indexes[1] : null;

  while (indexes !== -1) {
    arr = afterSort.slice(start, end);
    min = Math.min(...arr);
    max = Math.max(...arr);
    middlePart = contingSort(arr, min, max, property2);
    firstPart = afterSort.slice(0, indexes[0]);
    endPart = afterSort.slice(indexes[1]);
    afterSort = [...firstPart, ...middlePart, ...endPart];
    startIndex = indexes[1] + 1;
    indexes = findSameValues(afterSort, startIndex);
    start = indexes[0];
    end = indexes[1];
  }
  console.log('After second sort', afterSort);
}

function contingSort(array, min, max, property) {
  let i = min,
    j = 0,
    len = array.length,
    count = [];

  for (i; i <= max; i++) {
    count[i] = 0;
  }

  for (i = 0; i < len; i++) {
    count[array[i][property]] += 1;
  }

  for (i = min; i <= max; i++) {
    while (count[i] > 0) {
      array[j][property] = i;
      j++;
      count[i]--;
    }
  }
  return array;
}

function findSameValues(array, index = 1) {
  let firstValue = array[0];
  for (let i = index; i < array.length; i++) {
    if (firstValue === array[i]) {
      const startIndex = i - 1;
      let endIndex = i;
      while (firstValue === array[endIndex]) {
        endIndex++;
      }
      return [startIndex, endIndex - 1];
    }
    firstValue = array[i];
  }
  return -1;
}
sort(array, 'prop1', 'prop2');
