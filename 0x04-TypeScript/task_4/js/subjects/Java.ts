import Subject from './Subject';
import Teacher from './Teacher';


namespace Subjects {
    export interface Teacher {
        experienceTeachingJava?: number;
    }

    export class Java extends Subject {
        public getRequirements(): string {
            return 'Here is the list of requirements for Java';
        }

        public getAvailableTeacher(): string {
            if (this.teacher && this.teacher.experienceTeachingJava !== undefined) {
                return `Available Teacher: ${this.teacher.firstName}`;
            } else {
                return 'No available teacher';
            }
        }
    }
}

export const java = new Subjects.Java();
