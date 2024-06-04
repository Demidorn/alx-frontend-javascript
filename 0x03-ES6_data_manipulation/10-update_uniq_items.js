export default function updateUniqueItems(inputMap) {
  if (!(inputMap instanceof Map)) {
    throw new Error('Cannot process');
  }
  const outputMap = new Map();
  for (const [item, quantity] of inputMap) {
    if (quantity === 1) {
      inputMap.set(item, 100);
    } else {
      outputMap.set(item, quantity + 1);
    }
  }
  return outputMap;
}
