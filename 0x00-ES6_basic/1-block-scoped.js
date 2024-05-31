export default function taslBlock(trueorFalse) {
  let task = false;
  let task2 = true;

  if (trueorFalse) {
    task = true;
    task2 = false;
  }
  return [task, task2];
}
