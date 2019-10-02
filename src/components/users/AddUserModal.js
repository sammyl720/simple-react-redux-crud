import React from "react";
import AddUser from "./AddUser";
const AddUserModal = props => {
  return (
    <div className="modal" id="add-user">
      <div className="section" />
      <h3 className="center modal-header blue-text">Add a User</h3>
      <div className="modal-content">
        <AddUser />
      </div>
    </div>
  );
};

export default AddUserModal;
