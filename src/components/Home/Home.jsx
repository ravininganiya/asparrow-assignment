import React, { useState } from "react";
import { Button, Input, message } from "antd";
import { connect, useDispatch } from "react-redux";
import { addStudent } from "../../actions";
import StudentDetail from "./StudentDetail";

const Home = () => {
  const dispatch = useDispatch();
  const [studentName, setStudentName] = useState("");
  const [detailPage, setDetailPage] = useState(false);
  const onStudentNameChange = (e) => {
    if (
      e.target.value === "" ||
      e.target.value === "   " ||
      e.target.value === undefined
    ) {
      setStudentName(null);
    } else {
      setStudentName(e.target.value);
    }
  };
  const handleEnter = () => {
    if (!studentName) {
      setStudentName(null);
      message.warning("enter student name");
      return;
    }
    
    dispatch(addStudent(studentName));
    setDetailPage(true);
  };

  return (
    <>
      {detailPage ? (
        <>
          <StudentDetail dispatch={dispatch} />
        </>
      ) : (
        <div className="home_container">
          <div className="home_container_heading">
            Hi there! Welcome to your education showcase
          </div>
          <div className="home_input_heading">
            Type your name and hit "Enter" below to begin
          </div>
          <div className="home_input">
            <Input onChange={onStudentNameChange} />
          </div>
          <Button type="primary" onClick={handleEnter} className="home_button">
            Enter
          </Button>
        </div>
      )}
    </>
  );
};

export default connect()(Home);
