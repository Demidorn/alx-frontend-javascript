interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: 'John',
    lastName: 'Doe',
    age: 22,
    location: 'USA',
};

const student2: Student = {
    firstName: 'Jane',
    lastName: 'Doe',
    age: 23,
    location: 'UK',
};

const studentsList: Array<Student> = [student1, student2];

const tableBody = document.getElementById('student-table')!.getElementsByTagName('tbody')[0];
studentsList.forEach((student) => {
    const row = tableBody.insertRow();
    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);
    cell1.textContent = student.firstName;
    cell2.textContent = student.location;
});
