import React, { useEffect } from "react";
import M from "materialize-css/dist/js/materialize.min.js";
import { connect } from "react-redux";
import AddUserModal from "./AddUserModal";

import User from "./User";
const Users = ({ users }) => {
  useEffect(() => {
    M.AutoInit();
  }, [users]);
  return (
    <div className="row">
      <div className="section" />
      <ul className="col s12 m10 offset-m1 collection with-headers">
        <h3 className="collection-header center">Users</h3>
        {users.map(user => (
          <User key={user.id} {...user} />
        ))}
      </ul>
      <div className="fixed-action-btn">
        <div className="btn-large red btn-floating">
          <a href="#!" data-target="add-user" className="modal-trigger">
            <i className="material-icons large">add</i>
          </a>
        </div>
      </div>

      <AddUserModal />
    </div>
  );
};
const mapStateToProp = state => ({
  users: state.users.list
});
export default connect(mapStateToProp)(Users);
