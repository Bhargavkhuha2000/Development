import React from 'react';
import { NavLink } from 'react-router-dom';

const Home = (props) => {
  const { setLoginPopup, loginPopup } = props;
  //   const popHandler = () => setLoginPopup(!loginPopup);
  return (
    <nav class="navbar bg-body-tertiary">
      <form class="container-fluid justify-content-start">
        <NavLink to="/home">
          <button class="btn btn-outline-success me-3" type="button">
            Home
          </button>
        </NavLink>
        <NavLink to="/AddBlog">
          <button class="btn btn-outline-success me-3" type="button">
            Add Blog
          </button>
        </NavLink>
        <NavLink to="/ShowBlog">
          <button class="btn btn-outline-success me-3" type="button">
            Show Blog
          </button>
        </NavLink>
        <NavLink to="/Login">
          <button
            class="btn btn-outline-success me-3"
            type="button"
            // onClick={popHandler}
          >
            Login
          </button>
        </NavLink>
      </form>
    </nav>
  );
};
export default Home;
