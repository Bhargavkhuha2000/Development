import React from 'react';
import Table from 'react-bootstrap/Table';
import Accordion from 'react-bootstrap/Accordion';
import { useNavigate } from 'react-router-dom';
const HomeTable = (props) => {
  const { blogList, setBlogList, setUpdateBlog } = props;
  const nav = useNavigate();
  const loginData = JSON.parse(localStorage.getItem('userLogin'));
  const handleDelete = (ids) => {
    // e.preventDefault();
    setBlogList(blogList.filter((list) => +list.id !== +ids));
  };
  const handleUpdate = (ids) => {
    setUpdateBlog(blogList.find((data) => data.id === ids));
    nav('/AddBlog');
  };
  const showHandler = (e) => {
    e.preventDefault();
    nav('/ShowBlog');
  };
  //   console.log(blogList[0].Tags[1].value);
  return (
    <div>
      {loginData && blogList.length > 0 && (
        <>
          <Accordion defaultActiveKey="0">
            {blogList.map((d) => (
              <Accordion.Item eventKey={d.id}>
                <Accordion.Header>
                  <b>{d.Title}</b>
                </Accordion.Header>
                <Accordion.Body>
                  <p>Publish Date : {d.PublishDate}</p>
                  <img src={d.Images} height="200" width="400" />
                  <div
                    dangerouslySetInnerHTML={{
                      __html: d.Description,
                    }}
                  />
                  <div>
                    <b>Tags :</b>
                    {d.Tags.map((t) => (
                      <p>#{t.value}</p>
                    ))}
                  </div>
                  <h5 align="right">~{d.Author}</h5>
                  <div align="center">
                    <button
                      class="btn btn-outline-success me-2"
                      onClick={() => {
                        handleDelete(+d.id);
                      }}
                      type="button"
                    >
                      Delete
                    </button>
                    <button
                      class="btn btn-outline-success me-2"
                      onClick={() => {
                        handleUpdate(+d.id);
                      }}
                      type="button"
                    >
                      Update
                    </button>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
          <div align="center">
            <button
              class="btn btn-outline-success me-2"
              type="button"
              onClick={showHandler}
            >
              See All Blogs...
            </button>
          </div>
        </>
      )}
      {loginData && blogList.length === 0 && <h2>Let's Add Some Blogs </h2>}
    </div>
  );
};

export default HomeTable;
