import "./UploadImage.scss";
import { useState } from "react";
import FileUpload from "./FileUpload/FileUpload";
import FileList from "./FileList/FileList";
import React from "react";

export default function UploadImage() {
  const [files, setFiles] = useState([]);

  const removeFile = (filename) => {
    setFiles(files.filter((file) => file.name !== filename));
  };

  console.log(files);

  return (
    <>
      <div className="uploadImageContainer">
        <p className="titleUpload">Sube una imagen del alimento</p>
        <FileUpload files={files} setFiles={setFiles} removeFile={removeFile} />
        <FileList files={files} removeFile={removeFile} />
      </div>
    </>
  );
}
