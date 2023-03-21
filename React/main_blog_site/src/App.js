import logo from './logo.svg';
import { useState, useEffect } from 'react';
import './App.css';
import { Route, Routes, NavLink } from 'react-router-dom';
import AddBlog from './component/AddBlog';
import ShowBlog from './component/ShowBlog';
import Login from './component/Login';
import Home from './component/Home';
import Reg from './component/Reg';
import HomeTable from './component/HomeTable';

function App() {
  const [regList, setregList] = useState([]);
  const [blogList, setBlogList] = useState([]);
  const [updateBlog, setUpdateBlog] = useState(null);
  // localStorage.setItem('blogList', JSON.stringify(blogList));
  return (
    <>
      <Home blogList={blogList} />
      <Routes>
        <Route
          path="/home"
          element={
            <HomeTable
              blogList={blogList}
              setBlogList={setBlogList}
              setUpdateBlog={setUpdateBlog}
            />
          }
        />
        <Route
          path="/addblog"
          element={
            <AddBlog
              blogList={blogList}
              setBlogList={setBlogList}
              setUpdateBlog={setUpdateBlog}
              updateBlog={updateBlog}
            />
          }
        />
        <Route
          path="/showblog"
          element={
            <ShowBlog
              blogList={blogList}
              setBlogList={setBlogList}
              setUpdateBlog={setUpdateBlog}
              updateBlog={updateBlog}
            />
          }
        />
        <Route
          path="/login"
          element={
            <Login regList={regList} />
            // <Login loginPopup={loginPopup} setLoginPopup={setLoginPopup} />
          }
        />
        <Route
          path="/reg"
          element={
            <Reg regList={regList} setregList={setregList} />
            // <Reg loginPopup={loginPopup} setLoginPopup={setLoginPopup} />
          }
        />
      </Routes>
      {/* <Reg /> */}
    </>
  );
}

export default App;
