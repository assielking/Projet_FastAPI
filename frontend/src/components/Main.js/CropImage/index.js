import React, { useEffect, useState } from "react";
import UploadComponent from "./UploadComponent";

const CropImage = ({ response, handleSubmit, loading, setResponse }) => {
  const [file, setFile] = useState();
  const [imageUrl, setImageUrl] = useState("");
  const [fileName, setFileName] = useState("");

  const handleConvert = () => {
    const base64String = "..."; // replace with your base64 string
    const binaryData = atob(base64String);
    const blob = new Blob([binaryData], { type: "image/jpeg" });
    const url = URL.createObjectURL(blob);
    setImageUrl(url);
    setFileName("image.jpg");
  };

  useEffect(() => {
    setResponse();
  }, []);
  useEffect(() => {}, [file]);
  const handleImage = () => {
    console.log(file[0].originFileObj, "FILEewewew");

    const formData = new FormData();
    formData.append("file", file[0].originFileObj);

    console.log(formData, "formDatae");
    handleSubmit("crop_image", formData, true);
  };
  return (
    <div>
      <div className="mt-8">
        <UploadComponent setFile={setFile} />
        <div className="mb-6 mt-6 w-[80%] m-auto ">
          <button
            onClick={handleImage}
            type="submit"
            disabled={file? false : true}
            class={`${file && file[0]?.originFileObj? ' focus-visible:outline-indigo-600 hover:bg-indigo-500 bg-indigo-600 '  : ''} flex w-full mt-10 justify-center rounded-md px-3 py-3.5 text-sm font-semibold leading-6 text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2`}
          >
            Soumettre
          </button>
        </div>
        {loading === true && <h1>...</h1>}
        {response?.link === 3 && loading === false && (
          <div className="m-auto">
            Resultat :
            <div className="w-fit m-auto">
              <img class="w-[250px]" src={response.value} alt="" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CropImage;
