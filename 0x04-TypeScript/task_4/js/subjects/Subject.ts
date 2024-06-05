import Teacher from './Teacher';


namespace Subjects {
    class Subject {
        private _teacher?: Teacher;

        public setTeacher(teacher: Teacher): void {
            this._teacher = teacher;
        }

        protected get teacher(): Teacher | undefined {
            return this._teacher;
        }
    }
}

export default Subjects.Subject;