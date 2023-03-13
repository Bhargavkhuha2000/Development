import React, { useRef, useState } from 'react';
import JoditEditor from 'jodit-react';
import { Modal, ModalBody, ModalHeader, Row, Col } from 'reactstrap';
const { convert } = require('html-to-text');

const AddBlog = (props) => {
  const { buttonAddBlogPopUp, setbuttonAddBlogPopUp, blogList, setBlogList } =
    props;
  const editor = useRef(null);
  const [contextValue, setContextVelue] = useState('');
  const [cmpName, setcmpName] = useState('');
  const [blgName, setblgName] = useState('');
  const [rollCmp, setrollCmp] = useState('');
  const [title, settitle] = useState('');
  const [publishDate, setpublishDate] = useState('');
  const [category, setcategory] = useState('');
  //Image state is padding
  // const contentHandler = (event) => {
  //   setContextVelue(
  //     (document.createElement('div').innerHTML = event.target.value)
  //   );
  // };
  const submitHandler = (event) => {
    event.preventDefault();
    // setContextVelue((document.createElement('p').innerHTML = contextValue));
    setBlogList([
      ...blogList,
      {
        id: blogList.length + 1,
        companyName: cmpName,
        BloggerName: blgName,
        RollCompany: rollCmp,
        Title: title,
        PublishDate: publishDate,
        Content: (document.createElement('p').innerHTML = contextValue),
        Category: category,
      },
    ]);
    setcmpName('');
    setblgName('');
    setrollCmp('');
    settitle('');
    setpublishDate('');
    setContextVelue('');
    setcategory('');
    console.log(blogList);
  };
  return (
    <>
      <Modal
        size="lg"
        isOpen={buttonAddBlogPopUp}
        toggle={setbuttonAddBlogPopUp(!buttonAddBlogPopUp)}
      >
        <ModalHeader toggle={setbuttonAddBlogPopUp(buttonAddBlogPopUp)}>
          <button onClick={() => setbuttonAddBlogPopUp(false)}>X</button>
        </ModalHeader>
        <ModalBody>
          <h1 align="center">Add Blog Page</h1>
          <form>
            <Row>
              <Col>
                <div>
                  <table align="center">
                    <tr>
                      <td>
                        <label>
                          <b>Company Name</b>
                        </label>
                      </td>
                      <td>
                        <input
                          type="text"
                          value={cmpName}
                          onChange={(event) => setcmpName(event.target.value)}
                          palaceholder="Enter Company Name"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <label>
                          <b>Blogger Name</b>
                        </label>
                      </td>
                      <td>
                        <input
                          type="text"
                          value={blgName}
                          onChange={(event) => setblgName(event.target.value)}
                          palaceholder="Enter Blogger Name"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <label>
                          <b>Role in Company</b>
                        </label>
                      </td>
                      <td>
                        <input
                          type="text"
                          value={rollCmp}
                          onChange={(event) => setrollCmp(event.target.value)}
                          palaceholder="Enter Role.."
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <label>
                          <b>Blog Title</b>
                        </label>
                      </td>
                      <td>
                        <input
                          type="text"
                          value={title}
                          onChange={(event) => settitle(event.target.value)}
                          palaceholder="Enter Title"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <label>
                          <b>Publish Date</b>
                        </label>
                      </td>
                      <td>
                        <input
                          type="date"
                          value={publishDate}
                          onChange={(event) =>
                            setpublishDate(event.target.value)
                          }
                        />
                      </td>
                    </tr>
                    <tr>
                      <td colSpan="2">
                        <label>
                          <b>Content</b>
                        </label>
                        <JoditEditor
                          ref={editor}
                          value={contextValue}
                          onChange={(content) => setContextVelue(content)}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <label>
                          <b>Image</b>
                        </label>
                      </td>
                      <td>
                        <input type="file" />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <label>
                          <b>Category</b>
                        </label>
                      </td>
                      <td>
                        <input
                          type="text"
                          value={category}
                          onChange={(event) => setcategory(event.target.value)}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td colSpan={2} align="right">
                        <button onClick={submitHandler}>Add Blog</button>
                      </td>
                    </tr>
                  </table>
                </div>
              </Col>
            </Row>
          </form>
        </ModalBody>
      </Modal>
    </>
  );
};

export default AddBlog;
