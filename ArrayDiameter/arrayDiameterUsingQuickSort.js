// calculates a diameter of a given int array using quick sort.
const getarrayDiameter = array => {
  if (!Array.isArray(array)) throw TypeError(`${array} is not an array`)
  const len = array.length
  if (len === 0) return 0

  const sortedArray = quickSort(array, 0, len - 1)
  const min = sortedArray[0]
  const max = sortedArray[len - 1]
  return max - min
}

const quickSort = (array, low, high) => {
  let i = low, j = high
  let t
  if (low < high) {
    while (i < j) {
      t = array[i]
      while (i < j && array[j] >= t) j--
      if (i < j) {
        array[i] = array[j]
        i++
      }
      while (i < j && array[i] <= t) i++
      if (i < j) {
        array[j] = array[i]
        j--
      }
    }
    array[i] = t
    quickSort(array, low, i - 1)
    quickSort(array, i + 1, high)
  }
  return array
}

// test case
console.log(
  getarrayDiameter([1, 2, 5]), // 4
  getarrayDiameter([99, 0, 90, 33, 55, 66, 77, 88, 1, 2, 5]), // 99

  getarrayDiameter([]), // 0
  // getarrayDiameter(123), // TypeError
)

// time complexity 
// O(nlog n)
// best: O(nlog n)
// worst: O(n²)

// the more unsorted the origin array is, the better the performance is;
// the more sorted the origin array is, the less the performance is.


// space complexity
// stacks are needed during the recursion
// O(log n)
