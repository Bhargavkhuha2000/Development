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
    setbuttonAddBlogPopUp,
  } = props;

  const [idForNextPrev, setIdForNextPrev] = useState(0);
  const [nextDisable, setNextDisable] = useState(false);

  //delete Handler
  const handleDelete = (event) => {
    event.preventDefault();

    const ids = blogList[idForNextPrev].id;
    console.log(ids);
    setBlogList(blogList.filter((list) => +list.id !== +ids));
    if (idForNextPrev === blogList.length - 1) {
      setIdForNextPrev(0);
    }
  };

  //update handler
  const handleUpdate = (event) => {
    event.preventDefault();

    const ids = blogList[idForNextPrev].id;
    console.log(ids);
    setUpdateBlog(blogList.find((data) => data.id === ids));

    setbuttonShowBlogPopUp(false);
    setbuttonAddBlogPopUp(true);
  };
  console.log(updateBlog);
  console.log(blogList.length);
  console.log(idForNextPrev);
  //next blog handler
  const nextHandler = (event) => {
    event.preventDefault();

    if (idForNextPrev < blogList.length - 1 && blogList.length - 1 > 0) {
      setIdForNextPrev(idForNextPrev + 1);
    }
    console.log(idForNextPrev);
  };

  //prev blog handler
  const prevHandler = (event) => {
    event.preventDefault();

    if (idForNextPrev <= blogList.length && idForNextPrev > 0) {
      setIdForNextPrev(idForNextPrev - 1);
      // setNextDisable(false);
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
          {blogList.length === 0 && <h2>No Data Found</h2>}
          {blogList.length > 0 && (
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
                    <div
                      dangerouslySetInnerHTML={{
                        __html: blogList[idForNextPrev].Content,
                      }}
                    />
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
          )}
          <div align="right">
            <button onClick={prevHandler}>PREV BLOG</button>
            <h6>{idForNextPrev + 1}</h6>
            <button onClick={nextHandler}>NEXT BLOG</button>
          </div>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default ShowBlog;
