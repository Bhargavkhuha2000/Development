import React, { useRef, useState, useEffect } from 'react';
import JoditEditor from 'jodit-react';
import { Modal, ModalBody, ModalHeader, Row, Col } from 'reactstrap';

const AddBlog = (props) => {
  const {
    buttonAddBlogPopUp,
    setbuttonAddBlogPopUp,
    blogList,
    setBlogList,
    updateBlog,
    setUpdateBlog,
  } = props;
  const editor = useRef(null);
  const [contextValue, setContextVelue] = useState('');
  const [cmpName, setcmpName] = useState('');
  const [blgName, setblgName] = useState('');
  const [rollCmp, setrollCmp] = useState('');
  const [title, settitle] = useState('');
  const [publishDate, setpublishDate] = useState('');
  const [category, setcategory] = useState('');
  const [file, setfile] = useState('');

  function updateNewData(id, cName, bName, RCmp, title, date, Con, Imgs, Cat) {
    setBlogList(
      ...blogList.map((d) =>
        +d.id === +id
          ? {
              id: +id,
              companyName: cName,
              BloggerName: bName,
              RollCompany: RCmp,
              Title: title,
              PublishDate: date,
              Content: Con,
              Images: Imgs,
              Category: Cat,
            }
          : d
      )
    );
    setUpdateBlog('');
  }

  const fileHandler = (e) => {
    console.log(e.target.files);
    setfile(URL.createObjectURL(e.target.files[0]));
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (!updateBlog) {
      setBlogList([
        ...blogList,
        {
          id: blogList.length + 1,
          companyName: cmpName,
          BloggerName: blgName,
          RollCompany: rollCmp,
          Title: title,
          PublishDate: publishDate,
          Content: contextValue,
          Images: file,
          Category: category,
        },
      ]);
    } else {
      updateNewData(
        +updateBlog.id,
        cmpName,
        blgName,
        rollCmp,
        title,
        publishDate,
        contextValue,
        file,
        category
      );
    }
    setcmpName('');
    setblgName('');
    setrollCmp('');
    settitle('');
    setpublishDate('');
    setContextVelue('');
    setcategory('');
    console.log(blogList);
  };
  // useEffect(() => {
  //   if (updateBlog) {
  //     // console.log(updateData.fname);
  //     setcmpName(updateBlog.companyName);
  //     setblgName(updateBlog.BloggerName);
  //     setrollCmp(updateBlog.RollCompany);
  //     settitle(updateBlog.Title);
  //     setpublishDate(updateBlog.PublishDate);
  //     setContextVelue(updateBlog.Content);
  //     setfile(updateBlog.Images);
  //     setcategory(updateBlog.Category);
  //   } else {
  //     setcmpName('');
  //     setblgName('');
  //     setrollCmp('');
  //     settitle('');
  //     setpublishDate('');
  //     setContextVelue('');
  //     setcategory('');
  //   }
  // }, [
  //   setcmpName,
  //   setblgName,
  //   setrollCmp,
  //   settitle,
  //   setpublishDate,
  //   setContextVelue,
  //   setcategory,
  //   setfile,
  //   updateBlog,
  // ]);
  return (
    <>
      <Modal
        size="lg"
        isOpen={buttonAddBlogPopUp}
        toggle={setbuttonAddBlogPopUp(!buttonAddBlogPopUp)}
      >
        <ModalHeader toggle={setbuttonAddBlogPopUp(buttonAddBlogPopUp)}>
          <button align="right" onClick={() => setbuttonAddBlogPopUp(false)}>
            X
          </button>
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
                          onChange={(content) => {
                            setContextVelue(content);
                          }}
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
                        <input type="file" onChange={fileHandler} />
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
                        <button onClick={submitHandler}>
                          {!updateBlog ? 'Add Blog' : 'Update Blog'}
                        </button>
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
