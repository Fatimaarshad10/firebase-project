import { collection, getDocs, deleteDoc as deleteDocument, doc, updateDoc as updateDocument , getDoc } from "firebase/firestore";
import { db } from "../config/firebase";

export const fetchAttendances = async () => {
  try {
    const attendancesCollection = collection(db, "attendance");
    const attendancesSnapshot = await getDocs(attendancesCollection);
    return attendancesSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
  } catch (error) {
    alert(error);
    return [];
  }
};

export const deleteAttendance = async (attendanceId) => {
  try {
    const attendanceDocRef = doc(db, "attendance", attendanceId);
    await deleteDocument(attendanceDocRef);
  } catch (error) {
    throw error;
  }
};

export const updateAttendance = async (attendanceId, data) => {
  try {
    const attendanceDocRef = doc(db, "attendance", attendanceId);
    await updateDocument(attendanceDocRef, data);
  } catch (error) {
    throw error;
  }
};


// Function to fetch course name based on courseId
export const fetchCourseName = async (courseId) => {
  try {
    const courseDoc = await getDoc(doc(db, "courses", courseId));
    if (courseDoc.exists()) {
      return courseDoc.data().name;
    } else {
      return "Course Not Found";
    }
  } catch (error) {
    console.error("Error fetching course name:", error);
    return "Error Fetching Course Name";
  }
};

// Function to fetch student name based on studentId
export const fetchStudentName = async (studentId) => {
  try {
    const studentDoc = await getDoc(doc(db, "students", studentId));
    if (studentDoc.exists()) {
      return studentDoc.data().name;
    } else {
      return "Student Not Found";
    }
  } catch (error) {
    console.error("Error fetching student name:", error);
    return "Error Fetching Student Name";
  }
};