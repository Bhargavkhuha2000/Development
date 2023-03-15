import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import { Route, Routes, NavLink } from 'react-router-dom';
import Home from './pages/Home';
import AddBlog from './pages/AddBlog';
import ShowBlog from './pages/ShowBlog';

function App() {
  const [buttonAddBlogPopUp, setbuttonAddBlogPopUp] = useState(false);
  const [buttonShowBlogPopUp, setbuttonShowBlogPopUp] = useState(false);
  const [blogList, setBlogList] = useState([]);
  const [updateBlog, setUpdateBlog] = useState(null);
  return (
    <div>
      <nav class="navbar bg-body-tertiary">
        <form class="container-fluid justify-content-start">
          <NavLink to="/AddBlog">
            <button
              class="btn btn-outline-success me-2"
              type="button"
              onClick={() => setbuttonAddBlogPopUp(true)}
            >
              Add Blog
            </button>
          </NavLink>
          <NavLink to="/ShowBlog">
            <button
              class="btn btn-outline-success me-2"
              onClick={() => setbuttonShowBlogPopUp(true)}
              type="button"
            >
              Show Blog
            </button>
          </NavLink>
        </form>
      </nav>
      {/* <div align="center">
        <NavLink to="/AddBlog">
          <button
            className="btn btn-outline-success"
            onClick={() => setbuttonAddBlogPopUp(true)}
          >
            Add Blog
          </button>
        </NavLink>
        <br />
        <NavLink to="/ShowBlog">
          <button
            className="btn btn-outline-success"
            onClick={() => setbuttonShowBlogPopUp(true)}
          >
            Show Blog
          </button>
        </NavLink>
      </div> */}
      <Routes>
        <Route
          path="/addblog"
          element={
            <AddBlog
              buttonAddBlogPopUp={buttonAddBlogPopUp}
              setbuttonAddBlogPopUp={setbuttonAddBlogPopUp}
              blogList={blogList}
              setBlogList={setBlogList}
              updateBlog={updateBlog}
              setUpdateBlog={setUpdateBlog}
            />
          }
        />
        <Route
          path="/showblog"
          element={
            <ShowBlog
              blogList={blogList}
              buttonShowBlogPopUp={buttonShowBlogPopUp}
              setbuttonShowBlogPopUp={setbuttonShowBlogPopUp}
              setBlogList={setBlogList}
              updateBlog={updateBlog}
              setUpdateBlog={setUpdateBlog}
              setbuttonAddBlogPopUp={setbuttonAddBlogPopUp}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
