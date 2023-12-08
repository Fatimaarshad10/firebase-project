import AddStudentForm from "./student-form";
import {Navbar} from '../navbar'
export const CreateStudent = () => {
  return (
    <>
    <Navbar/>
    <div className="create-post">
      <AddStudentForm />
    </div>
    </>
  );
};