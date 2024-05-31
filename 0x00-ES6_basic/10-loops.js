export default function appendToEachArrayValue(array, appendString) {
  // return array.map((value) => appendString + value);
  const newArray = [];
  for (const idx of array) {
    newArray.push(`${appendString}${idx}`);
  }
  return newArray;
}
