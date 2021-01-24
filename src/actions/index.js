import { v4 } from "node-uuid";

export const addStudent = (studentName) => ({
  type: "ADD_STUDENT",
  id: v4(),
  studentName,
});

export const addNewEducation = (
    collegeName,
    courseName,
    sessionTime,
  ) => {
    return {
      type: "ADD_EDUCATION",
      user_id:v4(),
      collegeName: collegeName,
      courseName: courseName,
      sessionTime: sessionTime,
    };
  };
  
