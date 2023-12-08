import { collection, getDocs, deleteDoc as deleteDocument, doc, updateDoc as updateDocument } from "firebase/firestore";
import { db } from "../config/firebase";

export const fetchcourses = async () => {
  try {
    const coursesCollection = collection(db, "courses");
    const data = await getDocs(coursesCollection);
    return data.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
  } catch (error) {
    alert(error);
    return [];
  }
};

export const deletecourse = async (courseId) => {
  try {
    const courseDocRef = doc(db, "courses", courseId);
    await deleteDocument(courseDocRef);
  } catch (error) {
    throw error;
  }
};

export const updatecourse = async (courseId, data) => {
  try {
    const courseDocRef = doc(db, "courses", courseId);
    await updateDocument(courseDocRef, data);
  } catch (error) {
    throw error;
  }
};
