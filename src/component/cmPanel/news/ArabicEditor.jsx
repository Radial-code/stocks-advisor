import React, { useEffect } from "react";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { EditorState, convertToRaw, ContentState } from "draft-js";
import draftToHtml from "draftjs-to-html";
import htmlToDraft from "html-to-draftjs";

const ArabicEditor = ({
  setAdescription,
  newsDetails,
  edit,
  setNewsDetails,
}) => {
  const [editorState, setEditorState] = React.useState();
  const valueData = newsDetails.adescription;

  useEffect(() => {
    const html = valueData ? valueData : "";
    const contentBlock = htmlToDraft(html);
    if (contentBlock) {
      const contentState = ContentState.createFromBlockArray(
        contentBlock.contentBlocks
      );
      const newState = EditorState.createWithContent(contentState);
      setEditorState(newState);
    }
  }, [edit, valueData]);

  const onEditorStateChange = (e) => {
    setEditorState(e);
  };

  useEffect(() => {
    if (editorState) {
      const adescription = draftToHtml(
        convertToRaw(editorState.getCurrentContent())
      );
      const regex = /(<([^>]+)>)/gi;
      const result = adescription.replace(regex, "");
      setNewsDetails({
        ...newsDetails,
        pdescription: result,
      });
      setAdescription(adescription);
    }
  }, [editorState]);

  return (
    <Editor
      className="inputs-border "
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
      }}
    />
  );
};

export default ArabicEditor;
