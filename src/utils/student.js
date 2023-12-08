import { collection, getDocs, deleteDoc as deleteDocument, doc, updateDoc as updateDocument } from "firebase/firestore";
import { db } from "../config/firebase";

export const fetchStudents = async () => {
  try {
    const studentsCollection = collection(db, "students");
    const studentsSnapshot = await getDocs(studentsCollection);
    return studentsSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
  } catch (error) {
    alert(error);
    return [];
  }
};

export const deleteStudent = async (studentId) => {
  try {
    const studentDocRef = doc(db, "students", studentId);
    await deleteDocument(studentDocRef);
  } catch (error) {
    throw error;
  }
};

export const updateStudent = async (studentId, data) => {
  try {
    const studentDocRef = doc(db, "students", studentId);
    await updateDocument(studentDocRef, data);
  } catch (error) {
    throw error;
  }
};
