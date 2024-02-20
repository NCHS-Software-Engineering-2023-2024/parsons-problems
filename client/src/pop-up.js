import React, { useState } from "react";
import { SingleFileUpload } from "./Fileupload";

const PopUp = ({ idMessage }) => {
  // create state `open` with default as false
  const [open, setOpen] = useState(false);
  return (
    <>
      {/* click of button toggles `open` value therefore visibility */}
      <button
        onClick={() => setOpen(!open)}
        type="button"
        className="btn btn-primary"
        data-toggle="modal"
        data-target={`#${idMessage}`}
      >
        Upload
        {idMessage}
      </button>
      {/* If open is true show <div /> */}
      {open && (
        <div
          className="modal fade"
          id={idMessage}
          tabIndex="-1"
          role="dialog"
        >
          {SingleFileUpload()}
        </div>
      )}
    </>
  );
};

export default PopUp;