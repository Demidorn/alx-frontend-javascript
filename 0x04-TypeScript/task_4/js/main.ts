import { cpp } from './subjects/Cpp';
import { react } from './subjects/React';
import { java  } from './subjects/Java';


namespace Subjects {
    export interface Teacher {
        firstName: string;
        lastName: string;
        experienceTeachingC?: number;
        experienceTeachingJava?: number;
        experienceTeachingReact?: number;
    }

    export class Subject {
        private _teacher: Teacher;
    
        public setTeacher(teacher: Teacher): void {
            this._teacher = teacher;
        }

        protected get teacher(): Teacher | undefined {
            return this._teacher;
        }
    }
}

const cTeacher: Subjects.Teacher = {
    firstName: 'Guillaume',
    lastName: 'Salva',
    experienceTeachingC: 10
};

// Cpp Subject
console.log('C++');
cpp.setTeacher(cTeacher);
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

//Java Subject
console.log('Java');
java.setTeacher(cTeacher);
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());

//React Subject
console.log('React');
react.setTeacher(cTeacher);
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());
