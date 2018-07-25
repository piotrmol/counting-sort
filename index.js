const array = [
  { prop1: 1, prop2: 1 },
  { prop1: 8, prop2: 2 },
  { prop1: 12, prop2: 2 },
  { prop1: 9, prop2: 1 },
  { prop1: 8, prop2: 5 },
  { prop1: 8, prop2: 1 }
];

//console.log('Array before sort: ', array);

// Objects must have the same properties
function sort(array, ...keys) {
  const keysLength = keys.length;
  const values = [];

  array.forEach(e => values.push(e[keys[0]]));
  console.log(contingSort(values));
}

function contingSort(array) {
  let min;
  let max;
  min = Math.min(...array);
  max = Math.max(...array);
  let i = min,
    j = 0,
    len = array.length,
    count = [];

  for (i; i <= max; i++) {
    count[i] = 0;
  }

  for (i = 0; i < len; i++) {
    count[array[i]] += 1;
  }

  for (i = min; i <= max; i++) {
    while (count[i] > 0) {
      array[j] = i;
      j++;
      count[i]--;
    }
  }
  return array;
}

sort(array, 'prop1', 'c');
