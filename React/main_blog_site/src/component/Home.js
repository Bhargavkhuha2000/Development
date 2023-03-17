import React from 'react';
import { NavLink } from 'react-router-dom';

const Home = () => {
  const getlogindata = JSON.parse(localStorage.getItem('userLogin'));
  console.log(getlogindata);

  const LogoutHandler = () => {
    localStorage.removeItem('userLogin');
    window.location.reload(false);
  };

  return (
    <nav class="navbar bg-body-tertiary">
      <form class="container-fluid justify-content-start">
        <NavLink to="/">
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
        {getlogindata && (
          <>
            <button
              class="btn btn-outline-success me-3"
              type="button"
              onClick={LogoutHandler}
            >
              Logout
            </button>
            <h2>Welcome {getlogindata[0].UserName}</h2>
          </>
        )}
        {!getlogindata && (
          <>
            <NavLink to="/Login">
              <button class="btn btn-outline-success me-3" type="button">
                Login
              </button>
            </NavLink>
          </>
        )}

        <h2></h2>
      </form>
    </nav>
  );
};
export default Home;
