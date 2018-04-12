export function accendingSort(id) {
  return function(a, b) {
    if (a[id] > b[id]) {
      return 1;
    }
    if (a[id] < b[id]) {
      return -1;
    }
    return 0;
  };
}

export function descendingSort(id) {
  return function(a, b) {
    if (a[id] > b[id]) {
      return -1;
    }
    if (a[id] < b[id]) {
      return 1;
    }
    return 0;
  };
}
