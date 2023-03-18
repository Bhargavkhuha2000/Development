import React, { useRef, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { NavLink, useNavigate } from 'react-router-dom';
import JoditEditor from 'jodit-react';
import Select from 'react-select';
// import validator from 'validator';
const AddBlog = () => {
  const editor = useRef(null);
  const [description, setDescription] = useState('');
  const [file, setfile] = useState('');
  const [selectedOptions, setSelectedOptions] = useState();
  const optionList = [
    {
      value: 'Java',
      label: 'Java',
    },
    {
      value: 'Version8',
      label: 'Version8',
    },
    {
      value: 'ReactJs',
      label: 'ReactJs',
    },
    {
      value: 'HTML',
      label: 'HTML',
    },
  ];
  const handleSelect = (data) => {
    setSelectedOptions(data);
  };
  const fileHandler = (e) => {
    console.log(e.target.files);
    setfile(URL.createObjectURL(e.target.files[0]));
  };
  return (
    <>
      <div
        className="modal show"
        style={{ display: 'block', position: 'initial' }}
      >
        <Modal.Dialog>
          <Modal.Header closeButton>
            <Modal.Title>Add Blog</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Title</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Full Name"
                  // value={fullName}
                  // onChange={(e) => setFullName(e.target.value)}
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Description</Form.Label>
                <JoditEditor
                  ref={editor}
                  value={description}
                  onChange={(content) => {
                    setDescription(content);
                  }}
                />
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Image</Form.Label>
                  <Form.Control type="file" onChange={fileHandler} />
                </Form.Group>
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Select
                  aria-label="Default select example"
                  options={optionList}
                  placeholder="Select color"
                  value={selectedOptions}
                  onChange={handleSelect}
                  // isSearchable={true}
                  isMulti
                ></Select>
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Author</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Author"
                  disabled={true}
                />
              </Form.Group>
            </form>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary">Close</Button>
            <Button variant="primary">Add Blog</Button>
          </Modal.Footer>
        </Modal.Dialog>
      </div>
    </>
  );
};
export default AddBlog;
