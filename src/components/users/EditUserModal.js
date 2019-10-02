import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { editUser, getUser } from "../../actions/UserActions";
const EditUserModal = ({ id, user, getUser, editUser }) => {
  console.log(id, user);
  const [userInfo, setUserInfo] = useState({
    ...user
  });

  const handleSubmit = e => {
    e.preventDefault();
    editUser({ ...userInfo, id });
  };
  const handleChange = e => {
    setUserInfo({
      ...userInfo,
      [e.target.name]: e.target.value
    });
  };
  return (
    <div className="modal" id={`edit-user-${id}`}>
      <div className="section" />
      <h3 className="center modal-header blue-text">Edit User</h3>
      <div className="modal-content" />
      <div className="row">
        <form
          className="col s12"
          style={{ padding: "10px" }}
          onSubmit={e => handleSubmit(e)}
        >
          <div className="input-field col s10 offset-s1">
            <input
              type="text"
              name="name"
              id="name"
              value={userInfo.name}
              onChange={e => handleChange(e)}
            />
          </div>
          <div className="input-field col s10 offset-s1">
            <input
              type="email"
              name="email"
              id="email"
              value={userInfo.email}
              onChange={e => handleChange(e)}
            />
          </div>

          <div className="col s6 center 0ffset-s2">
            <label>
              <input
                type="checkbox"
                className="filled-in"
                checked={userInfo.isStaff}
                onChange={() =>
                  setUserInfo({ ...userInfo, isStaff: !userInfo.isStaff })
                }
              />
              <span className="blue-text darken-text-3">Staff</span>
            </label>
          </div>
          <div className="col s4 offset-s2 center">
            <input
              className="btn btn-secondary modal-close"
              type="submit"
              value="complete"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default connect(
  null,
  { editUser, getUser }
)(EditUserModal);
