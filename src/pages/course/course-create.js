import AddCourseForm from "./course-form";
import {Navbar} from '../navbar'

export const CreateCourse = () => {
  return (
    <>
    <Navbar/>
    <div className="create-post">
      <AddCourseForm />
    </div>
    </>
  );
};