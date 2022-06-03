import React, { useState } from "react";
import axios from "axios";
import { db } from "./firebase/Firebase";
import {
  getDocs,
  collection,
  addDoc,
  doc,
  deleteDoc,
  updateDoc,
} from "firebase/firestore";

const App = () => {
  const [selectedImage, setSelectedImage] = useState("");
  const photosCollectionRef = collection(db, "photos");

  console.log(selectedImage);

  const {REACT_APP_CLOUDINARY_PRESET, REACT_APP_CLOUDINARY_NAME} = process.env;

  const handleUpload = async () => {
    const formData = new FormData();
    // step1
    formData.append("file", selectedImage);

    // step2
    formData.append("upload_preset", REACT_APP_CLOUDINARY_PRESET);

    try {
      const data = await axios.post(
        `https://api.cloudinary.com/v1_1/${REACT_APP_CLOUDINARY_NAME}/upload`,
        formData
      );
      await addDoc(photosCollectionRef, {
        image: data.data.url
      });
      console.log(data);
      alert("Successfylly uploaded photo!");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <input
        type="file"
        onChange={(e) => setSelectedImage(e.target.files[0])}
      />
      <button onClick={handleUpload}>Upload Image</button>
    </div>
  );
};

export default App;
