import createReportObject from './12-createReportObject';
import createEmployeesObject from './11-createEmployeesObject';
import createIteratorObject from './100-createIteratorObject';

export default function iterateThroughObject(reportWithIterator) {
  const employeesArray = [...reportWithIterator];
  return employeesArray.join(' | ');
}
