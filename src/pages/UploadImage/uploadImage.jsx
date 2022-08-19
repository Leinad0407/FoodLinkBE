import "../UploadImage/UploadImage.scss";
import { useState } from "react";
import FileUpload from "../../components/FileUpload/FileUpload";
import FileList from "../../components/FileList/FileList";

export default function UploadImage() {
  const [files, setFiles] = useState([
    {
      name: "myFile.pdf",
    },
  ]);

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
