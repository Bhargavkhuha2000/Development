import React, { useState } from 'react';
import { Modal, ModalBody, ModalHeader, Row, Col, NavLink } from 'reactstrap';
import AddBlog from './AddBlog';
import { Route, Routes } from 'react-router-dom';

const ShowBlog = (props) => {
  const {
    blogList,
    setbuttonShowBlogPopUp,
    buttonShowBlogPopUp,
    setBlogList,
    setUpdateBlog,
    updateBlog,
  } = props;

  const [idForNextPrev, setIdForNextPrev] = useState(0);
  const [nextDisable, setNextDisable] = useState(false);

  //delete Handler
  const handleDelete = (event) => {
    event.preventDefault();

    const ids = blogList[idForNextPrev].id;
    console.log(ids);
    setBlogList(blogList.filter((list) => +list.id !== +ids));

    if (idForNextPrev > 1) {
      setIdForNextPrev(idForNextPrev - 1);
    }
  };

  //update handler
  const handleUpdate = (event) => {
    event.preventDefault();
    const ids = blogList[idForNextPrev].id;
    console.log(ids);
    setUpdateBlog(blogList.find((data) => data.id === ids));
  };
  console.log(updateBlog);
  //next blog handler
  const nextHandler = (event) => {
    event.preventDefault();

    if (idForNextPrev <= blogList.length) {
      if (idForNextPrev === blogList.length - 2 || blogList.length === 0) {
        setNextDisable(true);
      }
      setIdForNextPrev(idForNextPrev + 1);
    } else if (blogList.length === 1) {
      setNextDisable(true);
    }
  };

  //prev blog handler
  const prevHandler = (event) => {
    event.preventDefault();

    if (idForNextPrev <= blogList.length && idForNextPrev > 0) {
      setIdForNextPrev(idForNextPrev - 1);
      setNextDisable(false);
    }
  };

  return (
    <div>
      <Modal
        size="lg"
        isOpen={buttonShowBlogPopUp}
        toggle={setbuttonShowBlogPopUp(!buttonShowBlogPopUp)}
      >
        <ModalHeader toggle={setbuttonShowBlogPopUp(buttonShowBlogPopUp)}>
          <button onClick={() => setbuttonShowBlogPopUp(false)}>X</button>
        </ModalHeader>
        <ModalBody>
          <h1 align="center">Show Blog Page</h1>
          <form>
            <Row>
              <Col>
                <div>
                  <h2 align="center">
                    <i>
                      <u>{blogList[idForNextPrev].Title}</u>
                    </i>
                  </h2>
                  <p align="right">
                    Pubmish Date : {blogList[idForNextPrev].PublishDate}
                  </p>
                  <img
                    height="300"
                    width="700"
                    src={blogList[idForNextPrev].Images}
                  ></img>
                  <p>{blogList[idForNextPrev].Content}</p>
                  <div align="right">
                    <p>- {blogList[idForNextPrev].BloggerName}</p>
                    <p>{blogList[idForNextPrev].companyName}</p>
                    <p>{blogList[idForNextPrev].RollCompany}</p>
                  </div>
                  <div align="center">
                    <button
                      value={blogList[idForNextPrev].id}
                      onClick={handleDelete}
                    >
                      Delete
                    </button>
                    <NavLink to="/AddBlog.js">
                      <button
                        value={blogList[idForNextPrev].id}
                        onClick={handleUpdate}
                      >
                        Update
                      </button>
                    </NavLink>
                  </div>
                </div>
              </Col>
            </Row>
          </form>
          <div align="right">
            <button onClick={prevHandler}>PREV BLOG</button>
            <h6>{idForNextPrev + 1}</h6>
            <button onClick={nextHandler} disabled={nextDisable}>
              NEXT BLOG
            </button>
          </div>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default ShowBlog;
