import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import { db } from "./firebase/Firebase";
import {
  getDocs,
  collection,
  addDoc,
} from "firebase/firestore";

const App = () => {
  const [selectedImage, setSelectedImage] = useState("");
  const photosCollectionRef = collection(db, "photos");
  const [images, setImages] = useState([]);
  const [wasImageUploaded, setImageUploaded] = useState(false);

  console.log(selectedImage);

  useEffect(() => {
    fetchImages();
    // eslint-disable-next-line
  }, [wasImageUploaded]);

  const {
    REACT_APP_CLOUDINARY_PRESET,
    REACT_APP_CLOUDINARY_NAME,
  } = process.env;

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
      const info = await addDoc(photosCollectionRef, {
        image: data.data.url,
      });
      console.log(info, "INFO");
      setImageUploaded(!wasImageUploaded);
      alert("Successfylly uploaded photo!");
    } catch (err) {
      console.log(err);
    }
  };

  const fetchImages = async () => {
    const imageList = await getDocs(photosCollectionRef);
    const data = imageList.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));

    setImages(data);
  };

  const postServerImage = async (base64ImageUrl) => {
    try {
      const data = await axios.post("http://localhost:2000/api/v1/upload", {
        image: base64ImageUrl,
      });
      alert(data.data.message);
    } catch (error) {
      console.log(error);
    }
  };

  const uploadImageUsingServer = () => {
    const reader = new FileReader();

    // Allows us to use image data as url
    reader.readAsDataURL(selectedImage);

    reader.onloadend = () => {
      postServerImage(reader.result);
    };
  };

  return (
    <div className="App">
      <div className="upload-container">
        <input
          type="file"
          className="inputButton"
          onChange={(event) => setSelectedImage(event.target.files[0])}
        />
        <button onClick={handleUpload}>Upload Image</button>
        <button onClick={uploadImageUsingServer}>
          Upload Image Using Server
        </button>
      </div>

      <section className="image-container">
        {images.map((data, index) => {
          return (
            <div key={index} className="image">
              <img src={data.image} alt={data.id} />
            </div>
          );
        })}
      </section>
    </div>
  );
}

export default App;
