// calculates a diameter of a given int array using merge sort.
const getarrayDiameter = array => {
  if (!Array.isArray(array)) throw TypeError(`${array} is not an array`)
  const len = array.length
  if (len === 0) return 0

  const sortedArray = mergeSort(array)
  const min = sortedArray[0]
  const max = sortedArray[len - 1]
  return max - min
}

const merge = (left, right) => {
  const result = []

  while (left.length > 0 && right.length > 0) {
    result.push(left[0] < right[0] ? left.shift() : right.shift())
  }
  return [...result, ...left, ...right]
}

const mergeSort = array => {
  const len = array.length
  if (len < 2) return array
  const middle = Math.floor(len / 2)

  const leftArray = mergeSort(array.slice(0, middle))
  const rightArray = mergeSort(array.slice(middle))

  return merge(leftArray, rightArray)
}

// test case
console.log(
  getarrayDiameter([1, 2, 5]), // 4
  getarrayDiameter([99, 0, 87, 33, 55, 66, 77, 88, 1, 2, 5]), // 99

  getarrayDiameter([]), // 0
  // getarrayDiameter(123), // TypeError
)

// time complexity 
// O(nlog n)
// best O(nlog n)
// worst O(nlog n)

// space complexity
// an array is needed during the process, so
// O(n)