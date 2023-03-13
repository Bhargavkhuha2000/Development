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
  return (
    <div>
      <div>
        <ul>
          <li>
            <NavLink to="/AddBlog">
              <button onClick={() => setbuttonAddBlogPopUp(true)}>
                Add Blog
              </button>
            </NavLink>
          </li>
          <li>
            <NavLink to="/ShowBlog">
              <button onClick={() => setbuttonShowBlogPopUp(true)}>
                Show Blog
              </button>
            </NavLink>
          </li>
        </ul>
      </div>
      <Routes>
        <Route
          path="/addblog"
          element={
            <AddBlog
              buttonAddBlogPopUp={buttonAddBlogPopUp}
              setbuttonAddBlogPopUp={setbuttonAddBlogPopUp}
              blogList={blogList}
              setBlogList={setBlogList}
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
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
