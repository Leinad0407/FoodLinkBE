import React from "react";
import "./FileItem.scss";
import { AiOutlineFileImage } from "react-icons/ai";
import { BsFillTrashFill } from "react-icons/bs";
import { FaSpinner } from "react-icons/fa";

const FileItem = ({ file, deleteFile }) => {
  return (
    <li className="list-item" key={file.name}>
      <AiOutlineFileImage />
      <p>{file.name}</p>
      <div className="actions">
        {file.isUploading && <FaSpinner className="fa-spin" />}
        {!file.isUploading && (
          <BsFillTrashFill onClick={() => deleteFile(file.name)} />
        )}
      </div>
    </li>
  );
};

export default FileItem;
