import React, { useState } from "react";
import { Editor } from "react-draft-wysiwyg";

import { EditorState, convertToRaw, ContentState } from "draft-js";
import htmlToDraft from "html-to-draftjs";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import draftToHtml from "draftjs-to-html";
const DraftEditor = () => {
  const [editorState, setEditorState] = useState();
  const onEditorStateChange = (e) => {
    setEditorState(e);
  };
  console.log(editorState);
  return (
    <>
      <Editor
        className="inputs-border"
        toolbarClassName="toolbarClassName"
        wrapperClassName="wrapperClassName"
        editorClassName="editorClassName"
        editorState={editorState}
        onEditorStateChange={onEditorStateChange}
        toolbar={{
          inline: { inDropdown: true },
          list: { inDropdown: true },
          textAlign: { inDropdown: true },
          link: { inDropdown: true },
          history: { inDropdown: true },
          //   image: {
          //     uploadCallback: uploadImageCallBack,
          //     alt: { present: true, mandatory: true },
          //   },
        }}
      />
    </>
  );
};

export default DraftEditor;
