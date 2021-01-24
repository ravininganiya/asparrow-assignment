const initialState = [];

const student = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_STUDENT":
      return {
        ...state,
        id: action.id,
          studentName: action.studentName,
          education: [],

      };

    case "ADD_EDUCATION":
      return {
        ...state,
        education: [
          ...state.education,
          {
            user_id: action.user_id,
            collegeName: action.collegeName,
            courseName: action.courseName,
            sessionTime: action.sessionTime,
          }
        ]
      }
      default:
        return state;
  }
};

export default student;