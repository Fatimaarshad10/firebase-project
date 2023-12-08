import AddAttendanceForm from "./attendance-form";
import { Navbar } from "../navbar";

export const CreateAttendence = () => {
  return (
    <>
      <Navbar />
      <div className="create-post">
        <AddAttendanceForm />
      </div>
    </>
  );
};
