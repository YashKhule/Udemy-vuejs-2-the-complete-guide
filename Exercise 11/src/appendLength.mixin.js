export const appendLength = {
  filters: {
    'append-length': function (value) {
      return `${value} (${value.length})`;
    }
  }
}