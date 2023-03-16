import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import { Route, Routes, NavLink } from 'react-router-dom';
import AddBlog from './component/AddBlog';
import ShowBlog from './component/ShowBlog';
import Login from './component/Login';
import Home from './component/Home';
import Reg from './component/Reg';

function App() {
  const [loginPopup, setLoginPopup] = useState(false);
  const [blogList, setBlogList] = useState([]);
  // const [updateBlog, setUpdateBlog] = useState(null);
  return (
    <>
      <Home />
      <Routes>
        <Route path="/" />
        <Route path="/addblog" element={<AddBlog />} />
        <Route path="/showblog" element={<ShowBlog />} />
        <Route
          path="/login"
          element={
            <Login />
            // <Login loginPopup={loginPopup} setLoginPopup={setLoginPopup} />
          }
        />
        <Route
          path="/reg"
          element={
            <Reg blogList={blogList} setBlogList={setBlogList} />
            // <Reg loginPopup={loginPopup} setLoginPopup={setLoginPopup} />
          }
        />
      </Routes>
      {/* <Reg /> */}
    </>
  );
}

export default App;
