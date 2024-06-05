import { Teacher } from '../subjects/Teacher';
namespace Subjects {
    class Subject {
        private _teacher?: Teacher;

        public setTeacher(teacher: Teacher): void {
            this._teacher = teacher;
        }
    }
}