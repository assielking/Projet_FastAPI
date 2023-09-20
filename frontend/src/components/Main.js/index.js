import React, { useState } from "react";
import Poids from "./Poids";
import Titanic from "./Titanic";
import Example from "../Example";
import CropImage from "./CropImage";
import axios from "axios";
import NotAuth from "./NotAuth";

const Main = ({ link, user, setLink, apiKey }) => {
  const [res, setRes] = useState();
  const [err, setErr] = useState();
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (route, formData, boolean) => {
    setLoading(true);
    // if (boolean === true) {
    //   const response = await fetch("http://127.0.0.1:8000/crop_image", {
    //     method: "POST",
    //     body: formData,
    //     headers: {
    //       "x-api-key": apiKey,
    //       "Content-Type": "multipart/form-data",
    //     },
    //   });

    //   if (response.ok) {
    //     const blob = await response.blob();
    //     const url = URL.createObjectURL(blob);
    //     console.log(url, "URL");
    //     // setImageSrc(url);
    //   } else {
    //     console.error("Failed to crop image");
    //   }
    // } else {
    try {
      const res = await axios.post(`http://127.0.0.1:8000/${route}`, formData, {
        headers: {
          "x-api-key": apiKey,
          "Content-Type": `${
            boolean ? "multipart/form-data" : "application/json"
          }`,
        },
        [boolean?'responseType':'']: 'arraybuffer'
        // responseType: `${
        //   boolean ? "arraybuffer" : undefined
        // }`,
      });
      if (boolean) {
        const data = new Uint8Array(res.data);
        const blob = new Blob([data], { type: "image/jpeg" });
        var reader = new FileReader();
        reader.readAsDataURL(blob);
        reader.onloadend = function () {
          var base64data = reader.result;
          setRes({ link, value: base64data });
        };
        setLoading(false);
      } else {
        setLoading(false)
        console.log(res, "response");
        setRes({ link, value: res.data });
      }
    } catch (error) {
      setLoading(false);
      setRes();
      setErr(true);
      setTimeout(() => {
        setErr();
      }, 2000);
    }
    // }
  };
  return (
    <div className="bg-gray-200 w-full min-h-full flex justify-between items-center">
      <div class="w-[700px] rounded-md shadow-sm bg-white m-auto transition duration-500">
        <div className="m-7 mb-[100px]">
          <h2 class="text-2xl  font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
            {link === 1 && <span>Prediction de poids</span>}
            {link === 2 && <span>Prediction Titanic</span>}
            {link === 3 && <span>Crop Image</span>}
          </h2>
          <p className="mt-7 border-b border-b-gray-900/10"></p>
          {link === 1  &&
            <Poids
              response={res}
              setResponse={setRes}
              loading={loading}
              handleSubmit={handleSubmit}
            /> 
          }
          {link === 2 && (user[0] === 'admin'?
            <Titanic
              response={res}
              setResponse={setRes}
              loading={loading}
              handleSubmit={handleSubmit}
            /> : <NotAuth/>)
          }
          {link === 3 &&  (
            <CropImage
              response={res}
              setResponse={setRes}
              loading={loading}
              handleSubmit={handleSubmit}
            />
          )}

          {err && (
            <button
              type="submit"
              class="flex w-full mt-10 justify-center rounded-md  text-red-600 bg-red-300 px-3 py-3.5 text-sm font-semibold leading-6  shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Une erreur s'est produite. Reessayez!
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Main;
