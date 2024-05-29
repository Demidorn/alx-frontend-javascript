import createReportObject from './12-createReportObject.js';
import createEmployeesObject from './11-createEmployeesObject.js';
import createIteratorObject from "./100-createIteratorObject.js";

export default function iterateThroughObject(reportWithIterator) {
    const employeesArray = [...reportWithIterator];
    return employeesArray.join(' | ');
  }
  