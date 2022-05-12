import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";

import CrwnLogo from "../../assets/crown.svg?component";

const Navigation = () => {
  return (
    <Fragment>
      <CrwnLogo />
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
