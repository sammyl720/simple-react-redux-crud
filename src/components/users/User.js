import React, { Fragment } from "react";
import { connect } from "react-redux";
import EditUserModal from "./EditUserModal";
import { deleteUser, getUser } from "../../actions/UserActions";
const User = ({ name, email, isStaff, id, deleteUser, getUser }) => {
  const handleDelete = () => {
    console.log(JSON.stringify(id));
    deleteUser(id);
  };
  return (
    <li className="collection-item">
      <p>
        <strong>Name: {name} </strong>
        <br />
        <strong>E-mail: {email} </strong>
        <br />
        {isStaff && (
          <Fragment>
            <strong>Staff Member </strong>{" "}
          </Fragment>
        )}
        <span
          className="btn btn-small secondary-content  waves-effect modal-trigger float red"
          data-target={`edit-user-${id}`}
        >
          <i className="material-icons">edit</i>
        </span>
        <span
          className="secondary-content btn btn-small waves-effect float red"
          onClick={() => handleDelete()}
        >
          <i className="material-icons">delete</i>
        </span>
      </p>
      <EditUserModal user={{ name, email, isStaff }} id={id} />
    </li>
  );
};

export default connect(
  null,
  { deleteUser, getUser }
)(User);
