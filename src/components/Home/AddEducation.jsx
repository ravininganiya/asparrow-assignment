import { Button, DatePicker, Input, message } from "antd";
import React, { useState } from "react";
import { connect, useDispatch } from "react-redux";
import { addNewEducation } from "../../actions";

const { RangePicker } = DatePicker;

const AddEducation = ({ setNewEducationModal, studentData }) => {
  const dispatch = useDispatch();
  const [collegeName, setCollegeName] = useState("");
  const [courseName, setCourseName] = useState("");
  const [sessionTime, setSessionTime] = useState("");

  const onCollegeNameChange = (e) => {
    if (
      e.target.value === "" ||
      e.target.value === " " ||
      e.target.value === null ||
      e.target.value === undefined
    ) {
      setCollegeName(null);
    } else {
      setCollegeName(e.target.value);
    }
  };
  const onCourseNameChange = (e) => {
    if (
      e.target.value === "" ||
      e.target.value === " " ||
      e.target.value === undefined
    ) {
      setCourseName(null);
    } else {
      setCourseName(e.target.value);
    }
  };
  const onSessionChange = (date, dateString) => {
    setSessionTime(dateString);
    // console.log(date)
    // console.log(dateString);
  };
  const handleSave = () => {
    if (!collegeName) {
      setCollegeName(null);
      message.warning("enter college name");
      return;
    }
    if (!courseName) {
      setCourseName(null);
      message.warning("enter course name");
      return;
    }
    if (!sessionTime) {
      setSessionTime(null);
      message.warning("enter session(month,year)");
      return;
    }

    dispatch(addNewEducation(collegeName, courseName, sessionTime));
    message.success("New education added successfully");
    setNewEducationModal(false);
  };
  return (
    <>
      <div className="input_container">
        <div className="title_container">
          College Name
          <span className="required_input">*</span>
        </div>
        <div className="main_input">
          <Input onChange={onCollegeNameChange} placeholder="College Name" />
          {collegeName === null ? (
            <div className="required_input">*college name required</div>
          ) : null}
        </div>
      </div>
      <div className="input_container">
        <div className="title_container">
          Course Name
          <span className="required_input">*</span>
        </div>
        <div className="main_input">
          <Input onChange={onCourseNameChange} placeholder="Course Name" />
          {courseName === null ? (
            <div className="required_input">*course name required</div>
          ) : null}
        </div>
      </div>
      <div className="input_container">
        <div className="title_container">
          Session
          <span className="required_input">*</span>
        </div>
        <div className="main_input">
          <RangePicker format="YYYY-MM" picker="month" onChange={onSessionChange}  style={{width:"100%"}} />
          {sessionTime === null ? (
            <div className="required_input">*required </div>
          ) : null}
        </div>
      </div>
      <Button type="primary" onClick={handleSave} className="input_button">
        Save
      </Button>
    </>
  );
};

export default connect()(AddEducation);
