import React from "react";
import axios from "axios";
import { AiOutlinePlusCircle } from "react-icons/ai";
import "./FileUpload.scss";

const FileUpload = ({ files, setFiles, removeFile }) => {
  const uploadHandler = (event) => {
    const file = event.target.files[0];
    if (!file) return;
    file.isUploading = true;
    setFiles([...files, file]);

    //upload file
    const formData = new FormData();
    formData.append("newFile", file, file.name);

    axios
      .post("http://localhost:8080/imagesFood", formData)
      .then((res) => {
        file.isUploading = false;
        setFiles([...files, file]);
      })
      .catch((err) => {
        //inform the user
        console.error(err);
        removeFile(file.name);
      });
  };

  return (
    <>
      <div className="file-card-upload">
        <div className="file-inputs-upload">
          <input type="file" onChange={uploadHandler} />
          <button>
            <i>
              <AiOutlinePlusCircle />
            </i>
            Cargar archivo
          </button>
        </div>
        <p className="mainUpload">Archivos que pueden subirse</p>
        <p className="infoUpload">JPG, PNG</p>
      </div>
    </>
  );
};

export default FileUpload;
