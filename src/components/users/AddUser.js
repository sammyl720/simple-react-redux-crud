import React, { useState } from "react";
import { connect } from "react-redux";
import { addUser } from "../../actions/UserActions";
const AddUser = ({ addUser, ...props }) => {
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    isStaff: false
  });
  const handleSubmit = e => {
    e.preventDefault();
    addUser(userInfo);
    setUserInfo({
      name: "",
      email: "",
      isStaff: false
    });
  };
  const handleChange = e => {
    setUserInfo({
      ...userInfo,
      [e.target.name]: e.target.value
    });
  };
  return (
    <div className="row">
      <form
        className="col s12"
        style={{ padding: "10px" }}
        onSubmit={e => handleSubmit(e)}
      >
        <div className="input-field col s10 offset-s1">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            value={userInfo.name}
            onChange={e => handleChange(e)}
          />
        </div>
        <div className="input-field col s10 offset-s1">
          <label htmlFor="email">E-mail</label>
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
        <div className="col s4 0ffset-s2 center">
          <input
            className="btn btn-secondary modal-close"
            type="submit"
            value="Add"
          />
        </div>
      </form>
    </div>
  );
};
export default connect(
  null,
  { addUser }
)(AddUser);
