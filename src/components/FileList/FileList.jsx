import React from "react";
import FileItem from "../FileItem/FileItem";

const FileList = ({ files, removeFile }) => {
  const deleteFileHandler = ({ _name }) => {
    fetch("https://.json", {
      method: "DELETE",
    })
      .then((res) => removeFile(_name))
      .then((err) => console.error(err));
  };
  return (
    <ul className="file-list">
      {files &&
        files.map((f) => (
          <FileItem key={f.name} file={f} deleteFile={deleteFileHandler} />
        ))}
    </ul>
  );
};

export default FileList;
