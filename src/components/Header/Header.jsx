import React from "react";

const Header = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
      </div>

      <div className="navbar-end">
        <div className="form-control">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
