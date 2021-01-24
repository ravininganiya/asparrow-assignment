import React, { useState } from "react";
import { Button } from "antd";
import Modal from "antd/lib/modal/Modal";
import AddEducation from "./AddEducation";
import { connect, useSelector } from "react-redux";
import EducationDetails from "./EducationDetails";

const StudentDetail = () => {
  const studentData = useSelector((state) => state.student);
  const [newEducationModal, setNewEducationModal] = useState(false);

  const handleNewEducation = () => {
    setNewEducationModal(true);
  };
  return (
    <>
      <div className="studentDetail">
        <div className="studentDetail_heading">
          Welcome to "{studentData.studentName}" education page.
        </div>
        <Button type="primary" onClick={handleNewEducation}>
          Add new Education
        </Button>
      </div>
      {newEducationModal === true ? (
        <Modal
          title="New Education Modal"
          visible={newEducationModal}
          onCancel={() => setNewEducationModal(false)}
          destroyOnClose={true}
          footer={null}
        >
          <AddEducation
            setNewEducationModal={setNewEducationModal}
            studentData={studentData}
          />
        </Modal>
      ) : null}

      <EducationDetails 
        studentData={studentData}
      />
    </>
  );
};

export default connect()(StudentDetail);
