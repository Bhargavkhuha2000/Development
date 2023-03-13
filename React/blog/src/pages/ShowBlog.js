import React, { useState } from 'react';
import { Modal, ModalBody, ModalHeader, Row, Col } from 'reactstrap';

const ShowBlog = (props) => {
  const { blogList, setbuttonShowBlogPopUp, buttonShowBlogPopUp, setBlogList } =
    props;
  const [idForNextPrev, setIdForNextPrev] = useState(0);
  const [findNextPrevData, setFindNextPrevData] = useState(null);
  const [msg, setmsg] = useState('');
  const [nextDisable, setNextDisable] = useState(false);

  // const handleDelete = (ids, event) => {
  //   event.preventDefault();
  //   setBlogList(blogList.filter((data) => data.id !== +ids));
  // };
  const handleDelete = (event) => {
    event.preventDefault();
    const ids = blogList[idForNextPrev].id;
    console.log(ids);
    setBlogList(blogList.filter((list) => +list.id !== +ids));
  };

  const nextHandler = (event) => {
    event.preventDefault();
    if (idForNextPrev <= blogList.length) {
      if (idForNextPrev === blogList.length - 2) {
        setNextDisable(true);
      }
      setIdForNextPrev(idForNextPrev + 1);
    }
  };
  const prevHandler = (event) => {
    event.preventDefault();
    if (idForNextPrev <= blogList.length && idForNextPrev > 0) {
      setIdForNextPrev(idForNextPrev - 1);
      setNextDisable(false);
    }
  };

  // console.log(...blogList);
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
            <div>
              <h2 align="center">{blogList[idForNextPrev].Title}</h2>
              <p align="right">{blogList[idForNextPrev].PublishDate}</p>
              <img height="200" weigth="200"></img>
              <p>{blogList[idForNextPrev].Content}</p>
              <div align="right">
                <p>- {blogList[idForNextPrev].BloggerName}</p>
                <p>{blogList[idForNextPrev].companyName}</p>
                <p>{blogList[idForNextPrev].RollCompany}</p>
              </div>
              <div align="center">
                <button
                  value={blogList[idForNextPrev].id}
                  // onClick={() => handleDelete(+blogList[idForNextPrev].id)}
                  onClick={handleDelete}
                >
                  Delete
                </button>
                <button value={blogList[idForNextPrev].id}>Update</button>
              </div>
            </div>
            {/* ))} */}
          </form>
          <div align="right">
            <button onClick={prevHandler}>PREV BLOG</button>
            <h6>{idForNextPrev + 1}</h6>
            <button onClick={nextHandler} disabled={nextDisable}>
              NEXT BLOG
            </button>
            <p>{msg}</p>
          </div>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default ShowBlog;
