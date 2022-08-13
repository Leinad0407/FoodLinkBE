import React from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import "./FileUpload.scss";
import { createImg } from "../../services/postImage";

const FileUpload = ({ files, setFiles, removeFile }) => {
  const uploadHandler = (event) => {
    const file = event.tatget.files[0];
    file.isUploading = true;
    setFiles([...files, file]);

    // upload file
    const formData = new FormData();
    formData.append(file.name, file, file.name);

    const handleSubmit = async (event) => {
      event.preventDefault();
      console.log("Jalando Ando");
      const formData = {
        files,
      };
      try {
        await createImg(formData);
      } catch (error) {
        console.log(error);
        removeFile(file.name);
      }
    };
  };

  return (
    <>
      <div className="file-card">
        <div className="file-inputs">
          <input type="file" onChange={uploadHandler} />
          <button>
            <i>
              <AiOutlinePlusCircle />
            </i>
            Cargar archivo
          </button>
          <p className="mainUpload">Archivos que soporta</p>
          <p className="infoUpload">PDF, JPG, PNG</p>
        </div>
      </div>
    </>
  );
};

export default FileUpload;
