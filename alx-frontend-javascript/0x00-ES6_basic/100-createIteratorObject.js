export default function createIteratorObject(report) {
    function* employeeGenerator(employees) {
        for (const department of Object.values(employees)) {
            for (const employee of department) {
                yield employee;
            }
        }
    }

    return employeeGenerator(report.allEmployees);
}

// export default function createIteratorObject(report) {
//     let allEmployees = [];
//     for (const department of Object.values(report.allEmployees)) {
//       allEmployees = allEmployees.concat(department);
//     }
//     return allEmployees[Symbol.iterator]();
//   }