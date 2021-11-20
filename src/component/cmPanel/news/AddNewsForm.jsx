import ReactTagInput from "@pathofdev/react-tag-input";
import { withRouter } from "react-router";
import { Form, FormGroup } from "react-bootstrap";
import { uploadImageCallBack } from "../../../contexts/HtmlEditor";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { Editor } from "react-draft-wysiwyg";

import { uploadImageAction } from "../../../redux/uploadImage";
import { useLayoutChangerProvider } from "../../../redux/LayoutChangerProvider";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import Loader from "../../common/Loader";
import DraftEditor from "./DraftEditor";

const AddNewsForm = ({
  setNewsDetails,
  newsDetails,
  error,
  setATags,
  setTags,
  tags,
  atags,
}) => {
  const dispatch = useDispatch();
  const [loadingImage, setLoadingImage] = useState(false);
  const [uploadImg, setUploadImg] = useState("");
  const { layoutClickChanger } = useLayoutChangerProvider();
  const stockList = useSelector((state) => state.cmPanel.stockList);
  const userDetails = useSelector((state) => state.auth.userData);

  const uploadImgHandler = (e) => {
    dispatch(uploadImageAction(e, setLoadingImage, "news"));
    let img = e.target.files[0];
    let image = URL.createObjectURL(img);
    setUploadImg(image);
  };

  const onEditoraDesStateChange = (editorState) => {
    console.log(editorState, "editor state");
    setNewsDetails({ ...newsDetails, adescription: editorState });
  };
  const onEditorDesStateChange = (editorState) => {
    setNewsDetails({ ...newsDetails, description: editorState });
  };
  const onContentStateChange = (e) => {
    console.log(e);
    console.log(e.blocks[0].text, "text");
  };
  return (
    <>
      <div className="row">
        <div className="col-xl-6 mb-3">
          <Form.Group
            className="mb-3 add-new-stock-field "
            controlId="formBasicEmail"
          >
            <Form.Control
              placeholder={
                userDetails
                  ? `${userDetails.firstName} ${userDetails.lastName}`
                  : "N/A"
              }
              disabled
            />
          </Form.Group>

          <Form.Group
            className="mb-3 add-new-stock-field "
            controlId="formBasicEmail"
          >
            <Form.Control
              type="number"
              placeholder={
                userDetails
                  ? `${userDetails.firstName} ${userDetails.lastName}`
                  : "N/A"
              }
              disabled
            />
          </Form.Group>

          <Form.Group
            className="mb-3 add-new-stock-field position-relative "
            controlId="formBasicEmail"
          >
            <Form.Control
              onChange={(e) => {
                setNewsDetails({
                  ...newsDetails,
                  link: e.target.value,
                });
              }}
              value={newsDetails.link}
              type="text"
              placeholder="YouTube / Image Link"
            />
          </Form.Group>
        </div>
        <div className="col-xl-6 mb-3">
          <div className="news-upload-img-border d-flex align-items-center flex-column justify-content-center">
            {setLoadingImage ? (
              <>
                {uploadImg ? (
                  <img className="h-100 py-2" src={uploadImg} alt="" />
                ) : (
                  <div>
                    <input
                      type="file"
                      id="my-file"
                      disabled={loadingImage}
                      onChange={(e) => uploadImgHandler(e)}
                      hidden
                    />
                    <button className="news-upload-btn cursor-pointer px-3 py-2">
                      <label for="my-file" className="cursor-pointer">
                        {loadingImage ? <Loader /> : "upload img"}
                      </label>
                    </button>
                  </div>
                )}
              </>
            ) : (
              "Uploading please wait for sometime"
            )}
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6 mb-3">
          <div className=" input-tag w-100">
            <ReactTagInput
              tags={atags}
              placeholder="Arabic Tags"
              maxTags={5}
              value={newsDetails.atags}
              editable={true}
              readOnly={false}
              removeOnBackspace={true}
              onChange={(newTags) => setATags(newTags)}
            />
            <span className="text-danger">
              {error && atags.length === 0
                ? "Arabic Details is required"
                : null}
            </span>
          </div>
        </div>
        <div className="col-lg-6 mb-3" dir="ltr">
          <div className=" input-tag w-100">
            <ReactTagInput
              tags={tags}
              placeholder="English Tags"
              maxTags={5}
              editable={true}
              readOnly={false}
              value={newsDetails.tags}
              removeOnBackspace={true}
              onChange={(newTags) => setTags(newTags)}
            />
            <span className="text-danger">
              {error && tags.length === 0 ? "Details is required" : null}
            </span>
          </div>
        </div>
      </div>
      <p className="text-danger">
        Note: Press enter after tag and start New Tag.
      </p>
      <div className="row">
        <div className="col-12 mb-3">
          {layoutClickChanger ? (
            <FormGroup
              onChange={(e) => {
                setNewsDetails({
                  ...newsDetails,
                  stock: e.target.value,
                });
              }}
              value={newsDetails && newsDetails.stock && newsDetails.stock._id}
              className=" add-new-stock-select mb-3"
            >
              <select className="form-select text-end cursor-pointer">
                <option>Stock</option>
                {stockList ? (
                  stockList.map((stock, index) => {
                    return (
                      <option key={index} value={stock._id}>
                        {stock && stock.symbol ? stock.symbol : "N/A"}
                      </option>
                    );
                  })
                ) : (
                  <option>You don't have any stock</option>
                )}
              </select>
            </FormGroup>
          ) : (
            <FormGroup
              onChange={(e) => {
                setNewsDetails({
                  ...newsDetails,
                  stock: e.target.value,
                });
              }}
              value={newsDetails && newsDetails.stock && newsDetails.stock._id}
              className=" add-new-stock-select2 mb-3"
            >
              <select
                className={`${
                  layoutClickChanger
                    ? "form-select text-end cursor-pointer"
                    : "form-select text-start cursor-pointer"
                }`}
              >
                <option>Stock</option>
                {stockList ? (
                  stockList.map((stock, index) => {
                    return (
                      <option key={index} value={stock._id}>
                        {stock && stock.symbol ? stock.symbol : "N/A"}
                      </option>
                    );
                  })
                ) : (
                  <option>You don't have any stock </option>
                )}
              </select>
            </FormGroup>
          )}
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-lg-6 mb-3">
          <Form.Group
            className="mb-3 add-new-stock-field "
            controlId="formBasicEmail"
          >
            <Form.Control
              type="text"
              placeholder="Arabic Title"
              value={newsDetails.atitle}
              onChange={(e) => {
                setNewsDetails({
                  ...newsDetails,
                  atitle: e.target.value,
                });
              }}
            />
            <span className="text-danger">
              {error && newsDetails.atitle === undefined
                ? "Arabic Title is required"
                : null}
            </span>
          </Form.Group>
        </div>
        <div className="col-12 col-lg-6 mb-3" dir="ltr">
          <Form.Group
            className="mb-3 add-new-stock-field "
            controlId="formBasicEmail"
          >
            <Form.Control
              type="text"
              placeholder="English Title"
              value={newsDetails.title}
              onChange={(e) => {
                setNewsDetails({
                  ...newsDetails,
                  title: e.target.value,
                });
              }}
            />
            <span className="text-danger">
              {error && newsDetails.title === undefined
                ? "Title is required"
                : null}
            </span>
          </Form.Group>
        </div>
      </div>
      <div className="row">
        <div className="col-12 mb-3">
          {/*} <textarea
            className={`${
              layoutClickChanger
                ? "w-100 inputs-border p_16_20 textarea-rsize small-paragraph pt-3 pe-3 text-end"
                : "w-100 inputs-border p_16_20 textarea-rsize small-paragraph pt-3 pe-3 text-start"
            }`}
            name=""
            id=""
            cols=""
            rows="6"
            placeholder="Arabic Description"
            onChange={(e) => {
              setNewsDetails({
                ...newsDetails,
                adescription: e.target.value,
              });
            }}
            value={newsDetails.adescription}
          />**/}
          <div className="editor">
            <DraftEditor />
          </div>
        </div>
        <div className="col-12 mb-3" dir="ltr">
          {/*<textarea
            className={`${
              layoutClickChanger
                ? "w-100 inputs-border p_16_20 textarea-rsize small-paragraph pt-3 pe-3 text-start"
                : "w-100 inputs-border p_16_20 textarea-rsize small-paragraph pt-3 pe-3 text-end"
            }`}
            name=""
            id=""
            cols=""
            rows="6"
            placeholder="English Description"
            onChange={(e) => {
              setNewsDetails({
                ...newsDetails,
                description: e.target.value,
              });
            }}
            value={newsDetails.description}
          ></textarea>**/}

          <div className="editor">
            <Editor
              className="inputs-border"
              editorState={newsDetails.description}
              toolbarClassName="toolbarClassName"
              wrapperClassName="wrapperClassName"
              editorClassName="editorClassName"
              onEditorStateChange={onEditorDesStateChange}
              toolbar={{
                inline: { inDropdown: true },
                list: { inDropdown: true },
                textAlign: { inDropdown: true },
                link: { inDropdown: true },
                history: { inDropdown: true },
                image: {
                  uploadCallback: uploadImageCallBack,
                  alt: { present: true, mandatory: true },
                },
              }}
            />
          </div>
        </div>
      </div>
      <div className="col-auto mb-3">
        {layoutClickChanger ? (
          <>
            <label
              className="form-check-label check-box-text cursor-pointer"
              for="flexCheckDefault"
            >
              Feature on homepage
            </label>
            <input
              type="checkbox"
              className="cursor-pointer mx-2"
              onChange={(e) => {
                setNewsDetails({
                  ...newsDetails,
                  showOnHomePage: e.target.checked,
                });
              }}
            />
          </>
        ) : (
          <>
            <input
              type="checkbox"
              checked={newsDetails.showOnHomePage}
              className="cursor-pointer mx-2"
              onChange={(e) => {
                setNewsDetails({
                  ...newsDetails,
                  showOnHomePage: e.target.checked,
                });
              }}
            />
            <label
              className="form-check-label check-box-text cursor-pointer"
              for="flexCheckDefault"
            >
              Feature on homepage
            </label>
          </>
        )}
      </div>
    </>
  );
};
export default withRouter(AddNewsForm);
